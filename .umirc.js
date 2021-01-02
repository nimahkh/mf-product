import { name } from "./package.json";
import { slave } from "umi-plugin-qiankun";

export default {
  base: name,
  publicPath: "/mf-product/",
  outputPath: "./dist",
  mountElementId: "mf-product",
  plugins: [
    [
      slave,
      {
        keepOriginalRoutes: true
      }
    ],
    [
      "umi-plugin-react",
      {
        title: "mf-product",
        antd: true,
        dva: {
          always: true,
          hmr: true
        },
        dynamicImport: true,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/
          ]
        }
      }
    ]
  ]
};

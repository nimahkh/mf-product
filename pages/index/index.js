import React from "react";
import { Button, Layout, Menu, Breadcrumb } from "antd";
import { connect } from "umi";
import "./index.css";
import CountProductsThatWeHave from "./CountProductsThatWeHave";
import { PlusOutlined } from "@ant-design/icons";

const { Header, Footer, Sider, Content } = Layout;

function Index({ products, dispatch }) {
  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout">
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>Products</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background">
            <Button
              onClick={() =>
                dispatch({
                  type: "card/add",
                  payload: {
                    product: Math.floor(Math.random() * Math.floor(100))
                  }
                })
              }
              type="primary"
              shape="round"
              icon={<PlusOutlined />}
              size={"large"}
            >
              Add Product
            </Button>

            <CountProductsThatWeHave />
          </div>
        </Content>
        <Footer style={{ textAlign: "center", justifyContent: "space-around" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
}

export default connect(state => {
  const { products } = state?.card;
  return {
    products
  };
})(Index);

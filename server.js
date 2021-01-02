const Koa = require("koa");
const compress = require("koa-compress");
const mount = require("koa-mount");
const { join, extname } = require("path");
const { parseCookie, parseNavLang } = require("./serverHelper");
const cors = require("@koa/cors");

const isDev = process.env.NODE_ENV === "development";

const root = join(__dirname, "dist");

const app = new Koa();
app.use(cors());

app.use(
  compress({
    threshold: 2048,
    gzip: {
      flush: require("zlib").constants.Z_SYNC_FLUSH
    },
    deflate: {
      flush: require("zlib").constants.Z_SYNC_FLUSH
    },
    br: false
  })
);

let render;
app.use(async (ctx, next) => {
  global._cookies = parseCookie(ctx);
  global._navigatorLang = parseNavLang(ctx);

  const ext = extname(ctx.request.path);
  if (!ext) {
    if (!render) {
      render = require("./dist/umi.server");
    }
    ctx.type = "text/html";
    ctx.status = 200;
    const { html, error } = await render({
      path: ctx.request.url
    });
    if (error) {
      ctx.throw(500, error);
    }
    if (isDev) {
      delete require.cache[require.resolve("./dist/umi.server")];
    }
    ctx.body = html;
  } else {
    await next();
  }
});

app.use(mount("/dist", require("koa-static")(root)));

app.listen(7101);
console.log("http://localhost:7101");

module.exports = app.callback();

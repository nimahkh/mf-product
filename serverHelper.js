const parseCookie = ctx => {
  let cookies = ctx.get("cookie");
  if (!cookies) {
    return [];
  }
  cookies = cookies.split(";");
  const res = {};
  for (const item of cookies) {
    const kv = item.split("=");
    if (kv && kv.length > 0) {
      res[kv[0].trim()] = decodeURIComponent(kv[1]);
    }
  }
  return res;
};

const parseNavLang = ctx => {
  let navigatorLang;
  const clientLang = ctx.get("Accept-Language");
  if (clientLang.startsWith("zh")) {
    navigatorLang = "zh-CN";
  } else if (clientLang.startsWith("en")) {
    navigatorLang = "en-US";
  }
  return navigatorLang;
};

module.exports = {
  parseCookie,
  parseNavLang
};

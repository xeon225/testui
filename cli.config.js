module.exports = {
  webSiteName: "CyanMaple.design", //默认名称
  servicePort: "", //后台服务端口
  ajaxCache: true, //ajax请求是否默认使用缓存
  axiosConfig: {
    //创建axios实例的配置文件
    baseURL: "/",
    timeout: 10000,
    responseType: "json",
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    }
  },
  domain: {
    localhost: "cyanmaple.design",
    "127.0.0.1": "cyanmaple.design"
  }
};

import axios from "axios";
import qs from "qs";
import _ from "lodash";
import localData from "cyanmaple/src/maple/methods/local";
import sessionData from "cyanmaple/src/maple/methods/session";
import cliConfig from "_config";
const Axios = axios.create(cliConfig.axiosConfig);
const CancelToken = axios.CancelToken;
const requestMap = new Map();
const requestData = new Map();
const MESSAGE = {
  frequently: "请求频繁"
};
// 请求前置拦截器
Axios.interceptors.request.use(
  config => {
    // 防重复提交
    if (requestMap.get(config._keyString)) {
      // 取消当前请求
      config.cancelToken = new CancelToken(cancel => {
        cancel(MESSAGE.frequently);
      });
    }
    requestMap.set(config._keyString, true);

    return new Promise(resolve => {
      resolve(config);
    }).then(config => {
      // 序列化
      if (config.method === "post" || config.method === "put" || config.method === "delete") {
        config.data = qs.stringify(config.data);
      }
      return config;
    });
  },
  error => {
    return Promise.reject(error);
  }
);
// 返回响应拦截器
Axios.interceptors.response.use(
  res => {
    // 重置requestMap
    const config = res.config;
    requestMap.set(config._keyString, false);
    if (res.status === 200 && res.data) {
      const responseData = res.data;
      const data = responseData.data;
      const code = responseData.code;
      if (responseData.success) {
        //缓存数据
        setCacheDate(config._keyString, data, config.useCache);
        return data;
      } else {
        switch (code) {
          default:
            break;
        }
        return Promise.reject(responseData.message);
      }
    }
    // todo 弹窗提示等
  },
  error => {
    requestMap.set(_.get(error, "config._keyString"), false);
    switch (error.message) {
      case MESSAGE.frequently:
        console.log("网络请求频繁");
        break;
      default:
        console.log("网络请求失败");
        break;
    }
    return Promise.reject(error);
  }
);
/**
 * 设置缓存数据
 * @param key 缓存标识
 * @param data 缓存数据
 * @param level 缓存等级 useCache为0或false 不缓存 1变量级缓存，刷新失效 2session级别缓存，关闭浏览器失效 3local级缓存永久有效
 */
function setCacheDate(key, data, level) {
  if (level) {
    requestData.set(key, data);
    switch (level) {
      case 2:
        sessionData(key, data);
        break;
      case 3:
        localData(key, data);
        break;
    }
  } else {
    return;
  }
}
function getCacheDate(key) {
  return requestData.get(key) || sessionData(key) || localData(key);
}
const request = ({ url, data = {}, method = "get", useCache = cliConfig.ajaxCache, testData, testDelay = 0, onError }) => {
  if (url) {
    const _keyString = qs.stringify({ url, method, data });
    let cacheData = getCacheDate(_keyString);
    if (useCache && cacheData) {
      return new Promise(res => res(cacheData));
    } else if (method === "get") {
      _.assign(data, { _: +new Date() });
    }

    //从接口读取数据
    return testData
      ? new Promise(r => {
          _.delay(() => {
            r(testData);
            window.maple.log(`${url}测试数据`, JSON.parse(JSON.stringify(testData)));
          }, testDelay);
        })
      : Axios({
          method,
          url,
          data,
          params: method.toUpperCase() === "GET" && data,
          useCache,
          onError,
          _keyString
        });
  } else {
    throw "request need arguments";
  }
};
export default request;
export const Request = {
  inject(app) {
    app.inject("$request", request);
  }
};

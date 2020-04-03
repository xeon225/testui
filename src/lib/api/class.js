import domain from "javascript/libs/tg/domain";
import request from "../request";
import _ from "lodash";
export default class Super {
  constructor(serverList, serviceName) {
    let ServiceDomain;
    if (domain.env === "online") {
      ServiceDomain = "//" + serviceName + ".51tiangou.com";
    } else {
      ServiceDomain = "//" + serviceName + "." + domain.env + ".66buy.com.cn";
    }
    _.forEach(serverList, (list, method) => {
      _.forEach(list, (url, name) => {
        this[name] = function(requestParams = {}) {
          requestParams.url = ServiceDomain + url;
          let { testData } = requestParams;
          if (testData) {
            window.maple.log(
              `${serviceName}.${name}测试数据`,
              JSON.parse(JSON.stringify(testData))
            );
            return new Promise(r => r(testData));
          } else {
            return request(requestParams);
          }
        };
      });
    });
  }
}

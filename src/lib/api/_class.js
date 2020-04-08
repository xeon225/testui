import config from "_config";
import request from "../request";
import _ from "lodash";
export default class Super {
  constructor(serverList, serviceName) {
    let ServiceDomain;
    config.domain[location.host];
    ServiceDomain = `//${serviceName}.${config.domain[location.hostname] ||
      location.host}${config.servicePort ? ":config.servicePort" : ""}`;
    _.forEach(serverList, (list, method) => {
      _.forEach(list, (url, name) => {
        if (this[name]) {
          console.error(`${serviceName}.${name}命名冲突，请更换名称`);
          return;
        }
        this[name] = function(requestParams = {}) {
          requestParams.url = ServiceDomain + url;
          requestParams.method = method;
          return request(requestParams);
        };
      });
    });
  }
}

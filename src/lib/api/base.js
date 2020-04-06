import Super from "./_class.js";
let serviceName = "";
let injectName = "";
let serverList = {
  get: {},
  post: {}
};
let service = new Super(serverList, `${serviceName}`);
export default service;
export const SERVICE = {
  inject(app) {
    app.inject(`$${injectName}`, service);
  }
};

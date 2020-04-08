import Super from "./_class.js";
let serviceName = "demo";
let injectName = "demoService";
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

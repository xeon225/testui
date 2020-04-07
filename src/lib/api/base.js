import Super from "./_class.js";
let serviceName = "searchweb";
let injectName = "searchweb";
let serverList = {
  get: {
    items: "/search/platform/items"
  },
  post: {}
};
let service = new Super(serverList, `${serviceName}`);
export default service;
export const SERVICE = {
  inject(app) {
    app.inject(`$${injectName}`, service);
  }
};

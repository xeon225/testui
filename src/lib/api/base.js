import Super from "./class.js";
let serverList = {
  get: {
    info: "/search/platform/items"
  },
  post: {
    info: "/search/platform/items"
  }
};
export default new Super(serverList, "base");

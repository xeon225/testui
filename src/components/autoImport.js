const globalContext = require.context("./global", true, /\.vue$/);
const asyncContext = require.context("./async", true, /\.vue$/, "lazy");
let autoComponents = { global: [], async: [] };
globalContext.keys().forEach(key => {
  let name = key
    .slice(key.lastIndexOf("/") + 1, -4)
    .replace(/^\w/, w => w.toUpperCase());
  let component = globalContext(key).default;
  autoComponents.global.push({
    name,
    component
  });
});
asyncContext.keys().forEach(key => {
  let name = key
    .slice(key.lastIndexOf("/") + 1, -4)
    .replace(/^\w/, w => w.toUpperCase());
  let component = asyncContext(key);
  autoComponents.async.push({
    name,
    component
  });
});

export default autoComponents;

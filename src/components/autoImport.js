const componentContext = require.context("./", true, /\.vue$/);
let views = [];
componentContext.keys().forEach(key => {
  let name = key
    .slice(key.lastIndexOf("/") + 1, -4)
    .replace(/^\w/, w => w.toUpperCase());
  let component = componentContext(key).default;
  views = views.concat({
    name,
    ...component
  });
});
export default views;

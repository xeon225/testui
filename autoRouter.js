const path = require("path");
const fs = require("fs");
const getFiles = (filePath, deep = true) =>
  fs.readdirSync(filePath).reduce((rs, i) => {
    let tpath = path.join(filePath, i);
    return rs.concat(fs.statSync(tpath).isDirectory() ? (deep ? getFiles(tpath) : []) : { path: tpath, name: i, folderName: path.basename(filePath) });
  }, []);
let fileList = getFiles("./src/views").filter(i => i.name.endsWith(".vue"));
let fileSteam = `/* eslint-disable */
export default ${JSON.stringify(fileList)}
`;
fs.writeFile("./src/router/autoPage.js", fileSteam, e => e && console.log(e));

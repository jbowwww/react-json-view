
const path = require('path');

module.exports = {
  src: path.join(__dirname, ".."/*, "src"*/),
  js: path.join(__dirname/*, "..", "src", "js"*/),
  style: path.join(__dirname, ".."/*, "src"*/, "style"),
  build: path.join(__dirname, "..", "..", "dev-server", "dist"),
  devServer: path.join(__dirname, "..", "..", "dev-server"),
  data: path.join(__dirname, "..", "..", "dev-server", "data")
}

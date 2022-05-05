const http = require('http')
const { execSync } = require("child_process");

http.createServer(function (req, res) {

  if (req.url == '/version' && req.method == 'GET') {
    const emccCommand = process.env.EMCC_COMMAND || 'emsdk-main/upstream/emscripten/emcc'
    try {
      const version = execSync(`${emccCommand} --version`).toString()
      res.write(version)
    } catch (error) {
      res.write('error')
    }
  } else {
    res.statusCode = 404
  }

  res.end(); 
}).listen(process.env.PORT || 8080);

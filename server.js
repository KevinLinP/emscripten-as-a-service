const http = require('http')
const { execSync } = require("child_process");

http.createServer(function (req, res) {
  try {
    const version = execSync("emcc --version").toString()
    res.write(version)
  } catch (error) {
    console.log(error)
    res.write('error')
  }

  res.end(); 
}).listen(process.env.PORT || 8080);

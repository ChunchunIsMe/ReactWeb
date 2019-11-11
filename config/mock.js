const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname, '../mock/');

const mock = (req, res, next) => {
  if (/^\/api/.test(req.path)) {
    console.log(req.path)
    const pathArr = fs.readdirSync(filePath);
    pathArr.forEach(item => {
      const data = require(filePath + '/' + item);
      Object.keys(data).forEach(item => {
        if (item === req.path) {
          res.writeHead(200, { 'content-type': 'application/json;charset=utf8' });
          res.write(JSON.stringify(data[item]));
          res.end();
        }
      })
    })

  }
  next();
}

module.exports = mock;
const express = require('express')

const router = require('./router');

// 创建 express 应用
const app = express()
const bodyParser=require("body-parser");
// 解析以 application/json 和 application/x-www-form-urlencoded 提交的数据
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/',router);

//解决跨域
app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method == 'OPTIONS') {
    res.send(200);
  }
  else {
    next();
  }
});


// 使 express 监听 5000 端口号发起的 http 请求
const server = app.listen(5000, function() {
  const { address, port } = server.address()
  console.log('Http Server is running on http://%s:%s', address, port)
})
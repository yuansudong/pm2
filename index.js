const express = require('express')
const process = require("process")

console.log("当前的环境变量中MYSQL_HOST的值是:",process.env["MYSQL_HOST"])
const app = express()
const port = 3000
const { v4: uuidv4 } = require('uuid');
const name = uuidv4()
app.get('/', (req, res) => {
  console.log("由一个新的请求到来:标准输出")
  console.error("由一个新的请求到来:标准错误")
  res.send('Hello World! 新的'+"      "+name)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} ${name}`)
})
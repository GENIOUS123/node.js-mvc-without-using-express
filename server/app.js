const http = require('http');
const port = 9500;
const router=require("./route/indexRouter.js")
http.createServer((req,res)=>{
router(req,res);
}).listen(port,"localhost");
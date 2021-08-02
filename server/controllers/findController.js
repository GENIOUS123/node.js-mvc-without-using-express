const fs  = require("fs");
const path = require('path');
const getview=require('../module/coreModule')
const viewfolder= path.join(__dirname , '../view/');
const connection=require("../model/mysql");
const findController=(req,res)=>{
    // console.log(res);
 connection.retriveData("SELECT * FROM login",(responce)=>{
    const indexContent =fs.readFileSync(path.join(viewfolder,"find.html"),"utf8");
    // console.log(responce);
    let tablex="<Table><thead><tr><th>Sl No</th><th>Name</th><th>Email</th><th>Mobile No</th></tr></thead>";
        responce.map((data)=>{
            // console.log(data);
            tablex+="<tr><td>" + data.sl_no+ "</td><td>" + data.name + "</td><td>"+ data.email + "</td><td>" + data.mobile + "</td></tr>";
            return tablex;

        })


    tablex+="</Table>";
    // console.log(tablex);
    const placeholder={
        mukti:"My MVC Format",
        table:tablex
    }
    const get=getview.getData(indexContent,placeholder);
    res.write(get);
    res.end();


 })
 
 return res;



}
// console.log(indexController());

module.exports = findController;
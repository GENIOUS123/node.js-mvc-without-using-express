const sql=require("../model/mysql");
const { parse } = require("querystring");

const indexPostController=(req,res)=>{
    if(req.headers['content-type']==='application/x-www-form-urlencoded'){
        let body= "";
        req.on("data", (chunk)=>{
            body+=chunk.toString();
        
        })
        req.on("end",()=>{
            
         body = parse(body);
         const {email:email,nameq:nameq,mobile:mobile}=body;
         console.log(body);
        let sql1=`INSERT INTO login(name, email, mobile, password) VALUES ('${nameq}','${email}','${mobile}','')`;
        // console.log(sql1);
        const insertqu=sql.query(sql1);
// console.log(insertqu);
            if(insertqu){
                res.end("<script> alert('Details Update Sucessfully'); window.location.href = '/';</script>");
            }

        })
        }
 
 return res;




}

module.exports = indexPostController;
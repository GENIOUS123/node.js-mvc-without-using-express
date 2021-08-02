const fs = require('fs');
const path = require('path');
const getData = require("../module/coreModule.js");
const viewfolder= path.join(__dirname , '../view/');
const files = fs.readdirSync(viewfolder);
const router=(req,res)=>{
let reqURL= req.url;
let reqUrlArry=reqURL.split("/");
if(reqURL =="/" || reqUrlArry[1].toLowerCase() == "index"){
    if(reqUrlArry[2] == "post"){
    getData.listentToControllertoGetView("indexPost" , req , res );
       
        }else{
            getData.listentToControllertoGetView("index", req, res);
        }
    

}
else if(reqUrlArry[1].toLowerCase() == "about"){
getData.listentToControllertoGetView("about", req, res);
}
else if(reqUrlArry[1].toLowerCase() == "find"){
    getData.listentToControllertoGetView("find", req, res);
    }

else{
    res.end("404 page not found");
}

 }
 module.exports = router;

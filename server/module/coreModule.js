const fs = require('fs');
const path = require('path');

//Dynamic content function//
const getData=(orignalContent,placeholder=null)=>{
   if(placeholder){
   const placeholderarr = Object.keys(placeholder);
   let regix = "";
   placeholderarr.map((value)=>{
    regix +="{%" + value + "%}|";
   });
   regix = regix.substring(0,regix.length - 1);
   //console.log(regix);
   const newregixim = new RegExp(regix , "gi");
   //console.log(newregixim);
   //console.log(placeholder.header);
   placeholderarr.map((value)=>{
    newContent = orignalContent.replace(newregixim,(disco)=>{
       return placeholder[disco.replace("{%","").replace("%}","")];
    })
   
   })
   
   }else{
   
    newContent = orignalContent.replace("{%","").replace("%}","");
    
   
   }
   
    return newContent; 
   }

const listentToControllertoGetView=(controller, req , res)=>{
 if(controller.includes("_")){
    const childfunction= controller.split("_");
    console.log(childfunction);

 }  else{
const controllerMain = require("../controllers/" + controller  + "Controller.js");
res.writeHead(200,{"Content-Type":"text/html"});
controllerMain(req,res);
// return res;
}}
module.exports = {getData,listentToControllertoGetView};


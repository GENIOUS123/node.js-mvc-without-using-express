const mysql = require("./mysql.js");
mysql.retriveData("SELECT * FROM suscribe",(response)=>{
console.log(response);

})



const mysql = require('mysql');
const connectionjitu = require('./connection.js');
const connection = mysql.createConnection({
	host:connectionjitu.HOST,
	user:connectionjitu.USER,
	password:connectionjitu.PASSWORD,
	database:connectionjitu.DB
});
connection.connect((error)=>{
if(error){
	throw error;
}else{
	 console.log("Successfully connected to the database.");
}

})

function query(sql) {
	const promise = new Promise((resolve,reject)=>{
     connection.query(sql, function(error, result, fields) {
            if (error) return error;
            const analise = JSON.stringify(result);
            resolve(analise);
        });

	});
return promise;
}
const retriveData=async(sql , callback)=>{
if(typeof(callback) === "function"){
const gh = await query(sql);
callback(JSON.parse(gh));
}else{
 return false;	
}

}

module.exports = {connection,query,retriveData};


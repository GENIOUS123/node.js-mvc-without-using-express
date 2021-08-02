   // console.log(res);
 
// console.log(req.headers['content-type']);
if(req.headers['content-type']==='application/x-www-form-urlencoded'){
    // console.log("mukti");
    let body= "";
    req.on("data", (chunk)=>{
        body+=chunk.toString();
    
    })
    req.on("end",()=>{
        // callback(parse(body));
        console.log(parse(body));
    })
    }
//Local module for file write and read
//Also append

const fs=require("fs");

function writeFile(filename ,data ){
    return new Promise((resolve,reject)=>{
        fs.writeFile(filename,data,(err)=>{
            if(err){
                reject(err);
            }
            else{
               resolve();
            }
        });
    });

}
function readFile(filename){
    return new Promise((resolve, reject)=>{
        fs.readFile(filename,"utf-8",(err, data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        });

    });
}
function appendFile(filename,data){
    return new Promise((resolve, reject)=>{
        fs.appendFile(filename,data,(err)=>{
            if(err){
                reject(err);
            }else {
                resolve();
            }
        });
    });
}

module.exports={
    writeFile,
    readFile,
    appendFile
}
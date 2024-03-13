// 1. write file with fs -> core module
const fs= require("fs");

function writeFile(name , data){
    fs.writeFile(name , data ,(err)=>{
    if (err){
        console.log("An error has occured " ,err);
    }
    else {
        console.log("Successful");
    }
    })

}
writeFile("task1.txt", "Some random txt" );
const fs = require("fs");

const read = async ()=>{
    return new Promise((resolve, reject)=>{
        fs.readFile("data1.json" ,"utf-8",(err, data)=>{
            if (err) {
                if (err.code === 'ENOENT') {
                    // File doesn't exist, create it with an empty array
                    fs.writeFile("data1.json", '[]', (err) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve([]);
                        }
                    });
                } else {
                    reject(err);
                }
            }else{
                data = JSON.parse(data);
                return resolve(data);
            }

        } );
    });

}
const write = async (data) =>{
    return new Promise((resolve, reject)=>{
        data = JSON.stringify(data);
        fs.writeFile("data1.json" ,data,(err)=>{
            if (err){
                return reject(err);
            } else{
                return resolve(data);
            }
        });

    });
}
module.exports = {
    read,
    write
}
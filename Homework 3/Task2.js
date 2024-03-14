// 2. Use append to append data and then read the new data appended

const fs= require("fs");

const {readFile, writeFile, appendFile} = require("./Task1");

const write = async ()=> {
    try {
        await writeFile("data.txt","This is data from writeFile \n");
        // // const data = await readFile("data.txt");
        // // console.log(data);
        // await read();
    }
    catch (error) {
        console.error(error);
    }
}

const read = async () =>{
    try{
      const data =  await readFile("data.txt");
        console.log(data)
    }
    catch (error){
        console.error(error);
    }
};


const append = async ()=>{
    try {
        await appendFile("data.txt" , "This is APPEND DATA");

    }
    catch (err){
        console.error(err);
    }

}
append();
read();
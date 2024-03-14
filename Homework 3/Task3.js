// 3. Read the new data when change has been made with the appendFile function
const { readFile, appendFile} = require("./Task1");

const append= async ()=>{
    try {
      await  appendFile("task3.txt" , "Task 3 Test");
      const data = await readFile("task3.txt");
       console.log(data);

    }catch (error){
        console.log(error);
    }


}
append();
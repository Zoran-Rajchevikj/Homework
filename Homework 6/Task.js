const express = require("express");
const axios = require("axios");
const data = {
    cars: ['Car 1', 'Ferrari', 'Car 3'],
    books: ['Book 1', 'Book 2', 'Book 3'],
    cities: ['New York', 'Sydney', 'Ohrid']
};

const app = express();
//Task 1
app.get("/:name", (req, res) => {
    const {name} =req.params;
    if (data.hasOwnProperty(name)){
        res.send(data[name]);
    }
   else {
       res.status(404).json("NOT FOUND ")
    }
})

//Task  2
app.get("/:name",(req, res, next) => {
    const {name} = req.params;
    const {q} = req.query;
    if (data.hasOwnProperty(name)){
        const dat = data[name];
    const result = dat.find(n => n.toLowerCase() === q.toLowerCase());

    if (result){
        res.json(result);
    }else {
        res.status(404).send("NOT FOUND");
    }
    }
    else {
        res.status(404).send("Not FOUND");
    }
})
//task3
app.get("/names" ,async (req,res)=>{
    try {
        const response  = await axios.get('https://jsonplaceholder.typicode.com/users');
        const result = response.data.map(user => user.name);
        res.json(result);
    }
    catch (err){
        res.status(500).send("Server error");
    }
})
app.get("/names",async (req,res)=>{
   try{
       const result = await axios.get("https://jsonplaceholder.typicode.com/users");
       const final = result.data.map(p => ({id:p.id , name:p.name}));
       res.json(final);
   } catch (err){
       res.status(505).send("Server Error");
   }
})

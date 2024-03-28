const express = require("express");
const app = express();

const {getAnaliza, postAnaliza} = require("./controll/analiza");

app.use(express.urlencoded ({extended:false}))

app.get("/analiza", getAnaliza);
app.post("/analiza", postAnaliza);

app.listen(8000,(err)=>{
    if (err){
        console.log("err", err);
    }
    console.log("server running");
})
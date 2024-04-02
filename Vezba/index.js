
const { getArtikli,getForm,getDelete,getEdit,postForm,postEdit} =require("./contoller/formular");
const routes = require("./routes/routes");
const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");

// app.get("/form",getForm);
// app.post("/form",postForm);
// app.get("/artikli",getArtikli);
// app.get("/delete",getDelete);
// app.get("/edit",getEdit);
// app.post("/edit",postEdit);
app.use("/", routes);

app.listen(8000,(err)=>{
    if (err){
        console.log(err)
    }
    console.log("Server is running");

})

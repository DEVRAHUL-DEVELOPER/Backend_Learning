const express = require("express");
const app= express();

app.use("/detail",(req,res)=>{
    res.send("i am your detail page")
})
app.use("/contact/:id",(req,res)=>{
    console.log(req.params);
    res.send("i am your contact page")
})
app.use("/",(req,res)=>{
    res.send("Hello rahul kumar")
})

app.listen(4000,()=>{
    console.log("server is running on port 4000");
})

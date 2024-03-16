const express=require("express");
const app=express();
const dbConfig=require("./db")
const port=process.env.PORT||5000;
const Usermodel =require("./routes/basic")
app.use(express.json())
app.use("/api/users",Usermodel);
app.listen(5000,()=>{
    console.log(`serverr is lientimg to ${port} `);
})



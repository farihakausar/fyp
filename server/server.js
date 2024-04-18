const express=require("express");
const cors=require("cors");

const app=express();

const dbConfig=require("./db")
const port=process.env.PORT||5000;


const Usermodel =require("./routes/basic")
// const Teachermodel =require("./routes/basic")

app.use(cors())
app.use(express.urlencoded({extended: false}));
app.use(express.json());



app.use("/api/users",Usermodel);
// app.use("/api/teacher",Teachermodel);
app.listen(5000,()=>{
    console.log(`serverr is lientimg to ${port} `);
})



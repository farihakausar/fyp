const express=require("express");
const app=express();
const dbConfig=require("./db")
const port=process.env.PORT||5000;
const Usermodel =require("./routes/basic")
// const rooms=require("./routes/roomRoutres")
// const users=require("./routes/userRouter")
// const bookings=require("./routes/bookingRoute")


app.use(express.json())
app.use("/users",Usermodel);


app.get("/home",(req,res)=>{
    console.log("fjhgvk")
    res.json({"messeg":"nkn.k"})
})

app.listen(5000,()=>{
    console.log(`serverr is lientimg to ${port} `);
})
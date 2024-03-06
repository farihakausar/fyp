const express=require("express");

const router=express.Router();

const User= require("../models/User/UserLogin")

router.post("/register",async(req,res)=>{
const newUser=new User(req.body);


try{
    const user=await newUser.save();
    res.send("user sigin successfully")
}catch(error){
return res.status(400).json({error})
}
})



router.post("/login",async(req,res)=>{
   const {email,password}=req.body;
   
    try{
        const user=await User.findOne({email:email,password:password})
      if(user){
        const temp={
            name:user.name,
           email:user.email,
           interested_subjects:user.interested_subjects,
           _id:user._id
        }
        res.send(temp)}

        else{
            console.log("login failed")
            res.status(400).send("login faoled")
        }
    }catch(error){
    return res.status(400).json({error})
    }
    })

  

    module.exports = router;
const express=require("express");
const multer = require('multer');
const path = require('path');
const router=express.Router();
const bcrypt=require("bcrypt")
const User= require("../models/User/UserLogin")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads'); // Specify the directory where you want to store uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)); // Define filename
    }
  });
  
  const upload = multer({ storage: storage });


  router.post("/register", upload.single('myFile'), async (req, res) => {
    try {
      const { name, email, password, cpassword, interestedSubjects } = req.body;
const {myFile}=req.file;
console.log(myFile,'gett')
      const newUser = new User({
        name,
        email,
        password,
        cpassword,
        interestedSubjects,
        myFile: req.file ? req.file.path : null // Save file path in the database
      });
  
      await newUser.save();
      res.send("User signed up successfully");
      console.log("done");
    } catch (error) {
      res.status(400).json({ error });
    }
  });
  
  // Your registration route with file upload
//   router.post("/register",  async (req, res) => {
   
//     try {
//       const { name, email, password, cpassword, interestedSubjects} = req.body;
  
//     //   Retrieve the file path from req.file if available
//     //   const myFile = req.file ? req.file.path : null;
//     //   console.log(myFile)
  
//       const newUser = new User({
//         name,
//         email,
//         password,
//         cpassword,
//         interestedSubjects,
      
//       });
  
//       await newUser.save();
//       res.send("User signed up successfully");
//       console.log("done")
//     } catch (error) {
//       res.status(400).json({ error });
//     }
//   });
// router.post("/register",async(req,res)=>{
//     const newUser=new User(req.body);
   
// try{
// //     const userExist=await User.find({email:email})
// //     if(userExist){
// //         return res.status(422).json({error:"email aldready exist"})
// //     }
// //     else if(password!==cpassword){
// // return res.status(422).json({error:"password are not macthuing"})
// //     }
// //     else{
// //         const newUser=new User(req.body);
// // //ysaha per
// //         await newUser.save();
// //     }
//    // ysaha per
//     const user=await newUser.save();

//     res.send("user sigin successfully")
// }catch(error){
// return res.status(400).json({error})
// }
// })
   


      
  
router.post("/login",async(req,res)=>{
  try{
    const {email,password}=req.body;
        if(!email||!password){
            return res.json({error:"plx fill the data"}) }
      const user=await User.findOne({email:email})
     
        if(user){
const isMatch=await bcrypt.compare(password,user.password)
const temp={
    name:user.name,
   email:user.email,
   interestedSubjects:user.interestedSubjects,
   myFile:user.myFile,
    _id:user._id
}
if(temp){
    res.send(temp)
    }
    const token =await user.generateAuthToken();
            console.log(token)
            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+4567890),
                httpOnly:true
            })
            if(!isMatch){
                return res.json({error:"invalid credeintals"})
            }else{
                return res.json({messege:"sigin successfully"})
            } }
        else{
            return res.json({error:"invalid credeintals"}) }
        console.log(user)
        
           
    }catch(error){
    return res.status(400).json({error})
    }
})
    

    module.exports = router;


    
            
           
       
      
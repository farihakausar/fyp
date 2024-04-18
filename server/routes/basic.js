const express=require("express");
const multer = require('multer');
const path = require('path');
const router=express.Router();
const bcrypt=require("bcrypt")
const User= require("../models/User/UserLogin")
const Teacher= require("../models/User/Teacher.js/TeacherLogin")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
     cb(null, "./uploads"); // Specify the directory where you want to store uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)); // Define filename
    }
  });
  const upload = multer({ storage});


  // router.post("/register", upload.single('file'), async (req, res) => {
  //   try {
  //     const { name, email, password, cpassword, interestedSubjects } = req.body;
  //     const file=req.file.path;
  //     console.log(file,'gett')
  //     const newUser = new User({
  //       name,
  //       email,
  //       password,
  //       cpassword,
  //       interestedSubjects,
        
  //       file:  req.file.path 
  //     });
  
  //     await newUser.save();
  //     res.send("User signed up successfully");
  //     console.log("done");
  //   } catch (error) {
  //     res.status(400).json({ error });
  //   }
  // });
  router.post('/register', (req, res) => {
    const { email, password, role } = req.body;
  
    // Create a new user
    const newUser = new User({
      email,
      password,
      role
    });
  
    // Save user to database
    newUser.save()
      .then(user => res.json(user))
      .catch(err => console.log(err));
  });
  // router.post("/registerteacher", upload.single('file'), async (req, res) => {
  //   try {
  //     const { name, email, password, cpassword, interestedSubjects,eduaction } = req.body;
  //     const file=req.file.path;
  //     console.log(file,'gett')
  //     const newTeacher = new Teacher({
  //       name,
  //       email,
  //       password,
  //       cpassword,
  //       interestedSubjects,
  //       eduaction,
  //       file:  req.file.path 
  //     });
  
  //     await newTeacher.save();
  //     res.send("User signed up successfully");
  //     console.log("done");
  //   } catch (error) {
  //     res.status(400).json({ error });
  //   }
  // });
  
  
   


      
  
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
   file:user.file,
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
// router.post("/loginteacher",async(req,res)=>{
//   try{
//     const {email,password}=req.body;
//         if(!email||!password){
//             return res.json({error:"plx fill the data"}) }
//       const teacher=await Teacher.findOne({email:email})
     
//         if(teacher){
// const isMatch=await bcrypt.compare(password,teacher.password)
// const temp={
//     name:teacher.name,
//    email:teacher.email,
//    interestedSubjects:teacher.interestedSubjects,
//    eduaction:teacher.eduaction,
//    file:teacher.file,
//     _id:teacher._id
// }
// if(temp){
//     res.send(temp)
//     }
//     const token =await teacher.generateAuthToken();
//             console.log(token)
//             res.cookie("jwtoken",token,{
//                 expires:new Date(Date.now()+4567890),
//                 httpOnly:true
//             })
//             if(!isMatch){
//                 return res.json({error:"invalid credeintals"})
//             }else{
//                 return res.json({messege:"sigin successfully"})
//             } }
//         else{
//             return res.json({error:"invalid credeintals"}) }
//         console.log(teacher)
        
           
//     }catch(error){
//     return res.status(400).json({error})
//     }
// })
router.get("/getallteacher",async(req,res)=>{
  try{
      const booking=await Teacher.find();
      res.send(booking)
  }catch(err){
      return res.status(400).json({err})
  }
})
router.get("/getallusers",async(req,res)=>{
  try{
      const users=await User.find()
      res.send(users)
  }catch(err){
      return res.status(400).json({err})
  }
})

router.post("/getuserbyid/:userid",async(req,res)=>{
  // const roomid=req.body.roomid;
  const userid=req.params;
  try{
      const room=await User.findOne({_id:userid.userid});
      // const room=await Room.findOne({_id:roomid});
      res.send(room);
      console.log(room)
  }catch(error){
      res.status(400).json({msg:error})
  }
  })
    module.exports = router;


    
            
           
       
      
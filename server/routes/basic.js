const express=require("express");

const path = require('path');
const router=express.Router();
const bcrypt=require("bcrypt")
const User= require("../models/User/UserLogin")
const Teacher= require("../models/User/Teacher.js/TeacherLogin")
const jwt=require("jsonwebtoken")
const multer = require("multer");
const auth=require("../middlewares/auth")


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${path.extname(file.originalname)}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({ storage: storage ,fileFilter});
router.post("/register", upload.single("photo"), async (req, res) => {
  // console.log(req.file);
  const nameing = req.body.nameing;
  const email = req.body.email;
  const interestedSubjects = req.body.interestedSubjects;

  const  password = req.body.password;
  const  cpassword = req.body.cpassword;
  // const photo = req.file.filename;
  try {
    let user1=await User.create({nameing: nameing,email:email,interestedSubjects:interestedSubjects,password:password,cpassword:cpassword});
    
    
    // const token = req.cookies.jwtoken;
    // res.send({ status: "ok", token }); 
    const token =await user1.generateAuthToken();
res.cookie("jwtoken",token,{
              expires:new Date(Date.now()+4567890),
              httpOnly:true
          })
          res.send({  token }); 
  } catch (error) {
    res.json({ status: error });
  }
});
router.get("/user/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

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
  
  
   


      
router.get("/getfiles", async (req, res) => {
  try {
    User.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {}
});
router.get("/getfiles/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({ status: "error", message: "User not found" });
    }
    res.send({ status: "ok", data: user });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: "error", message: "Internal server error" });
  }
});
  
router.post("/login",async(req,res)=>{
  try{
    const {email,password}=req.body;
        if(!email||!password){
            return res.json({error:"plx fill the data"}) }
      const user=await User.findOne({email:email})
     
        if(user){
const isMatch=await bcrypt.compare(password,user.password)
const token =await user.generateAuthToken();
res.cookie("jwtoken",token,{
              expires:new Date(Date.now()+4567890),
              httpOnly:true
          })
console.log(token)
const temp={
    nameing:user.nameing,
   email:user.email,
   interestedSubjects:user.interestedSubjects,
  photo:user.photo,

    _id:user._id
}
if(temp){
    res.send(temp)
    }
  
            if(!isMatch){
                return res.json({error:"invalid credeintals"})
            }else{
                return res.json({messege:"sigin successfully"})
            } 
  
        
          }
           
    }
    catch(error){
    // return res.status(400).json({error})
    console.log(error)
    }
})
router.get('/about',auth,(req,res)=>{
  console.log("nnknkmnknnknkl")
  res.send(req.rootUser)
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


    
            
           
       
      
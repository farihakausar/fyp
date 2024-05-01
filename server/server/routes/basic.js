const express=require("express");

const path = require('path');
const router=express.Router();
const bcrypt=require("bcrypt")
const User= require("../models/User/UserLogin")
const Teacher= require("../models/User/Teacher.js/TeacherLogin")
const jwt=require("jsonwebtoken")
const cloudinary = require('cloudinary').v2;
const mongoose = require('mongoose');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const auth=require("../middlewares/auth")
const PUBLISHABLE_KEY = "pk_test_51Og5cTJ7pz3TsDzfr8KUrFFeovdGHs9Twln1FzSrz5sVjSkMUTCufwvxbBwRpD4ZLlXmcau0lyUvnvL1j7Q8r97Q006SSFMfx3";
const SECRET_KEY = "sk_test_51Og5cTJ7pz3TsDzfIWpcaLz5zF1CIvNufxvxC95qYeu9Ay34G5eCeD4OyEJi64I4ple15BNiVrEElqmCEaefvYpE00xAtRInFM";
const Stripe =require("stripe");
const stripe = Stripe(SECRET_KEY);
cloudinary.config({
  cloud_name: 'dmyrbutlu',
  api_key: '234937942539642',
  api_secret: '_Ap3aiSN-NBZ2xt3x4Mm9w4yBoo'
});
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
// const upload = multer({ storage: storage ,fileFilter});
// router.post("/register", upload.single('image'), async (req, res) => {
//   try {
//     // Extract user details from request body
//     const { nameing, email, interestedSubjects, password, cpassword } = req.body;
//     const result = await cloudinary.uploader.upload(req.file.path);
//     //     const newImage = new Image({ imageURL: result.secure_url });
//     //     await newImage.save();
//     // Upload photo to Cloudinary
//     const photo=req.file.filename;
//     // const uploadedPhoto = await cloudinary.uploader.upload(req.filename); // Assuming 'photo' is the file received from frontend

//     // Create user with Cloudinary photo URL
//     const user = await User.create({
//       nameing: nameing,
//       email: email,
//       interestedSubjects: interestedSubjects,
//       password: password,
//       cpassword: cpassword,
//       imageURL: result.secure_url,
//       // photo: photo  Store Cloudinary URL in user document
//     });

//     // Generate JWT token
//     const token = await user.generateAuthToken();

//     // Set token in cookie
//     res.cookie("jwtoken", token, {
//       expires: new Date(Date.now() + 4567890),
//       httpOnly: true
//     });

//     // Send success response with token
//     res.status(200).json({ token });

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });
router.post("/register", upload.single("photo"), async (req, res) => {
  // console.log(req.file);
  const nameing = req.body.nameing;
  const email = req.body.email;
  const interestedSubjects = req.body.interestedSubjects;
  const  about = req.body.about;

  const  password = req.body.password;
  const  cpassword = req.body.cpassword;
  // const photo = req.file.filename;
  try {
    let user1=await User.create({nameing: nameing,email:email,about:about,interestedSubjects:interestedSubjects,password:password,cpassword:cpassword});
    
    
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
  router.post("/create-payment-intent", async (req, res) => {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 1099, //lowest denomination of particular currency
        currency: "usd",
        payment_method_types: ["card"], //by default
      });
  
      const clientSecret = paymentIntent.client_secret;
  console.log("backenddone")
      res.json({
        clientSecret: clientSecret,
      });
      console.log("backenddone")
    } catch (e) {
      console.log(e.message,"backend");
      res.json({ error: e.message });
    }
  });
  router.post("/create-payment-intent/:userId/:courseId", async (req, res) => {
    try {
      const { userId, courseId } = req.params;
  
      // Update the user schema to include the specific course and mark payment as done
      await User.findByIdAndUpdate(userId, { 
        $push: { courses: courseId },
        paymentStatus: 'done'
      });
  
      // Create a payment intent with specific amount, currency, and payment method types
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 1099, // Adjust the amount as needed
        currency: "usd",
        payment_method_types: ["card"], // By default
      });
  
      const clientSecret = paymentIntent.client_secret;
  
      // Send the client secret back to the client
      res.json({
        clientSecret: clientSecret,
      });
    } catch (error) {
      console.log(error.message, "backend");
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  router.get("/users-with-payment-done", async (req, res) => {
    try {
      // Find all users with paymentDone set to true
      const users = await User.find({ paymentStatus: 'done'});
  
      // Send the list of users back to the client
      res.json(users);
    } catch (error) {
      console.log(error.message, "backend");
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
    module.exports = router;


    
            
           
       
      
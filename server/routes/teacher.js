const express = require("express");
const path = require('path');
const router=express.Router();
const bcrypt=require("bcrypt")
const TeacherRequest = require("../models/teacher/teacherInfo");
const TeacherServiceRequest = require("../models/teacher/teacherRequest");
const jwt=require("jsonwebtoken")
const multer = require("multer");
const auth=require("../middlewares/auth");
const authing = require("../middlewares/authteacher");


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

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please fill in all the fields" });
    }
    const user = await TeacherRequest.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = await user.generateAuthToken();
    res.cookie("jwtoken", token, {
      expires: new Date(Date.now() + 4567890),
      httpOnly: true
    });
    const userData = {
      name: user.name,
      specialty: user.specialty,
      experience: user.experience,
      email: user.email,
      photo: user.photo,
      _id: user._id
    };
    res.status(200).json({ user: userData, message: "Sign in successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// router.post("/login",async(req,res)=>{
//   try{
//     const {email,password}=req.body;
//         if(!email||!password){
//             return res.json({error:"plx fill the data"}) }
//       const user=await TeacherRequest.findOne({email:email})
     
//         if(user){
// const isMatch=await bcrypt.compare(password,user.password)
// const token =await user.generateAuthToken();
// res.cookie("jwtoken",token,{
//               expires:new Date(Date.now()+4567890),
//               httpOnly:true
//           })
// console.log(token)
// const temp={
//   name:user.name,
//   specialty:user.specialty,experience:user.experience,
//   email:user.email,password:user.password,cpassword:user.cpassword,photo:user.photo,
  
  

//     _id:user._id
// }
// if(temp){
//     res.send(temp)
//     }
  
//             if(!isMatch){
//                 return res.json({error:"invalid credeintals"})
//             }else{
//                 return res.json({messege:"sigin successfully"})
//             } 
  
        
//           }
           
//     }
//     catch(error){
//     // return res.status(400).json({error})
//     console.log(error)
//     }
// })
router.post("/register", upload.single("photo"), async (req, res) => {
  
  

  // console.log(req.file);
  const name = req.body.name;
  const email = req.body.email;
  const  experience = req.body.experience;
  const specialty = req.body.specialty;

  const  password = req.body.password;
  const  cpassword = req.body.cpassword;
  // const photo = req.file.filename;
  try {
    let user1=await TeacherRequest.create({name: name,email:email, experience: experience,specialty:specialty,password:password,cpassword:cpassword});
    
    console.log(user1,"jkhkndoen")
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
router.get('/about',authing,(req,res)=>{
  console.log("nnknkmnknnknkl")
  res.send(req.rootUser)
})



// home
router.post("/service-request/:teacherId", async (req, res) => {
  try {
      const {
          course,
          address,
          educationDetail,
          cv,
          price,
          timing,
      } = req.body;

      const teacherRequest = await TeacherRequest.findById(req.params.teacherId);
      if (!teacherRequest) {
          return res.status(404).json({ message: "Teacher request not found" });
      }

      const serviceRequest = await TeacherServiceRequest.create({
          teacher: req.params.teacherId,
          course,
          address,
          timing,
          price,
          educationDetail,
          cv
      });
console.log(serviceRequest,"doen service requestnew dat")
      teacherRequest.serviceRequests.push(serviceRequest); // Push the entire serviceRequest document
      await teacherRequest.save();

      res.json({ message: "Service request created successfully" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
  }
});
// online
router.post("/service-requestonline/:teacherId", async (req, res) => {
  try {
      const {
          course,
         educationDetail,
          cv,
          price,
         about
      } = req.body;

      const teacherRequest = await TeacherRequest.findById(req.params.teacherId);
      if (!teacherRequest) {
          return res.status(404).json({ message: "Teacher request not found" });
      }

      const serviceRequest = await TeacherServiceRequest.create({
          teacher: req.params.teacherId,
          course,
         educationDetail,
          cv,
          price,
         about
      });
console.log(serviceRequest,"doen service requestnew dat")
      teacherRequest.serviceRequests.push(serviceRequest); // Push the entire serviceRequest document
      await teacherRequest.save();

      res.json({ message: "Service request created successfully" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
  }
});

// Route to get all teacher service requests
// router.get("/service-requests", async (req, res) => {
//   try {
//       const serviceRequests = await TeacherServiceRequest.find();
//       res.json(serviceRequests);
//   } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "Server Error" });
//   }
// });
router.get("/service-requestpending", async (req, res) => {
  try {
    // Assuming TeacherServiceRequest has a field named 'status' for the status of the request
    const serviceRequests = await TeacherServiceRequest.find({ status: 'pending' });
    res.json(serviceRequests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});
router.get("/service-request-approved", async (req, res) => {
  try {
    // Assuming TeacherServiceRequest has a field named 'status' for the status of the request
    const serviceRequests = await TeacherServiceRequest.find({ status: 'approved' });
    res.json(serviceRequests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});
router.put("/teacher-request/approve/:id", async (req, res) => {
  try {
      const teacherRequest = await TeacherServiceRequest.findByIdAndUpdate(
          req.params.id,
          { status: 'approved' },
          { new: true }
      );
      if (!teacherRequest) {
          return res.status(404).json({ message: "Teacher request not found" });
      }
      res.json(teacherRequest);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
  }
});
router.get("/teacher-request/approve/:id", async (req, res) => {
  try {
    const teacherRequest = await TeacherServiceRequest.findById(req.params.id);
    if (!teacherRequest) {
      return res.status(404).json({ message: "Teacher request not found" });
    }
    
    res.json(teacherRequest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});
// router.put("/teacher-request/approve/:id", async (req, res) => {
//   try {
//       const teacherRequest = await TeacherServiceRequest.findByIdAndUpdate(
//           req.params.id,
//           { status: 'approved' },
//           { new: true }
//       );
//       if (!teacherRequest) {
//           return res.status(404).json({ message: "Teacher request not found" });
//       }
//       res.json(teacherRequest);
//   } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "Server Error" });
//   }
// });
// router.get("/teacher-request/approve/:id", async (req, res) => {
//   try {
//     const teacherRequest = await TeacherServiceRequest.findById(req.params.id);
//     if (!teacherRequest) {
//       return res.status(404).json({ message: "Teacher request not found" });
//     }
    
//     res.json(teacherRequest);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// Admin gets all teacher requests
router.get("/teacher-request/all", async (req, res) => {
  try {
      const teacherRequests = await TeacherRequest.find();
      res.json(teacherRequests);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
  }
});
router.post("/teacher-requests", async (req, res) => {
  try {
    const {
      name,
      specialty,experience,
      email,password,cpassword,photo
    } = req.body;

    const newRequest = new TeacherRequest({
      name,
      specialty,experience,
      email,password,cpassword,photo
    });

    await newRequest.save();
    res
      .status(201)
      .json({
        message: "Teacher request submitted successfully",
        request: newRequest,
      });
  } catch (error) {
    console.error("Error submitting teacher request:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.put("/teacher-requests/:id", async (req, res) => {
  const { id } = req.params;
  const {
    name,
      specialty,experience,
      email,password,cpassword,photo
  } = req.body;

  try {
    const updatedRequest = await TeacherRequest.findByIdAndUpdate(
      id,
      {
        name,
      specialty,experience,
      email,password,cpassword,photo
      },
      { new: true }
    );

    if (!updatedRequest) {
      return res.status(404).json({ message: "Teacher request not found" });
    }

    res
      .status(200)
      .json({
        message: "Teacher request updated successfully",
        request: updatedRequest,
      });
  } catch (error) {
    console.error("Error updating teacher request:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/teacher-requests", async (req, res) => {

  try {
    const requests = await TeacherRequest.find({});
    res.status(200).json(requests);
  } catch (error) {
    console.error("Error fetching teacher requests:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/service-request/:teacherId", async (req, res) => {
  const { teacherId } = req.params;
  try {
    const teacherRequest = await TeacherServiceRequest.findById(teacherId);

    if (!teacherRequest) {
      return res.status(404).json({ message: "Teacher service request not found" });
    }

    res.status(200).json({ teacherRequest });
  } catch (error) {
    console.error("Error fetching teacher service request data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
//spedic teacher status pending
router.get("/teacher-requestspending/:teacherId", async (req, res) => {
  const { teacherId } = req.params;

  try {
    const teacher = await TeacherRequest.findById(teacherId);

    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    // Retrieve the service requests associated with the teacher
    const serviceRequests = await TeacherServiceRequest.find({ teacher: teacherId, status: "pending" });
console.log("rsmlmdl",serviceRequests)
    res.status(200).json({ serviceRequests });
  } catch (error) {
    console.error("Error fetching teacher data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
router.get("/teacher-requestsapprove/:teacherId", async (req, res) => {
  const { teacherId } = req.params;

  try {
    const teacher = await TeacherRequest.findById(teacherId);

    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    // Retrieve the service requests associated with the teacher
    const serviceRequests = await TeacherServiceRequest.find({ teacher: teacherId, status: "approved" });

    res.status(200).json({ serviceRequests });
  } catch (error) {
    console.error("Error fetching teacher data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
router.get("/teacherspecificrequest/:teacherIdd", async (req, res) => {
  const { teacherIdd } = req.params;

  try {
    const teacherRequest = await TeacherServiceRequest.findById(teacherIdd);

    if (!teacherRequest) {
      return res.status(404).json({ message: "Teacher service request not found" });
    }

    res.status(200).json({ teacherRequest });
  } catch (error) {
    console.error("Error fetching teacher service request data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
module.exports = router;

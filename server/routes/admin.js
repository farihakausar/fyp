// // const express=require("express");
// // // const upload=require("../middlewares/Uploadpic")
// // // const filesget=require("../middlewares/MulterMiddleware")
// // const router=express.Router();
// // const Course = require('../models/Admin/Addcourse');
// // const multer = require("multer");



// // const storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     cb(null, "./public/uploads");
// //   },
// //   filename: function (req, file, cb) {
// //     cb(null, `${Date.now()}_${path.extname(file.originalname)}`);
// //   },
// // });

// // const fileFilter = (req, file, cb) => {
// //   const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
// //   if (allowedFileTypes.includes(file.mimetype)) {
// //     cb(null, true);
// //   } else {
// //     cb(null, false);
// //   }
// // };
// // const upload = multer({ storage: storage ,fileFilter});

// // const storageFile = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     cb(null, "./files");
// //   },
// //   filename: function (req, file, cb) {
// //     const uniqueSuffix = Date.now();
// //     cb(null, uniqueSuffix + file.originalname);
// //   },
// // });
// // const uploadFile  = multer({ storageFile: storageFile});


// // const cpUpload = upload.fields([{ name: upload, maxCount: 1 }, { name:filesget, maxCount: 1 }])
// // // router.post('/courses', async (req, res) => {
// // //     try {
// // //       // Extract course details from request body
// // //       const { courseName, courseDesc, language, videoURL } = req.body;
  
// // //       // Create a new course document
// // //       const newCourse = new Course({
// // //         courseName,
// // //         courseDesc,
// // //         language,
// // //         videoURL,
// // //         pptFile
// // //       });
  
// // //       // Save the course to MongoDB
// // //       await newCourse.save();
  
// // //       // Respond with success message
// // //       res.status(201).json({ message: 'Course added successfully', course: newCourse });
// // //     } catch (error) {
// // //       // Handle errors
// // //       console.error('Error adding course:', error);
// // //       res.status(500).json({ message: 'Internal server error' });
// // //     }
// // //   });
// // router.post("/addcourses", upload.single("photo"), async (req, res) => {
// //   console.log(req.file);
// //   const { courseName, courseDesc,  videoURL,tech,tool} = req.body;
// //   // const photo = req.file.['avatar'][0];
// //   // req.files
// //   const pptFile = req.file.filename;
// //   const photo = req.file.filename;
// //   try {
// //     await Course.create({  courseName, courseDesc,  videoURL,tech,tool,photo,pptFile});
// //     res.send({ status: "ok" });
// //   } catch (error) {
// //     res.json({ status: error });
// //   }
// // });

// //   module.exports = router;
// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const path = require('path');
// const Course = require('../models/Admin/Addcourse');
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./public/uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}_${path.extname(file.originalname)}`);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
//   if (allowedFileTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// const storageFile = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./files");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now();
//     cb(null, uniqueSuffix + file.originalname);
//   },
// });

// const upload = multer({ storage: storage, fileFilter: fileFilter });
// const uploadFile = multer({ storage: storageFile });
// // upload.single("photo"), uploadFile.single("file")
// router.post("/addcourses", async (req, res) => {
//    // file file
//   // const { courseName, courseDesc, videoURL, tech, tool } = req.body;
//   // const pptFile = req.file.filename;
//   // const photo = req.file.filename; 
//   // try {
//   //   // Assuming Course is your mongoose model
//   //   await Course.create({ courseName, courseDesc, videoURL, tech, tool});
//   //   // await Course.create({ courseName, courseDesc, videoURL, tech, tool, photo:photo, pptFile:pptFile});
//   //   res.send({ status: "ok" });
//   // } 

//   try {
//     const {
//       courseName, courseDesc, videoURL, tech, tool
//     } = req.body;

//     const newRequest = new Course({
//       courseName, courseDesc, videoURL, tech, tool
//     });

//     await newRequest.save();
//     res
//       .status(201)
//       .json({
//         message: "course addedrequest submitted successfully",
//         request: newRequest,
//       });
//   }
//   catch (error) {
//     res.json({ status: error });
//   }
// });
// router.put('/courses/:id', async (req, res) => {
//   try {
//       const { id } = req.params;
//       console.log(id,'id')
//       const { courseName, courseDesc, videoURL, tech, tool } = req.body;
//   const pptFile = req.file.filename; 
//   const photo = req.file.filename; 
//       // const { courseName, courseDesc, language, videoURL, pptFile } = req.body;

//       const updatedCourse = await Course.findByIdAndUpdate(id, {
//         courseName, courseDesc, language, videoURL ,tech, tool,photo,pptFile
//       }, { new: true }); 

//       if (!updatedCourse) {
//           return res.status(404).json({ message: 'Course not found' });
//       }

//       res.status(200).json({ message: 'Course updated successfully', course: updatedCourse });
//   } catch (error) {
//       console.error('Error updating course:', error);
//       res.status(500).json({ message: 'Internal server error' });
//   }
// });
// module.exports = router;
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Course = require('../models/Admin/Addcourse');
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

const storageFile = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage, fileFilter: fileFilter });
const uploadFile = multer({ storage: storageFile });

// router.post("/addcourses", upload.single("photo"), uploadFile.single("file"), async (req, res) => {
//   console.log(req.file); // photo file
//   console.log(req.file); // file file
//   const { courseName, courseDesc, videoURL, tech, tool } = req.body;
//   const pptFile = req.file.filename; // Assuming you want the filename of the photo
//   const uploadedFile = req.file.filename; // Assuming you want the filename of the uploaded file
//   try {
//     // Assuming Course is your mongoose model
//     await Course.create({ courseName, courseDesc, videoURL, tech, tool, photo: pptFile, uploadedFile: uploadedFile });
//     res.send({ status: "ok" });
//   } catch (error) {
//     res.json({ status: error });
//   }
// });
router.post('/courses', async (req, res) => {
  try {
    // Create a new course object using the request body
    const newCourse = new Course({
      // photo: req.body.photo,
      courseName: req.body.courseName,
      courseDesc: req.body.courseDesc,
      videoURL: req.body.videoURL,
      // pptFile: req.body.pptFile,
      language: req.body.language,
      tech: req.body.tech,
      tool: req.body.tool
    });

    // Save the new course to the database
    const savedCourse = await newCourse.save();

    // Respond with the saved course
    res.status(201).json(savedCourse);
  } catch (error) {
    // If there's an error, respond with an error message
    res.status(400).json({ message: error.message });
  }
});
router.get('/courses/:roomid', async (req, res) => {

    // Extract the course ID from the request parameters
    const roomid=req.params.roomid;
    console.log(roomid,"nnkllk")
    try{
        const room=await Course.findOne({_id:roomid});
console.log(room,"done")
    // Check if the course exists
    if (!room) {
      return res.status(404).json({ message: "Course not found" });
    }

    // If the course exists, respond with it
    res.status(200).json(room);
  } catch (error) {
    // If there's an error, respond with an error message
    res.status(500).json({ message: error.message });
  }
});
router.get("/getallcourses",async(req,res)=>{
  try{
      const rooms=await Course.find({});
      res.send(rooms);
  }catch(error){
      res.status(400).json({msg:error})
  }
  })
router.put("/courses/:roomid", async (req, res) => {
  const { roomid } = req.params;
  console.log(roomid,"mklmlm")
  const {
    photo,
      courseName,
      courseDesc,
      videoURL,
      pptFile,
      tech,
      tool,
    
  } = req.body;

  try {
    const updatedRequest = await Course.findByIdAndUpdate(
      roomid,
      {
        photo,
        courseName,
        courseDesc,
        videoURL,
        pptFile,
        tech,
        tool,
      },
      { new: true }
    );

    if (!updatedRequest) {
      return res.status(404).json({ message: "Teacher request not found" });
    }

    res
      .status(200)
      .json({
        message: "course  updated successfully",
        request: updatedRequest,
      });
  } catch (error) {
    console.error("Error updating course request:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;

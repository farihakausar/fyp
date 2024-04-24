// const express=require("express");
// // const upload=require("../middlewares/Uploadpic")
// // const filesget=require("../middlewares/MulterMiddleware")
// const router=express.Router();
// const Course = require('../models/Admin/Addcourse');
// const multer = require("multer");



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
// const upload = multer({ storage: storage ,fileFilter});

// const storageFile = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./files");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now();
//     cb(null, uniqueSuffix + file.originalname);
//   },
// });
// const uploadFile  = multer({ storageFile: storageFile});


// const cpUpload = upload.fields([{ name: upload, maxCount: 1 }, { name:filesget, maxCount: 1 }])
// // router.post('/courses', async (req, res) => {
// //     try {
// //       // Extract course details from request body
// //       const { courseName, courseDesc, language, videoURL } = req.body;
  
// //       // Create a new course document
// //       const newCourse = new Course({
// //         courseName,
// //         courseDesc,
// //         language,
// //         videoURL,
// //         pptFile
// //       });
  
// //       // Save the course to MongoDB
// //       await newCourse.save();
  
// //       // Respond with success message
// //       res.status(201).json({ message: 'Course added successfully', course: newCourse });
// //     } catch (error) {
// //       // Handle errors
// //       console.error('Error adding course:', error);
// //       res.status(500).json({ message: 'Internal server error' });
// //     }
// //   });
// router.post("/addcourses", upload.single("photo"), async (req, res) => {
//   console.log(req.file);
//   const { courseName, courseDesc,  videoURL,tech,tool} = req.body;
//   // const photo = req.file.['avatar'][0];
//   // req.files
//   const pptFile = req.file.filename;
//   const photo = req.file.filename;
//   try {
//     await Course.create({  courseName, courseDesc,  videoURL,tech,tool,photo,pptFile});
//     res.send({ status: "ok" });
//   } catch (error) {
//     res.json({ status: error });
//   }
// });

//   module.exports = router;
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

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

router.post("/addcourses", upload.single("photo"), uploadFile.single("file"), async (req, res) => {
  console.log(req.file); // photo file
  console.log(req.file); // file file
  const { courseName, courseDesc, videoURL, tech, tool } = req.body;
  const pptFile = req.file.filename; // Assuming you want the filename of the photo
  const uploadedFile = req.file.filename; // Assuming you want the filename of the uploaded file
  try {
    // Assuming Course is your mongoose model
    await Course.create({ courseName, courseDesc, videoURL, tech, tool, photo: pptFile, uploadedFile: uploadedFile });
    res.send({ status: "ok" });
  } catch (error) {
    res.json({ status: error });
  }
});

module.exports = router;

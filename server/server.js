const express=require("express");
const cors=require("cors");
const cookieParser=require("cookie-parser")
const app=express();
const stripe = require('stripe')('sk_test_51Og5cTJ7pz3TsDzfIWpcaLz5zF1CIvNufxvxC95qYeu9Ay34G5eCeD4OyEJi64I4ple15BNiVrEElqmCEaefvYpE00xAtRInFM');

const dbConfig=require("./db")
const port=process.env.PORT||5000;


const Usermodel =require("./routes/basic")

const Admin =require("./routes/admin")
const teacherRequestRoutes = require('./routes/teacher');




app.use(cors())
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(cors());
app.use(cookieParser())
app.use("/files", express.static("files"));

app.use("/api/users",Usermodel);
// app.use("/api/admin",Admin);
app.use('/api/teacher', teacherRequestRoutes);
app.use("/api/admin",Admin);
// app.use("/api/teacher",Teachermodel);
app.listen(5000,()=>{
    console.log(`serverr is lientimg to ${port} `);
})





// });////////////////////////
// image ///
// const express = require('express');
// const cloudinary = require('cloudinary').v2;
// const mongoose = require('mongoose');
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });

// const app = express();

// // Connect to MongoDB
// // mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true });
// const DB="mongodb+srv://farihakausar24:zFFDfJSzgCMWm8Wa@cluster0.xa4xr4q.mongodb.net/";



// mongoose.connect(DB).then(()=>{
//     console.log("connection successful")
// }).catch((err)=>console.log("no connection"))
// // Configure Cloudinary
// cloudinary.config({
//   cloud_name: 'dmyrbutlu',
//   api_key: '234937942539642',
//   api_secret: '_Ap3aiSN-NBZ2xt3x4Mm9w4yBoo'
// });

// // Define Schema
// const imageSchema = new mongoose.Schema({
//   imageURL: String
// });
// const Image = mongoose.model('Image', imageSchema);

// // Route for Image Upload
// app.post('/upload', upload.single('image'), async (req, res) => {
//   try {
//     const result = await cloudinary.uploader.upload(req.file.path);
//     const newImage = new Image({ imageURL: result.secure_url });
//     await newImage.save();
//     res.status(201).send('Image uploaded successfully');
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });

// app.listen(3001, () => console.log('Server running on port 3001'));
//pdf nknk
// const express = require('express');
// const cloudinary = require('cloudinary').v2;
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });
// const mongoose = require('mongoose');
// const app = express();
// // mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true });
// const DB="mongodb+srv://farihakausar24:zFFDfJSzgCMWm8Wa@cluster0.xa4xr4q.mongodb.net/";



// mongoose.connect(DB).then(()=>{
//     console.log("connection successful")
// }).catch((err)=>console.log("no connection"))
// // Configure Cloudinary
// cloudinary.config({
//   cloud_name: 'dmyrbutlu',
//   api_key: '234937942539642',
//   api_secret: '_Ap3aiSN-NBZ2xt3x4Mm9w4yBoo'
// });
// const imageSchema = new mongoose.Schema({
//       imageURL: String
//     });
//     const Image = mongoose.model('Image', imageSchema);
// // Route for PDF Upload
// app.post('/upload-pdf', upload.single('pdf'), async (req, res) => {
//   try {
  
   
//     const result = await cloudinary.uploader.upload(req.file.path, { resource_type: 'raw' });
//     // Save the Cloudinary URL or result to your MongoDB database
//          const newImage = new Image({ imageURL: result.secure_url });
//         await newImage.save();
//     res.json({ url: result.secure_url });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// app.listen(3001, () => console.log('Server running on port 3001'));

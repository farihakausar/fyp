const express=require("express");
const cors=require("cors");

const app=express();

const dbConfig=require("./db")
const port=process.env.PORT||5000;


const Usermodel =require("./routes/basic")
const Teachermodel =require("./routes/basic")
const Admin =require("./routes/admin")
const teacherRequestRoutes = require('./routes/teacher');




app.use(cors())
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(cors());
app.use("/files", express.static("files"));

app.use("/api/users",Usermodel);
// app.use("/api/admin",Admin);
app.use('/api', teacherRequestRoutes);
app.use("/api/admin",Admin);
// app.use("/api/teacher",Teachermodel);
app.listen(5000,()=>{
    console.log(`serverr is lientimg to ${port} `);
})


// const express = require('express');
// const cloudinary = require('cloudinary').v2;
// const mongoose = require('mongoose');
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });

// const app = express();

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true });

// // Configure Cloudinary
// cloudinary.config({
//   cloud_name: 'your_cloud_name',
//   api_key: 'your_api_key',
//   api_secret: 'your_api_secret'
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

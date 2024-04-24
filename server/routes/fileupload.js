const express=require("express");
const upload = require("../middleware/Mu;lterMiddleware");
const uploadpic = require("../models/UploadModel");

const router=express.Router();



router.post("/registerphoto",upload.single('photo'), async (req, res) => {
   const photo=req.file.filename;
   console.log(photo)
   uploadpic.create({photo})
   .then((data)=>{
    console.log("ukhkh")
    res.send(data)
   }).catch((err)=>{console.log("error")})
  });
router.get("/getimg",async(req,res)=>{
    const allphotos=await uploadpic.find().sort({createdAt:"descending"})
    res.send(allphotos)
})
  module.exports=router
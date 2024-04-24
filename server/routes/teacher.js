const express = require("express");
const router = express.Router();
const TeacherRequest = require("../models/teacher/teacherInfo");

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

router.get("/teacher-requests/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const request = await TeacherRequest.findById(id);
    if (!request) {
      return res.status(404).json({ message: "Teacher request not found" });
    }
    res.status(200).json(request);
  } catch (error) {
    console.error("Error fetching teacher request:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;

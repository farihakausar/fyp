// const mongoose = require('mongoose');


// const courseSchema = new mongoose.Schema(
//   {
//     // photo: String,
//     courseName: String,
//     courseDesc: String,
//     videoURL: String,
//   //  pptFile: String,
//   //  language: {
//   //   type: String,
//   //   enum: ['English', 'Urdu', 'Mexican'], // Define possible language options
//   //   default: 'English'
//   // },
//    tech: String,
//    tool: String,
    
    
//   },
//   { collection: "courseDetail" }
// );



// const Course = 
// mongoose.model("courseDetail", courseSchema);

// module.exports = Course;
const mongoose = require('mongoose');


const courseSchema = new mongoose.Schema(
  {
    // photo: String,
    courseName: String,
    courseDesc: String,
    videoURL: String,
  //  pptFile: String,
   language: {
    type: String,
    enum: ['English', 'Urdu', 'Mexican'], // Define possible language options
    default: 'English'
  },
   tech: String,
   tool: String,
    
    
  },
  { collection: "courseDetail" }
);



const Course = 
mongoose.model("courseDetail", courseSchema);

module.exports = Course;


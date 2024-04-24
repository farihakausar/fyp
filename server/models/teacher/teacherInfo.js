const mongoose = require('mongoose');

const teacherRequestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
   email: {
        type: String,
        required: true
    },
    specialty: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
   
   
   experience: {
        type: String  
    },
   photo: {
        type: String  
    },
});

const TeacherRequest = mongoose.model('TeacherRequest', teacherRequestSchema);

module.exports = TeacherRequest;

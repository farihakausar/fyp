const mongoose = require('mongoose');


const teacherServiceRequestSchema = new mongoose.Schema({
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TeacherRequest',
        // required: true
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
   
        course: {
            type: String,
            // required: true
        },
        price: {
            type: Number,
            // required: true
        },
        aboutCourse: {
            type: String
        },
        timing: {
            type: String
        
    },
    address: {
        type: String,
        // required: true
    },
    educationDetail: {
        type: String
    },
    cv: {
        type: String
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    }
});

const TeacherServiceRequest = mongoose.model('TeacherServiceRequest', teacherServiceRequestSchema );

module.exports = TeacherServiceRequest;

const mongoose = require('mongoose');

// Model ของ Employee***
var employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'โปรดระบุชื่อนามสกุลให้ถูกต้อง'
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    number: {
        type: String
    }
});

// if wrong email 
employeeSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'โปรดระบุอีเมลให้ถูกต้อง');

// เรียกใช้ schema
mongoose.model('Employee', employeeSchema);
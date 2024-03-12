const express  = require('express');
const router = express.Router();
const studentModel = require('./../models/student.model')

router.get('/' ,(req ,res) =>{
    const student = new studentModel ({
        grid : 'String',
        name : 'String',
        age: 2,
        gender: 'String' ,
        email: 'String',
        course : 'String'
    })
    student.save();
    res.render('index');
})
module.exports =  router;
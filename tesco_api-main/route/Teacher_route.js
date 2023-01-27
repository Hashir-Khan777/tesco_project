const express=require('express')
const Teacher_Router=express.Router()
const {get_all_teacher,get_one_teacher, create_teacher,delete_teacher,update_teacher} = require('../controller/Teacher_controller')



// Here is the route of Teacher
Teacher_Router.get('/teacher',get_all_teacher)
Teacher_Router.post('/create-teacher',create_teacher)
Teacher_Router.delete('/teacher/:id',delete_teacher)
Teacher_Router.put('/teacher',update_teacher)
Teacher_Router.get('/teacher/:id',get_one_teacher)

module.exports = Teacher_Router
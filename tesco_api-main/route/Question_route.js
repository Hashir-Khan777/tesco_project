const express=require('express')
const { create_question, getall_question, delete_question, update_question } = require('../controller/Question_controller')
const Question_Router=express.Router()

Question_Router.post('/create-question',create_question)
Question_Router.put('/update-question',update_question)
Question_Router.get('/question',getall_question)
Question_Router.delete('/question/:id',delete_question)
module.exports=Question_Router
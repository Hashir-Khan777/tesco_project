const express=require('express')
const { sign_up, login, changePassword } = require('../controller/Admin_controller')
const Admin_Router=express.Router()

Admin_Router.post('/create-admin',sign_up)
Admin_Router.post('/login',login)
// Admin_Router.patch('/change-password',changePassword)
module.exports=Admin_Router
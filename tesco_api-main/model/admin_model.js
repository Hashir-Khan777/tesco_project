const mongoose=require('mongoose')
const Schema=mongoose.Schema
const adminSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    firstname:{
        type:String,
        required: true,
        minlength: 3,
        maxlength: 200
    },
    middlename:{
        type:String,
        
        minlength: 3,
        maxlength: 200
    },
    lastname:{
        type:String,
        required: true,
        minlength: 3,
        maxlength: 200
    },
    registerDate: {
        type: Date,
        default: Date.now
      },
    role:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true
    }
    
})
const AdminModal=mongoose.model('User',adminSchema)
module.exports=AdminModal
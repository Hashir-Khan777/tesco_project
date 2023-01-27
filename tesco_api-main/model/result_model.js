const mongoose=require("mongoose")
const Schema=mongoose.Schema
const answerSchema=new Schema({
    answer:{
        type:String,
        required:true
    }
})
const resultSchema=new Schema({
    firstname:{
        type:String,
        required:true
    },
    middlename:{
        type:String,
        
    },
    lastname:{
        type:String,
        required:true
    },
   answer:[answerSchema],
   
    score:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
const ResultModal=mongoose.model('Result',resultSchema)
module.exports=ResultModal
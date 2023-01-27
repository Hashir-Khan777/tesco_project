const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const TopicsSchema=new Schema({
    generatedCode:{
        type:String,
        required:true
    },
    topic:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    user_id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true 
    }
    
    


})

const TopicsModel=mongoose.model('Topic',TopicsSchema)
module.exports=TopicsModel
const mongoose=require('mongoose')
const Schema=mongoose.Schema
const questionSchema=new Schema({
    type:{
        type:String,
    },
    question:{
        type:String,
        
    },
    choice1:{
        type:String,
        
    },
    choice2:{
        type:String,
        
    },
    choice3:{
        type:String,
        
    },
   number:{
        type:String,
        
    },
    answer:{
        type:String
    }
   
    

})

const questionsSchema=new Schema({
    questionnaire_id:{
        type:Number,
        required:true
    },
    topic_name:{
        type:String,
        required:true
    },
    questionnaire_title:{
        type:String,
        required:true
    },
    instructor:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    questions:[questionSchema],
    
})
const QuestionModal=mongoose.model('Question',questionsSchema)
module.exports=QuestionModal
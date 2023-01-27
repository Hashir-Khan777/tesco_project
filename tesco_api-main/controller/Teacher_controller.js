const hashPassword = require('../middleware/PasswordHash/passwordhash')
const AdminModal = require('../model/admin_model')

const generateUniqueInteger=require("../middleware/GenerateCode/generateCode")

// Get all teacher Data

exports.get_all_teacher= async(req,res)=>{
    try{
        const dataList=[]
        const teacher=await AdminModal.find({})
        teacher.forEach(each=>{
            if(each.role==="teacher"){
                dataList.push({
                    _id:each._id,
                    id:each.id,
                    username:each.username,
                    role:each.role,
                    firstname:each.firstname,
                    date:each.registerDate,
                    lastname:each.lastname,
                    middlename:each.middlename
                })
            }
        })
        res.status(200).json({message:'Data fetch succesfully',success:true,data:dataList})
    }
    catch(err){
        res.status(500).send(err)
    }
}
exports.get_one_teacher= async(req,res)=>{
    try{
        const teacher=await TeacherModel.findOne({_id:req.params.id})
        const{username,firstname,lastname,middlename}=teacher
        res.status(200).json({message:'Data fetch succesfully',success:true,data:{username,firstname,lastname,middlename}})
    }
    catch(err){
        res.status(500).send(err)
    }
}
exports.create_teacher=async(req,res)=>{
   const hash_password=await hashPassword(req.body.password)
   const randomCode = generateUniqueInteger();
    try{
        const teachers=await AdminModal.findOne({username:req.body.username})
        if(teachers){
            res.status(400).json({message:"username already exits",success:false})
        }else{
          const teacher=  new AdminModal({
              id:randomCode,
              username:req.body.username,
              password:hash_password,
              firstname:req.body.firstname,
              lastname:req.body.lastname,
              middlename:req.body.middlename,
              role:"teacher"
            })
           try{
            await teacher.save()
            res.status(200).json({ sucess: true, message: "teacher data added" });
           }catch(err){
            return res.status(201).json({ success: false, msg: err.message });
           }
         
            
        }
    }
    catch(err){
        res.status(500).send(err)
    }
}

exports.delete_teacher=async(req,res)=>{
    try{
        const response=await AdminModal.deleteOne({_id:req.params.id})
        response&&res.status(200).json({message:"data has been deleted",sucess:true,data:response})
    }
    catch(err){
        res.status(500).send(err)
    }

}
exports.update_teacher=async(req,res)=>{
    const filter=req.body.id
    try {
        const response = await AdminModal.updateOne({_id:filter},{
            $set:{
                "firstname":req.body.firstname,
                "lastname":req.body.lastname,
                "username":req.body.username,
                "middlename":req.body.middlename,
                
                
            }
        })
        response&&res.status(200).json({success:true,data:response})
        
    } catch (err) {
        res.status(500).send(err)
        
    }


}
const AdminModal = require("../model/admin_model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SCRETE_KEY = "iamscrete";
const hashPassword = require("../middleware/PasswordHash/passwordhash");

const generateUniqueInteger=require('../middleware/GenerateCode/generateCode')

exports.sign_up = async (req, res) => {
  const { username, password,firstname,lastname,middlename } = req.body;
  const randomCode = generateUniqueInteger();
  try {
    const existingUser = await AdminModal.findOne({ username: username });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "user alredy existed", success: false });
    }
    const hashedPassword = await hashPassword(password);
    const result = await AdminModal.create({
      username: username,
      password: hashedPassword,
      firstname:firstname,
      lastname:lastname,
      middlename:middlename,
      role: "admin",
      id:randomCode,
    });
    await result.save();
    const token = jwt.sign(
      { username: result.username, role: result.role, id: result._id },
      SCRETE_KEY
    );
    res.status(201).json({ user: result, token: token });
  } catch (error) {
    return res.status(401).json({ message: "Something went wrong" });
  }
};
exports.login = async (req, res) => {
  const{username,password}=req.body
  try {
    const existingUser = await AdminModal.findOne({
      username: username,
    });
    if (!existingUser) {
      return res.status(400).json({ message: "username not found" });
    }
    if (existingUser.role === "admin") {
      const matchPassword = await bcrypt.compare(
        password,
        existingUser.password
      )
    if(!matchPassword){
      return res.status(400).json({ message: "invalid cridentials" })
    }
    const token=jwt.sign({username:existingUser.username,role:existingUser.role,firstname:existingUser.firstname,id:existingUser._id},SCRETE_KEY)
    
    if(token){
      return res.status(201).json({refreshToken:token,message:"admin",success:true,data:existingUser._id})

    } 
    }
   else if (existingUser.role === "teacher") {
        const matchPassword = await bcrypt.compare(
          password,
          existingUser.password
        )
        if(!matchPassword){
          return res.status(400).json({ message: "invalid cridentials" })
        }
        const token=jwt.sign({username:existingUser.username,role:existingUser.role,firstname:existingUser.firstname,id:existingUser._id},SCRETE_KEY)
      if(token){
        return res.status(200).json({refreshToken:token,message:"teacher",data:existingUser._id})
      }
  
      }
    
    
  } catch (err) {
    res
      .status(401)
      .json({ message: "something went wrong", success: false, data: err });
  }
  // const{role,username,password}=req.body
  // try {
  //     if(role==="admin"){
  //       const existingUser=await AdminModal.findOne({username:username})
  //         if(!existingUser){
  //             return res.status(400).json({message:"username not found"})
  //         }
  //         const matchPassword=await bcrypt.compare(password,existingUser.password)
  //         if(!matchPassword){
  //             return res.status(400).json({message:"invalid cridentials"})
  //         }
  //         const token=jwt.sign({username:existingUser.username,role:existingUser.role,id:existingUser._id},SCRETE_KEY)
  //         res.status(201).json({user:existingUser,token:token})

  //      }
  //      else if(role==="teacher"){
  //         const existingUser=await TeacherModel.findOne({username:username})
  //         if(!existingUser){
  //             return res.status(404).json({message:"username not found"})
  //         }
  //         const matchPassword=await bcrypt.compare(password,existingUser.password)
  //         if(!matchPassword){
  //             return res.status(400).json({message:"invalid cridentials"})
  //         }
  //         const token=jwt.sign({username:existingUser.username,role:existingUser.role,id:existingUser._id},SCRETE_KEY)
  //         res.status(201).json({user:existingUser,token:token})
  //      }

  // } catch (error) {
  //     res.status(401).json({message:"Something went wrong"})
  // }
};
// exports.changePassword=async(req,res)=>{
//     const{oldPassword,newPassword,username}=req.body
//     const hashedPassword=await hashPassword(newPassword)
//     try {
//        const existingUser=await AdminModal.findOne({username:username})
//        if(existingUser){
//         const encryptedPas=await bcrypt.compare(oldPassword,existingUser.password)
//         if(encryptedPas){
//             const response=await AdminModal.updateOne({username:existingUser},{
//                 $set:{
//                     "password":hashedPassword
//                 }
//             })
//             if(response){
//               return  res.status(200).json({success:true,data:response})
//             }

//         }else{
//             return res.status(400).json({message:"old password seems not match"})
//         }

//        }

//     } catch (error) {

//     }

// }

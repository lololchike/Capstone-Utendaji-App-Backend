// const router = require("express").Router();
// const { User} = require("../models/userSchema");
// const bcrypt = require("bcrypt");
// const joi = require(joi)


// router.post("/", async(req, res)=>{
//     try{
//     const {error} = validate(req.body)
//     if(error){
//         return res.status(400).send({message: error.details[0].message})
//     }
//     const user = await User.findOne({userName: req.body.userName})
//     if(!user){
//         return res.status(401).send({message: "Invalid Credentials"})
//     }
    
//     const validPW = await bcrypt.compare(req.body.password, user.password)
    
//     if(!validPW){
//         return res.status(401).send({message: "Invalid credentials"})
//     }
    
//     const token = user.generateAuthToken()
//     res.status(200).send({data:token, message: "Logged in Successfully"})
    
//         }
    
//     catch(err){
//         res.status(500).send({message: "Internal server error"})
//     }
//     })
    
//     const validate = (data)=>{
//     const schema = joi.object({
//         userName: joi.string().required().label("userName"),
//     password: joi.string().required().label("password")})
//     return schema.validate(data)
//     }
    
//     module.exports - router;

//     // login
// router.post("/", async(req, res)=>{
//     try{
//     const {error} = validate(req.body)
//     if(error){
//         return res.status(400).send({message: error.details[0].message})
//     }
//     const user = await User.findOne({userName: req.body.userName})
//     if(!user){
//         return res.status(401).send({message: "Invalid Credentials"})
//     }
    
//     const validPW = await bcrypt.compare(req.body.password, user.password)
    
//     if(!validPW){
//         return res.status(401).send({message: "Invalid credentials"})
//     }
    
//     const token = user.generateAuthToken()
//     res.status(200).send({data:token, message: "Logged in Successfully"})
    
//         }
    
//     catch(err){
//         res.status(500).send({message: "Internal server error"})
//     }
//     })
    
//     const validate = (data)=>{
//     const schema = joi.object({
//         userName: joi.string().required().label("userName"),
//     password: joi.string().required().label("password")})
//     return schema.validate(data)
//     }
    
    
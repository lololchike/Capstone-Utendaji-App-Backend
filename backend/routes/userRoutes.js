const router = require("express").Router();
const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const validator = require("validator")
const jwt = require("jsonwebtoken")

const generateToken = (_id) => {
 return jwt.sign({_id}, process.env.JWTPRIVATEKEY, {expiresIn: "3d"})
  }
  
// login
router.post("/login", async (req, res)=>{
  const {userName, password} = req.body
  try{
    if (!userName || !password){
      throw Error("All fields must be filled")
    }
    const user = await User.findOne({userName})
    if (!user){
      throw Error("No such user exists")
    }
    const match = await bcrypt.compare(password, user.password)
    if (!match){
      throw Error("Wrong password entered")
    }
    const token = generateToken(user._id)
res.status(200).json({user, token})


  }
  catch(err){
    res.status(400).json({error: err.message})
  }
}
)

// signup
router.post("/", async (req, res)=>{
const {  firstName, middleName, lastName,userName, password,  email, role, station, team, dateHired} = req.body

try{
  if (!userName || !password){
    throw Error("All fields must be filled")
  }
  // if (!validator.isEmail(email)){
  //   throw Error("Please enter a valid email")
  // }
  // if (!validator.isStrongPassword(password)){
  // throw Error("That password is too weak")
  // }
  const usernameexists = await User.findOne({userName})
  if(usernameexists){
      throw Error("That username is already taken")
  }
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
const user = await User.create({firstName, middleName, lastName, email, role, station, team, dateHired, userName, password:hashedPassword}) 

// const token = generateToken(user._id)

res.status(200).json({user})
}
catch(error){
res.status(400).json({error: error.message})
}
})



module.exports = router;






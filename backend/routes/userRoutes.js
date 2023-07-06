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
const {userName, password} = req.body

try{
  if (!userName || !password){
    throw Error("All fields must be filled")
  }
  // if (!validator.isEmail(email)){
  //   throw Error("Please enter a valid email")
  // }
  // if (!validator.isStrongPassword(password)){
  // throw Error("The password is too weak")
  // }
  const usernameexists = await User.findOne({userName})
  if(usernameexists){
      throw Error("Username belongs to someone else")
  }
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
const user = await User.create({userName, password:hashedPassword}) 

const token = generateToken(user._id)
res.status(200).json({user, token})
}
catch(error){
res.status(400).json({error: error.message})
}
})


















module.exports = router;

// create user

// router.post("/login", async (req, res) => {
//   try {
//     const { error } = validate(req.body);
//     if (error) {
//       return res.status(400).send({ message: error.details[0].message });
//     }
//     const user = await User.findOne({ userName: req.body.userName });
//     if (user) {
//       return res.status(409).send({ message: "User already exists" });
//     }

// const salt = await bcrypt.genSalt(Number(process.env.SALT))
// const hashedPW = await bcrypt.hash(req.body.password, salt)
// await new User ({...req.body, password: hashedPW}).save()
// res.status(201).send({message: "User successfully added"})
//   } catch (err) {
//     res.status(500).send({message: "Internal server error"})
//   }
// });





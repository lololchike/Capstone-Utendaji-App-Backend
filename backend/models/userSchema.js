const mongoose = require("mongoose")

const bcrypt = require("bcrypt");


const schema = mongoose.Schema

const userSchema = new schema(
    {  firstName:String,
      middleName: String,
      lastName: String,
          email: String,
          role: String,
          station: String,
          team: String,
          userName:{
            type: String,
            required: true,
            unique: true
          },
        
        password: {
            type: String,
            required: true
          }, 
          dateHired: {
            type: String,
            default: new Date()
          }
        
    }
)

// userSchema.statics.signup = async function(userName, password){
//     const usernameexists = await this.findOne({userName})
//     if(usernameexists){
//         throw Error("Username belongs to someone else")
//     }
//     const salt = await bcrypt.genSalt(10)
//     const hashedPassword = await bcrypt.hash(password, salt)
// const user = await this.create({userName, password:hashedPassword})
// return user
// } 

module.exports = mongoose.model("User", userSchema)






























// const mongoose = require("mongoose")
// const jwt = require("jsonwebtoken")
// const joi = require("joi")
// const passcomplex = require("joi-password-complexity")

// const userSchema = new mongoose.Schema(
//     {
//         userName:{
//             type: String,
//             required:[true, "Username is a must"],
//         },
//         password: {
//             type: String,
//             required: [true, "Password is a must"]
//         }
//     }
// )

// userSchema.methods.generateAuthToken = () => {
// const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY, {expiresIn: "7d"})
// return token
// }

// const User = mongoose.model("user", userSchema)

// const validate = (user) => {
// joi.object({
//     userName: joi.string().required().label("userName"),
//     password: passcomplex().required().label("password"),
// })
// return joi.object.validate(data)
// }

// module.exports = {User, validate}
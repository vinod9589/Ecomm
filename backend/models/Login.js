const mongoose = require("mongoose")

const LoginSchema = mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    mobilenumber:String,
    password:String,


  
})

module.exports = mongoose.model("Login", LoginSchema);
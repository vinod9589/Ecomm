const mongoose = require("mongoose")

const TodoSchema = mongoose.Schema({
    name:String,
    number:String,
    age:String,

  
})

module.exports = mongoose.model("Todo", TodoSchema);
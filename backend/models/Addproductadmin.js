const mongoose = require("mongoose")

const AddproductadminSchema = mongoose.Schema({
    
    
    
productname:String,
productbrand:String,
productprice:String,
productdiscount:String,
productdiscription:String,
quantity:String,
productcolor:String,
catagery:String,
size:String,
image:String,    

    

  
})

module.exports = mongoose.model("Addproductadmin", AddproductadminSchema);
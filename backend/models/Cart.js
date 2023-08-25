const mongoose = require("mongoose")

const CartSchema = mongoose.Schema({
    
    
    
productname:String,
productbrand:String,
productprice:String,
quantity:String,
size:String,
image:String,  
email:String  

    

  
})

module.exports = mongoose.model("Cart", CartSchema);
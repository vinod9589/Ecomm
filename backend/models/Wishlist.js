const mongoose = require("mongoose")

const WishlistSchema = mongoose.Schema({
    image:String,
    productname:String,
    productprice:String,
    email:String,

  
})

module.exports = mongoose.model("Wishlist", WishlistSchema);
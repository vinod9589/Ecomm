const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");

router.get("/", async (req, res) => {
  try {
    const cart = await Cart.find();
    res.status(200).json({
      data: cart,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);

    res.status(200).json({
      data: cart,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const cart = new Cart(req.body);
    const newcart = await cart.save();

    res.status(200).json({
      data: newcart,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);

    if (!cart) {
      return res.status(400).json({ message: "Cart does not exist" });
    }
    cart.name = req.body.name || cart.name;
    cart.number = req.body.number || cart.number;
    cart.age = req.body.age || cart.age;
 
    
    const updatedUser = await cart.save();

    res.status(200).json({
      data: updatedUser,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Cart.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Cart is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;

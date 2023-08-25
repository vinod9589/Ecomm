const express = require("express");
const router = express.Router();
const Addproductadmin = require("../models/Addproductadmin");

router.get("/", async (req, res) => {
  try {
    const addproductadmin = await Addproductadmin.find();
    res.status(200).json({
      data: addproductadmin,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const addproductadmin = await Addproductadmin.findById(req.params.id);

    res.status(200).json({
      data: addproductadmin,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const addproductadmin = new Addproductadmin(req.body);
    const newaddproductadmin = await addproductadmin.save();

    res.status(200).json({
      data: newaddproductadmin,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const addproductadmin = await Addproductadmin.findById(req.params.id);

    if (!addproductadmin) {
      return res.status(400).json({ message: "Addproductadmin does not exist" });
    }
    addproductadmin.productname = req.body.productname || addproductadmin.productname;
    addproductadmin.productbrand = req.body.productbrand || addproductadmin.productbrand;
    addproductadmin.productprice = req.body.productprice || addproductadmin.productprice;
    addproductadmin.productdiscount = req.body.productdiscount || addproductadmin.productdiscount;
    addproductadmin.productdiscription = req.body.productdiscription || addproductadmin.productdiscription;
    addproductadmin.quantity = req.body.quantity || addproductadmin.quantity;
    addproductadmin.productcolor = req.body.productcolor || addproductadmin.productcolor;
    addproductadmin.catagery = req.body.catagery || addproductadmin.catagery;
    addproductadmin.size = req.body.size || addproductadmin.size;
    addproductadmin.image = req.body.image || addproductadmin.image;
 
    
    const updatedUser = await addproductadmin.save();

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
    await Addproductadmin.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Addproductadmin is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;

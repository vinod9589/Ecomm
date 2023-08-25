import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Adminheader from './Adminheader'
import axios from 'axios';


function Addproductadmin() {

  const[productData,setProductData]=useState([])
  const[productname,setProductname]=useState("")
  const[productbrand,setProductbrand]=useState("")
  const[productprice,setProductprice]=useState("")
  const[productdiscount,setProductdiscount]=useState("")
  const[productdiscription,setProductdiscription]=useState("")
  const[quantity,setQuantity]=useState("")
  const[productcolor,setProductcolor]=useState("")
  const[catagery,setCatagery]=useState("")
  const[size,setSize]=useState("")
  const[image,setImage]=useState("")


  const postData=()=>{
    const item={
      productname:productname,
      productbrand:productbrand,
      productprice:productprice,
      productdiscount:productdiscount,
      productdiscription:productdiscription,
      quantity:quantity,
      productcolor:productcolor,
      catagery:catagery,
      size:size,
      image:image,

    }
    axios.post("http://localhost:5001/api/addproductadmin", item)
  }

  return (
    <div>
        <div style={{height:"745px", width:"100%", backgroundColor:"red", display:"flex"}}>

        <div style={{height:"745px", width:"20%", backgroundColor:"yellow"}}>
     
     <Sidebar/>
  </div>
  <div style={{height:"800px", width:"80%", backgroundColor:"#c1d2d1",overflowY:"auto", display:"flex",flexDirection:"column",}}>
  <Adminheader/><br/>
<div style={{height:"750px",width:"90%",backgroundColor:"white",marginLeft:"5%",borderRadius:"10px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
    <label style={{marginTop:"40px",marginLeft:"5px"}}>About Product</label><br></br>
    <input onChange={(e)=>setProductname(e.target.value)} style={{border:"1px solid black",height:"50px",width:"45%",marginLeft:"50px",borderRadius:"10px"}} placeholder='Product Name/Title*'></input>
    <input onChange={(e)=>setProductbrand(e.target.value)} style={{border:"1px solid black",height:"50px",width:"45%",marginLeft:"20px",borderRadius:"10px"}} placeholder='Product Brand'></input>
    <input onChange={(e)=>setProductprice(e.target.value)} style={{border:"1px solid black",height:"50px",width:"45%",marginLeft:"50px",borderRadius:"10px",marginTop:"50px"}} placeholder='Product Price*'></input>
    <input onChange={(e)=>setProductdiscount(e.target.value)} style={{border:"1px solid black",height:"50px",width:"45%",marginLeft:"20px",borderRadius:"10px"}} placeholder='Product Discount'></input>
    <input onChange={(e)=>setProductdiscription(e.target.value)} style={{border:"1px solid black",height:"50px",width:"92%",marginLeft:"50px",borderRadius:"10px" ,marginTop:"50px"}} placeholder='Product Discription*'></input>
    <input onChange={(e)=>setQuantity(e.target.value)} style={{border:"1px solid black",height:"50px",width:"45%",marginLeft:"50px",borderRadius:"10px" ,marginTop:"50px"}} placeholder='Quantity*'></input>
    <input onChange={(e)=>setProductcolor(e.target.value)} style={{border:"1px solid black",height:"50px",width:"45%",marginLeft:"20px",borderRadius:"10px"}} placeholder='Product color'></input>
    <input onChange={(e)=>setCatagery(e.target.value)} style={{border:"1px solid black",height:"50px",width:"45%",marginLeft:"50px",borderRadius:"10px",marginTop:"50px"}} placeholder='Catagery*'></input>
    <input onChange={(e)=>setSize(e.target.value)} style={{border:"1px solid black",height:"50px",width:"45%",marginLeft:"20px",borderRadius:"10px"}} placeholder='Size'></input>


    <label style={{fontSize:"20px",marginTop:"50px",marginLeft:"50px"}}> Product Gallery</label><br></br>
    <label  style={{fontSize:"15px",marginTop:"5px",marginLeft:"50px",color:"#daaf92"}}> Upload Maximum 800 x 800 px</label>
    <input onChange={(e)=>setImage(e.target.value)} style={{ border:"1px solid black",height:"50px",width:"15%",backgroundColor:"yellow",marginLeft:"50px",display:"flex",justifyContent:"space-evenly",alignItems:"center"}} placeholder='upload image'>
    

    </input>
    <button onClick={()=>postData()} style={{height:"30px",width:"15%",marginLeft:"45%",borderRadius:"5px",border:"1px solid black"}}>Submit</button>
</div>

  </div>

        </div>
      
    </div>
  )
}

export default Addproductadmin

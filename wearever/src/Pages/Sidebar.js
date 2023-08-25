import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Sidebar() {
  const [show,setShow]=useState(true)
  const navigate=useNavigate()
  return (
 
    <div style={{border:"1px solid black"}} >
      <div style={{height:"745px",width:"20%",backgroundColor:"#561d1f",boxShadow:"5px 5px 5px white 5px", position:"fixed"}}>
<div style={{height:"200px",width:"100%",backgroundColor:"#561d1f",display:"flex",justifyContent:"center",alignItems:"center"}}>
 <img style={{width:"100%"}} src='https://wearevermore.in/static/media/logo.a0902883a45658cc0f31.png'></img>
 </div> 
 <hr style={{backgroundColor:"#dab08b"}}></hr>
<div style={{height:"490px",width:"100%",backgroundColor:"#561d1f",display:"flex",flexDirection:"column ",alignItems:"center",marginTop:"50px"}}>
 
 
 
 <div style={{height:"50px",width:"80%",backgroundColor:"#561d1f",display:"flex",flex:"row"}}>
 <div className='icondivadminbar' >
  <i   class="fa fa-home ,divnaamset" aria-hidden="true"></i>
 </div>
<div className='divcontent'>
 <label onClick={()=>navigate("/adminbar")} style={{padding:"20px"}}>Main Dashboard</label>
 </div>
 </div>
 
 
 <div style={{height:"50px",width:"80%",backgroundColor:"#561d1f",display:"flex",flexDirection:"row"}}>
 <div className='icondivadminbar' >
  <i   class="fa fa-users ,divnaamset" aria-hidden="true"></i>
 </div>
<div  style={{height:"60px",width:"80%",fontSize:"17px",color:" #dab08b"}}>
 <label onClick={()=>setShow(!show)} style={{padding:"20px"}}>Products</label>
 
 </div>
 
 </div>
 
 <div style={{backgroundColor:"#561d1f",width:"60%",height:show===false?"100px":"0px",transition:"0.5s"}}><br></br>
 <i style={{fontSize:"20px",color:"#dab08b"}}  class="fa fa-plus " aria-hidden="true"></i>

  <label onClick={()=>navigate("/addproductadmin")} style={{fontSize:"17px",marginLeft:"15px",color:"#dab08b"}}>Add Product</label><br></br>
  <i style={{fontSize:"20px",color:"#dab08b",marginTop:"10px"}}  class="fa fa-keyboard-o" aria-hidden="true"></i>

  <label onClick={()=>navigate("/productlist")}  style={{fontSize:"17px",marginLeft:"10px",color:"#dab08b"}}>Product Details</label>
 </div>



 <div style={{height:"50px",width:"80%",backgroundColor:"#561d1f",display:"flex",flex:"row"}}>
 <div className='icondivadminbar' >
  <i   class="fa fa-users ,divnaamset" aria-hidden="true"></i>
 </div>
<div className='divcontent'>
 <label style={{padding:"20px"}}>Order</label>
 </div>
 </div>


 <div style={{height:"50px",width:"80%",backgroundColor:"#561d1f",display:"flex",flex:"row"}}>
 <div className='icondivadminbar' >
  <i   class="fa fa-users ,divnaamset" aria-hidden="true"></i>
 </div>
<div className='divcontent'>
 <label style={{padding:"20px"}}>Clients</label>
 </div>
 </div>


 <div style={{height:"50px",width:"80%",backgroundColor:"#561d1f",display:"flex",flex:"row"}}>
 <div className='icondivadminbar' >
  <i   class="fa fa-lock ,divnaamset" aria-hidden="true"></i>
 </div>
<div className='divcontent'>
 <label style={{padding:"20px"}}>Logout</label>
 </div>
 </div>

 <div style={{height:"50px",width:"80%",backgroundColor:"#561d1f",display:"flex",flex:"row"}}>
 <div className='icondivadminbar' >
  <i   class="fa fa-plus ,divnaamset" aria-hidden="true"></i>
 </div>
<div className='divcontent'>
 <label style={{padding:"20px"}}>Admin management</label>
 </div>
 </div>
 
  </div>
 </div>
    </div>
  )
}

export default Sidebar

import React from 'react'
import { useNavigate } from 'react-router-dom'

function Footer() {
   const navigate=useNavigate()
  return (
    <div>
        <div className='footermain'>
        <div className='divfooter'>
         <label style={{color:"#ffcf8b",fontWeight:"bold"}}>MEASUREMENT</label>
         <label className='line' onClick={()=>navigate("/sizechart")} style={{fontSize:"13px",marginTop:"20px",color:"#ffcf8b",}}>Size Chart</label> 
        </div>
        <div className='divfooter'>
           
            <label style={{color:"#ffcf8b",fontWeight:"bold"}}>ABOUT US</label>
        
            <label onClick={()=>navigate("/about")} className='line' style={{fontSize:"13px",marginTop:"20px",color:"#ffcf8b"}}>About us</label>
            <label className='line' style={{fontSize:"13px",marginTop:"5px",color:"#ffcf8b"}}>Contact us</label>
            <label onClick={()=>navigate("/career")} className='line' style={{fontSize:"13px",marginTop:"5px",color:"#ffcf8b"}}>Careers</label>
            <label className='line' style={{fontSize:"13px",marginTop:"5px",color:"#ffcf8b"}}>FlagShip Store</label>
            <label onClick={()=>navigate("/videocall")} className='line' style={{fontSize:"13px",marginTop:"5px",color:"#ffcf8b"}}>Video Call Appointment</label>
            
            
            <label style={{marginTop:"40px",color:"#ffcf8b",fontWeight:"bold"}}>POLICIES</label>
            <label onClick={()=>navigate("/termcondition")} className='line' style={{fontSize:"13px",marginTop:"20px",color:"#ffcf8b"}}>Terms & Conditions</label>
            <label onClick={()=>navigate("/policy")} className='line' style={{fontSize:"13px",marginTop:"5px",color:"#ffcf8b"}}>Shipping Policy</label>
            <label onClick={()=>navigate("/returnpolicy")} className='line' style={{fontSize:"13px",marginTop:"5px",color:"#ffcf8b"}}>Return Policy</label>
            <label onClick={()=>navigate("/FAQs")} className='line' style={{fontSize:"13px",marginTop:"5px",color:"#ffcf8b"}}>FAQs</label>
            <label onClick={()=>navigate("/customizationcharges")} className='line' style={{fontSize:"13px",marginTop:"5px",color:"#ffcf8b"}}>Customization Charges</label>
        </div>
        <div className='divfooter'>
            <label style={{color:"#ffcf8b",fontWeight:"bold"}}>MY ACCOUNT</label>
            <label onClick={()=>navigate("/login")} className='line'  style={{fontSize:"13px",marginTop:"20px",color:"#ffcf8b"}} >Login</label>
            <label onClick={()=>navigate("/cart")} className='line'  style={{fontSize:"13px",marginTop:"5px",color:"#ffcf8b",}} >Shopping Bag</label>
            <label onClick={()=>navigate("/wishlist")} className='line'  style={{fontSize:"13px",marginTop:"5px",color:"#ffcf8b",}} >Wish List</label>
            <label onClick={()=>navigate("/Myaccount")} className='line'  style={{fontSize:"13px",marginTop:"5px",color:"#ffcf8b",}} >Order History</label>
            <label onClick={()=>navigate("/myaccount")} className='line'  style={{fontSize:"13px",marginTop:"5px",color:"#ffcf8b",}} >Order Tracking</label>
    
        </div>
        <div className='divfooter'>
            <label style={{color:"#ffcf8b",fontWeight:"bold"}}>FOLLOW US</label>
            
            <div style={{marginTop:"20px",height:"40px",width:"100px",backgroundColor:"#561d1f",display:"flex",justifyContent:"space-evenly",justifyItems:"center",alignItems:"center"}}>
            <i style={{color:"#ffdaa9"}}  class="fa fa-facebook-official" aria-hidden="true"></i>
            <i style={{color:"#ffdaa9"}} class="fa fa-pinterest-square" aria-hidden="true"></i>
            <i style={{color:"#ffdaa9"}} class="fa fa-instagram" aria-hidden="true"></i>
            </div>
            <label style={{color:"#ffcf8b",marginTop:"20px"}}>GET IN TOUCH</label>
            <label style={{fontSize:"15px",marginTop:"30px",color:"#ffcf8b"}}>+919589128610</label>
            <label style={{marginTop:"40px",color:"#ffcf8b"}}>EMAIL US ON</label>
            <label style={{fontSize:"15px",marginTop:"30px",color:"#ffcf8b"}}>socially.ecomm@gmail.com</label>
   



        </div>


        </div>
      
    </div>
  )
}

export default Footer

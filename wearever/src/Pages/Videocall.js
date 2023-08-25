import React from 'react'
import Header from './Header'
import Footer from './Footer'
function Videocall() {
  return (
    <div>
      <Header></Header>
      <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",marginTop:"50px"}}>
      <div style={{height:"200px",width:"50%",backgroundColor:""}}>
      <label style={{fontSize:"35px",alignItems:"center",display:"flex",justifyContent:"center",fontWeight:"bold"}}>Video Call Appointment</label>

      <label style={{marginTop:"30px",display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>Book your video call appointment today at +91 9752929335
</label>
       
       
             </div>
             </div>
             
      
             
      <Footer></Footer>
    </div>
  )
}

export default Videocall

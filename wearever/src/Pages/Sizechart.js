import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Sizechart() {
 
  return (
    <div>
      
      <Header></Header>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-evenly",flexDirection:"column",height:"1000px"}}>
  
      <label style={{fontSize:"35px",}}>Size Chart</label>

       
             <img  style={{display:"flex",alignItems:"center",justifyContent:"center"}} src='https://wearevermore.in/static/media/chart.26a06c65c2a5852cb29b.jpg'></img>
             </div>
             
      <Footer></Footer>
    </div>
  )
}

export default Sizechart

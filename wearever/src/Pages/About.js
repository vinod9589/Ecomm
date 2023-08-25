import React from 'react'
import Header from './Header'
import Footer from './Footer'
function About() {
  return (
    <div>
      <Header></Header>
      <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",marginTop:"50px"}}>
    
      <div style={{height:"400px",width:"80%",}}>
      <label style={{fontSize:"35px",alignItems:"center",display:"flex",justifyContent:"center",fontWeight:"bold"}}>About Us</label>

      <label style={{marginTop:"70px"}}>Wear Evermore, the brand that houses one of the exclusive ranges of ethnic wear in Lehenga, Jumpsuits,
         and Sarees which makes it one of the most sought-after shopping destinations for women. 
         Wear Evermore stands for ethnicity but with a contemporary twist that helps the bride experience a fairy tale wedding. 
         Everything is crafted with an incredible range of fabrics and appliqué work. 
         The classic collections of its timeless designs and ensembles for every woman are versatile and aesthetically appealing.
</label>
        <label>The brand believes in making special memories even more precious so that every woman celebrates her occasion with full zing. 
          With interiors that match the brands' personality and courteous staff, shopping at Wear Evermore will indeed give every lady a wonderful shopping experience.
</label>

       
             </div>
             </div>
             
      
             
      <Footer></Footer>
      
    </div>
  )
}

export default About

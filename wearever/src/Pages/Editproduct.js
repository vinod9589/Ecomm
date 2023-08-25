import React from 'react'
import Sidebar from './Sidebar'
import Adminheader from './Adminheader'
function Editproduct() {
  return (
    <div>
      <div style={{height:"745px", width:"100%", backgroundColor:"red", display:"flex"}}>

<div style={{height:"745px", width:"20%", backgroundColor:"yellow"}}>

<Sidebar/>
</div>
<div style={{height:"1050px", width:"80%", backgroundColor:"#c1d2d1", display:"flex",flexDirection:"column"}}>
  <Adminheader/><br/>

   
  <div style={{height:"400px",width:"90%",marginLeft:"5%",display:"flex",justifyContent:"space-between"}}>
    <div style={{height:"400px",width:"60%",backgroundColor:"#c1d2d1",borderRadius:"10px"}}>
    <label style={{fontSize:"20px"}}>Product Info</label>
    <div style={{height:"350px",width:"90 %",display:"flex",flexDirection:"row",justifyContent:"space-between",backgroundColor:"white",borderRadius:"10px"}}>
    <div style={{height:"300px",width:"35%",marginTop:"5%",marginLeft:"5%"}}>
      <img style={{height:"300px",width:"100%"}} src='https://cdn.shopify.com/s/files/1/0535/5182/5079/products/Sbxsbds_8_360x.jpg?v=1658584944'></img>
    </div>
    <div style={{height:"350px",width:"55%",marginTop:"5%"}}>
      <label>
Title</label><br></br>
       

       <input style={{border:"0.5px solid grey",height:"45px",width:"90%",borderRadius:"10px"}} placeholder='Product Name/Title*'></input><br></br><br></br>
       <label>Category
</label>
<input style={{border:"1px solid black",height:"45px",width:"90%",borderRadius:"10px"}} placeholder='Product Name/Title*'></input><br></br><br></br>
<label>Description</label>

<textarea style={{border:"1px solid black",height:"50px",width:"90%",borderRadius:"10px"}}  placeholder='Description*'></textarea>


    </div>
    </div>

    </div>
    <div style={{height:"400px",width:"30%",backgroundColor:"#c1d2d1",borderRadius:"10px"}}>
      <label style={{fontSize:"20px"}}>Price</label>
      <div style={{height:"350px",width:"80%",backgroundColor:"white",margin:"0 5px 5px 25px",borderRadius:"10px"}}>

      <label style={{marginTop:"10px"}}>Price</label><br></br>
       

       <input style={{border:"1px solid black",height:"45px",width:"90%",borderRadius:"10px"}} placeholder='Product Name/Title*'></input><br></br><br></br>
       <label>Discount
</label>
<input style={{border:"1px solid black",height:"45px",width:"90%",borderRadius:"10px"}} placeholder='Discount'></input><br></br><br></br>
    

    <label>Total</label>
    <input style={{border:"1px solid black",height:"45px",width:"90%",borderRadius:"10px"}} placeholder='Total'></input><br></br><br></br>

      </div>
    </div>
    
  


    </div><br></br><br></br>

    <div style={{height:"400px",width:"90%",marginLeft:"5%",display:"flex",flexDirection:"row",justifyContent:"space-between",backgroundColor:"#c1d2d1"}}>
      
      <div style={{height:"400px",width:"60%",backgroundColor:"#c1d2d1",borderRadius:"10px"}}>
      <label style={{fontSize:"20px"}}>Product Inventory
</label>
      <div style={{height:"350px",width:"100%",backgroundColor:"white",borderRadius:"10px"}}>
       <div style={{height:"90px",width:"100%",display:"flex",justifyContent:"space-between"}}>
        <div style={{height:"90px",width:"90%",marginTop:"10px"}}>
          <label>Size</label><br></br>
          <input style={{width:"90%",height:"50px",borderRadius:"10px",border:"1px solid grey"}} placeholder='Size*'></input>
        </div>
        <div style={{height:"90px",backgroundColor:"white",width:"100%",marginTop:"10px"}}>
        <label>Quntity</label>
        <input style={{width:"90%",height:"50px",borderRadius:"10px",border:"1px solid grey"}} placeholder='Product Name/Title*'></input>

        </div>
        
        </div><br></br>
        <label>Category
</label><br></br>
        <input style={{height:"50px",width:"95%",borderRadius:"10px",border:"1px solid grey"}} placeholder='Product Name/Title*'></input>
        <label>Description</label><br></br>
        <textarea name="" id="" cols="75" rows="5"placeholder='Description*' style={{borderRadius:"10px"}} ></textarea>
        
      </div>

      </div>
      
      <div style={{height:"400px",width:"30%",backgroundColor:"#c1d2d1",borderRadius:"10px"}}>
      <label style={{fontSize:"20px"}}>Price</label>
      <div style={{height:"350px",width:"80%",margin:"5px 0 0 25px",backgroundColor:"white",borderRadius:"10px"}}>
      <label style={{marginTop:"10px"}}>Price</label><br></br>
       

       <input style={{border:"1px solid black",height:"45px",width:"90%",borderRadius:"10px"}} placeholder='Product Name/Title*'></input><br></br><br></br>
       <label>Discount
</label>
<input style={{border:"1px solid black",height:"45px",width:"90%",borderRadius:"10px"}} placeholder='Discount'></input><br></br><br></br>
    

    <label>Total</label>
    <input style={{border:"1px solid black",height:"45px",width:"90%",borderRadius:"10px"}} placeholder='Total'></input><br></br><br></br>

        
      </div>


      </div>
    </div>
    <div style={{height:"45px",width:"30%",marginLeft:"35%",marginTop:"20px"}}>
      <button className='adminbuttonsubmit' style={{height:"45px",width:"100%",border:"1px solid black",outline:"none",borderRadius:"10px",backgroundColor:"transparent"}}>Submit</button>
    </div>
    
    </div>
    </div>
    </div>
    

  )
}

export default Editproduct

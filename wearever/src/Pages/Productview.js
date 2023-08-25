import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
function Productview() {
  const list =localStorage.getItem("ProductData")
  const login =localStorage.getItem("check")

 const lgn= ()=>{
  if(login!=="okk"){
    navigate("/Login")
  }
 }

 const email=localStorage.getItem("useremail")
 
  const data =JSON.parse(list)
  const navigate=useNavigate()
  const[a,setA] = useState(0)

  const[productname, setproductname]=useState("")
  const[productbrand, setproductbrand]=useState("")
  const[productprice, setproductprice]=useState("")
  const[quantity, setquantity]=useState("")
  const[size, setsize]=useState("")
  const[image, setimage]=useState("")

  const postCartData=()=>{
    const item={
productname:data.productname,
email:localStorage.getItem("useremail"),
productbrand:data.productbrand,
productprice:data.productprice,
quantity:data.quantity,
size:data.size,
image:data.image,
    }
    axios.post("http://localhost:5001/api/cart", item)
  }


  const postWishlist=()=>{
    const item={
      productprice:data.productprice,
      image:data.image,
      email:email

    }
    axios.post("http://localhost:5001/api/wishlist",item)
  }

  
  return (
    <div>
      <Header></Header>
    <div style={{marginTop:"50px",height:"1300px",width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
        <div style={{marginLeft:"20px",height:"1200px",width:"60%"}}>
            <img style={{height:"1200px",width:"100%"}} src={data.image}></img>
        </div>
        <div style={{height:"1000px",width:"25%"}}>
            <label style={{color:"#561d1f",fontSize:"20px"}}>{data.productname}</label>< br/><br/>
            <label style={{color:"#561d1f",fontWeight:"bold"}}>{data.productbrand}</label><br></br><br/>
            <label style={{color:"#a69a27",fontWeight:"bold",fontSize:"20px"}}>Rs.{data.productprice}</label><br/><br/>
            <label style={{color:"#561d1f"}}>Size</label><br/><br/>
            <button onClick={()=>setA(0)} style={{backgroundColor: a===0?" #561d1f":"white",color:a===0?"#f5daa6":"black"}} className='buttonsize' >XS</button>
            <button onClick={()=>setA(1)} style={{backgroundColor: a===1?" #561d1f":"white",color:a===1?"#f5daa6":"black"}} className='buttonsize' >M</button>
            <button onClick={()=>setA(2)} style={{backgroundColor: a===2?" #561d1f":"white",color:a===2?"#f5daa6":"black"}} className='buttonsize' >L</button>
            <button onClick={()=>setA(3)} style={{backgroundColor: a===3?" #561d1f":"white",color:a===3?"#f5daa6":"black"}} className='buttonsize' >S</button>
            <button onClick={()=>setA(4)} style={{backgroundColor: a===4?" #561d1f":"white",color:a===4?"#f5daa6":"black"}} className='buttonsize' >XL</button><br/><br/>
            
            <i class="fa fa-globe" aria-hidden="true"></i>
        <label style={{color:"#561d1f",fontSize:"12px"}}>Worldwide Shipping</label><br></br><br></br>



        <button onClick={()=>{navigate("/Cart");postCartData();lgn()}} className='pressbutton' style={{height:"30px",width:"150px",backgroundColor:"#561d1f",color:"white",fontSize:"12px",border:"none"}}>ADD TO CART</button>
        <button onClick={()=>navigate("/login")} className='pressbutton' style={{marginLeft:"15px",height:"30px",width:"150px",backgroundColor:"#561d1f",color:"white",fontSize:"12px",border:"none"}} >BUY NOW</button><br></br><br></br>
        <button onClick={()=>{navigate("/wishlist");postWishlist()}} className='pressbutton' style={{height:"30px",width:"150px",backgroundColor:"#561d1f",color:"white",fontSize:"12px",border:"none"}} >ADD TO WISHLIST</button><br/><br/><br/>


        <label style={{fontSize:"12px"}} >🎖 Assured Quality</label><br></br><br/>
        <label style={{fontSize:"12px"}}>🛒 100% purchase protection</label><br></br><br/>
        <label style={{fontSize:"12px"}}>🚚 Free Shipping</label><br></br><br/>
        <label style={{fontSize:"12px"}}>🧵 Custom fitting</label><br></br><br/>
        <label style={{fontSize:"12px"}}>⭐ Exclusive Collection</label><br></br><br/>
        <label style={{fontSize:"12px"}} >Good Fabric</label><br></br>

            
        </div>
    </div>
    <Footer></Footer>
    
    </div>
  )
}

export default Productview

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
function Cart() {
  const navigate=useNavigate()
  useEffect(()=>getCartData())
  const email= localStorage.getItem("useremail")

  const [cartList, setCartList]=useState([])

  const getCartData=()=>{
    axios.get("http://localhost:5001/api/cart").then((res)=>setCartList(res.data.data.filter((i)=>i.email===email)))
  }

  const [quantity, setquantity]=useState(1)


  const deleteData=(x)=>{
    
    axios.delete("http://localhost:5001/api/cart/"+x).then(()=>getCartData())
  }

  

  return (
    
    <div>
        <Header/>
      <div style={{height:"80px",display:"flex",flexDirection:"column",alignItems:"center"}}>     
        <label style={{fontSize:"30px",padding:"5px"}}>Your Cart</label>
      <label style={{textDecoration:"underline"}}>Continue Shopping</label>
      </div><br></br>
      
      <div style={{width:"90%",marginLeft:"70px"}}>
      <table className='table'>
        <thead>
          <th style={{width:"40%"}}>Product</th>
          <th style={{}}>Price</th>
          <th style={{}}>Quantity</th>
          <th style={{}}>Total</th>
        </thead>
        <tbody>
          {cartList.map((i)=>
          <tr>
            <td>
             
              <div style={{height:"220px",width:"80%",display:"flex",flexDirection:"row"}}>
               
                <div style={{height:"120px",width:"35%"}}>
                  <img style={{height:"220px",width:"100%"}} src={i.image}></img>
                </div>
                <div style={{height:"220px",width:"65%",padding:"10px"}}>
                  <label style={{color:"#696358"}}>{i.productname}</label><br/>
                  <label style={{fontWeight:"bold"}}>{i.productbrand}</label><br/>
                  <label style={{color:"#696358"}}>Size : XL</label><br/>
                  <label onClick={()=>deleteData(i._id)} style={{color:"#696358",textDecoration:"underline"}}>Remove</label>
                </div>
              </div>
              
            </td>
          
            <td style={{fontWeight:"bold",fontSize:"15px"}}>Rs.{i.productprice*quantity}</td>
            <td>
              <button onClick={()=>setquantity(quantity-1)} style={{borderRadius:"80px",width:"30px",color:"#fcd6a7",border:"none",outline:"none"}}>-</button>
              {quantity}
              <button onClick={()=>setquantity(quantity+1)} style={{borderRadius:"80px",width:"30px",backgroundColor:"#561d1f",color:"#fcd6a7",border:"none"}}>+</button>
            </td>
            <td style={{fontWeight:"bold",fontSize:"15px",cursor:"pointer"}}>Rs.{i.productprice*quantity}</td>
            
          </tr>)}
          
        </tbody>

      </table>
      </div>
      
    <div/>
    <hr></hr>

    <div style={{height:"200px",width:"500px",marginLeft:"50%",display:"flex",flexDirection:"row"}}>
      <div style={{height:"200px",width:"200px"}}>
        <label>Subtotal:</label>
      </div>
    <div style={{height:"200px",width:"300px"}}>
    <label style={{fontWeight:"bold",fontSize:"15px",marginLeft:"80%"}}>Rs.89585</label>
    <label>Taxes and shipping calculated at checkout</label><br></br>

    <button onClick={()=>navigate("/Checkout")} style={{height:"50px",width:"150px",marginLeft:"50%",backgroundColor:"#000000",color:"white",border:"none"}}>CHECK OUT</button>
    </div>
  

    </div>
    <Footer/>
    </div>
  )
}

export default Cart

import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
function Myaccount() {

    const[show,setshow]=useState(false)
    const login =localStorage.getItem("check")
    const navigate=useNavigate()

    useEffect(()=>{
        if(login!=="okk"){
            navigate("/Login")
        }
    })
return (
   
    <div>
       <Header></Header>
       <label style={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"35px",fontWeight:"bold"}}>My Account</label>
      
       <div style={{width:"100%", textAlign:"center"}}>
        <label onClick={()=>{localStorage.removeItem("check");navigate("/Login")}}>Logout</label>

 </div>
       <div style={{marginLeft:"10%", width:"80%", display:"flex", flexDirection:"row-reverse",  justifyContent:"space-between" }}>
        
       <div style={{display:"flex", flexDirection:"column",}}>
       <span style={{}} >ACCOUNT DETAILS</span>
       <span style={{}} >{localStorage.getItem("firstname")}</span>
              <span style={{}} >Vijay nagar</span></div>
      

       <div/>
       {show===false?
       <div style={{width:"70%", display:"flex", flexDirection:"column",}} >
       <span style={{fontSize:"20px",cursor:"pointer"}}>ORDER HISTORY</span>
       <table  className="table">
        <thead>
            <th>Order</th>
            <th>Date</th>
            <th>Payment</th>
            <th>Fulfillment Status</th>
            <th>Total</th>
        </thead>
        <tbody>
            <tr>
                <td><button style={{borderRadius:"10px" }} onClick={()=>setshow(true)}>vinod</button></td>
                <td>5/4/2023	</td>
                <td>Pending</td>
                <td>Unfulfilled</td>
                <td>Rs. 2397</td>
                
                
                <td></td>
            </tr>
        </tbody>
       </table>
       </div>:

        <div  style={{width:"70%", display:"flex", flexDirection:"column",}} >
       <span style={{fontSize:"20px"}}>ORDER </span>
       <label>placed on -------</label>
       <table  className="table">
        <thead>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
        </thead>
        <tbody>
            <tr>
                <td>{localStorage.getItem("firstname")}</td>
                <td>799</td>
                <td>3</td>
                <td>Rs. 2397</td>
                
            </tr>
            <tr>
                <td>
                    <div>
                        <label>SubTotal</label><br/>
                        <label>Shipping</label>
                    </div>
                </td>
                <td></td>
                <td></td>
                <td>
                    <div>
                        <label>Rs. 2397</label><br/>
                        <label>Rs. 0</label>
                    </div>
                </td>
            </tr>
            <tr>
                <td>Total</td>
                <td></td>
                <td></td>
                <td>Rs. 2397</td>
            </tr>
        </tbody>
       </table>
       </div> }




       
    </div><Footer></Footer>

    </div>

  )
}

export default Myaccount

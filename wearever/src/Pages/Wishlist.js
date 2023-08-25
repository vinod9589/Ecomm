import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
function Wishlist() {
    useEffect(()=>getwishlist())

    const [wishlist, setWishlist]=useState([])

    const email=localStorage.getItem("useremail")
    
    const navigate=useNavigate()

    const getwishlist=()=>{
        axios.get("http://localhost:5001/api/wishlist").then((res)=>setWishlist(res.data.data.filter((i)=>i.email===email)))
    }

   const deleteData=(X)=>{
    axios.delete("http://localhost:5001/api/wishlist/"+X).then(()=>getwishlist())
   }
    return (
        <div>
            <Header/>
            <div style={{ minHeight: "600px", width: "100%", }}>
                <div style={{ height: "150px", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>
                    <label style={{ fontSize: "40px", fontWeight: "bold" }}>WishList</label>
                </div>
                <div  style={{ minHeight: "450px", width: "100%", display: "flex", flexWrap: "wrap",padding:'20px',justifyContent:'space-evenly' }}>
                {wishlist.map((i)=> 
                              
                    <div onClick={()=>navigate("/productview")} className='divbada' style={{ height: "450px", width: "300px" }}>
                        <img style={{ width: "100%", height: "90%" }} src={i.image}></img>
                        <div style={{width:'100%' ,height:"10%",display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                            <label style={{ fontWeight: "bold" }}>Rs.{i.productprice}</label>
                            <label onClick={()=>deleteData(i._id)} style={{ textDecoration: "underline", color: "#efe0b6" }}>Remove</label></div>
                            


                    </div>)}
                </div>

            </div>
            <Footer></Footer>

        </div>
    )
}

export default Wishlist

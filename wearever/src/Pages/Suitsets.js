import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Suitsets() {
  useEffect(()=>{getData()},[])
  const navigate=useNavigate("") 
  const[list,setList]=useState([])


  const getData=()=>{
    axios.get("http://localhost:5001/api/addproductadmin").then((res)=>setList(res.data.data.filter((i)=>i.catagery==="Suitsets")))
  }
  return (
    <div>
      <Header></Header>


      <div className='newarrivals'>
            <label style={{fontSize:"20px",color:"#543b29"}}>SUIT SETS</label>
        </div>
        <div className='itemdivmain'>
          {list.map((i)=>
            <div className='itemdiv divbada' onClick={()=>{navigate("/Productview");localStorage.setItem ("ProductData",JSON.stringify(i))}}>
            <img style={{height:"400px",width:"100%"}} src={i.image}></img>

                <label className='fontsize'>{i.productname}</label><br/>
                <label className='fontsize' style={{fontWeight:"bold"}} >Rs.{i.productprice}</label>
            </div>)}
            
        </div>

      <Footer></Footer>
    </div>
  )
}

export default Suitsets

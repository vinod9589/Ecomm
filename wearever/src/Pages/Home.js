import React, { useEffect, useState } from 'react'
import Carousel from 'react-grid-carousel'
import Footer from './Footer'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Home() {
  useEffect(()=>{getData()},[])
    const navigate=useNavigate("")
    const [list,setList]=useState([])
    
    const getData=()=>{
      axios.get("http://localhost:5001/api/addproductadmin").then((res)=>setList(res.data.data))
    }
  return (
    <div>
      <Header/>
        <Carousel cols={1} rows={1} gap={10} loop autoplay={1000}>
      <Carousel.Item>
        <img width="100%" src="https://cdn.shopify.com/s/files/1/0535/5182/5079/files/swish_ethereal_desktop_1512x.jpg?v=1674584495" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://cdn.shopify.com/s/files/1/0535/5182/5079/files/co-ord_banner_d_1512x.jpg?v=1675786364" />
      </Carousel.Item>
      
      </Carousel>




      <div className='newarrivals'>
            <label style={{fontSize:"20px",color:"#543b29"}}>NEW ARRIVALS</label>
        </div>
        <div className='itemdivmain'>
     {list.map((i)=>
            <div className='itemdiv divbada' onClick={()=>{navigate("/Productview");localStorage.setItem ("ProductData",JSON.stringify(i))}}>
                <img style={{height:"400px",width:"100%"}} src={i.image}></img>
                <label className='fontsize'>{i.productname}</label><br/>
                <label className='fontsize' style={{fontWeight:"bold"}}>Rs.{i.productprice}</label>
            </div>)}
        
    
        </div>
        <Footer></Footer>
      
    </div>
  )
}

export default Home

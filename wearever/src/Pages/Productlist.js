import React, { useState } from 'react'

import Sidebar from './Sidebar'
import Adminheader from './Adminheader'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Productlist() {
  const navigate=useNavigate()

  const[list,setList]=useState([])



  const getData=()=>{
    axios.get("http://localhost:5001/api/addproductadmin").then((res)=>setList(res.data.data))
  }
  return (
    <div>
          <div style={{height:"745px", width:"100%", backgroundColor:"red", display:"flex"}}>

<div style={{height:"745px", width:"20%", backgroundColor:"yellow"}}>

<Sidebar/>
</div>
<div style={{height:"800px", width:"80%", backgroundColor:"#c1d2d1", display:"flex",flexDirection:"column",}}>
  <Adminheader/><br/>


  <div style={{height:"500px",width:"90%",backgroundColor:"white",marginLeft:"5%"}}>


    <div style={{height:"100px",width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",paddingLeft:"5%", paddingRight:"5%"}}>
        <label >Product List</label>
        <input style={{width:"30%"}}  placeholder='Search'></input>
    </div>
    <table className='table table-bordered'>
        <thead>
            <th style={{color:"#cfb8a5"}}>s.no</th>
            <th style={{color:"#cfb8a5"}}>Product Name</th> 
            <th style={{color:"#cfb8a5"}}>Category</th>
            <th style={{color:"#cfb8a5"}}>Price</th>
            <th style={{color:"#cfb8a5"}}>Status</th>
            <th style={{color:"#cfb8a5"}}>Color</th>
            <th style={{color:"#cfb8a5"}}>Action</th>
            
        </thead>
        <tbody>
          
            <tr onClick={(i)=>getData()}>
                <td>1</td>
                <td><div style={{height:"100px",width:"100%",display:"flex",flexDirection:"row"}}>

                  <div style={{height:"100px",backgroundColor:"grey",width:"30%"}}>
                    <img style={{width:"100%", height:"100%"}} src='https://cdn.shopify.com/s/files/1/0535/5182/5079/products/46_0f4ee670-0585-4f68-a479-b8acf4f80551_900x.jpg?v=1676491159'></img>

                    
                    </div>  
                    <div style={{height:"100px",width:"60%", display:"flex", flexDirection:"column",marginLeft:"5%"}}>
                        <label>FORKEY
</label>
                        <label style={{color:"#daaf92"}}>Semi-stitched</label>
                        <label style={{color:"#daaf92"}}>Lehenga Choli</label>
                    </div>

                </div>
                </td>
                <td>Kurtis</td>
                <td>Rs.45</td>
                <td style={{color:"#ff4927", textAlign:"center"}}>In Stock	</td>
                <td>Red</td>
                <td>
               
               
               
                       <i onClick={()=>navigate("/editproduct")}  class="fa fa-pencil" aria-hidden="true"></i>

                        <i style={{marginLeft:"10px"}}  class="fa fa-trash" aria-hidden="true"></i>
                        

                    
                </td>
                


            </tr>
        </tbody>
    </table>
  </div>

    </div>
    </div>
    </div>
  )
}

export default Productlist

import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
function Create() {
  
  const [lastname,setListname]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [firstname,setFirstname]=useState("")
  const[mobilenumber,setMobilenumber]=useState("")
  const navigate=useNavigate()

  const postData=()=>{
    const item={
      lastname:lastname,
      email:email,
      password:password,
      firstname:firstname,
      mobilenumber:mobilenumber,
      
  }
  axios.post("http://localhost:5001/api/login",item).then(()=>{localStorage.setItem("firstname", firstname);localStorage.setItem("lastname", lastname)})
}
  return (
    <div>
      <Header></Header>
    <div className='createmain'>
      <div className='creatediv'>
        <label style={{marginLeft:"120px",fontSize:"30px",color:"#561d1f"}}>Create Account</label><br/><br/>
        <label  style={{color:"#561d1f",fontSize:"13px"}}>First Name</label><br/>
        
        <input onChange={(e)=>setFirstname(e.target.value)} style={{height:"35px",width:"460px",margin:"5px 0 20px 0",outline:"none"}}></input><br/>
        <label  style={{color:"#561d1f",fontSize:"13px"}}>Last Name</label><br></br>
        
        <input onChange={(e)=>setListname(e.target.value)} style={{height:"35px",width:"460px",margin:"5px 0 20px 0",outline:"none"}}></input><br/>
        <label  style={{color:"#561d1f",fontSize:"13px"}}>Email</label><br/>
        
        <input onChange={(e)=>setEmail(e.target.value)} style={{height:"35px",width:"460px",margin:"5px 0 20px 0",outline:"none"}}></input><br/>
        <label  style={{color:"#561d1f",fontSize:"13px"}}>Mobile Number</label>
        
        <input onChange={(e)=>setMobilenumber(e.target.value)} style={{height:"35px",width:"460px",margin:"5px 0 20px 0",outline:"none"}}></input>
        <label  style={{color:"#561d1f",fontSize:"13px"}}>Password</label><br/>
        
        <input onChange={(e)=>setPassword(e.target.value)} style={{height:"35px",width:"460px",margin:"5px 0 20px 0",outline:"none"}}></input>
        <button onClick={()=>{postData();navigate("/Login")}} className='createbutton'>CREATE</button>

      </div>
    </div>
    <Footer></Footer>
    </div>
  )
}

export default Create

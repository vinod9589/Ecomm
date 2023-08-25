import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'




function Login() {
  useEffect(()=>getData())
  const navigate=useNavigate()
  const[list,setList]=useState([])
  
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

  
  
  const getData=()=>{
    axios.get("http://localhost:5001/api/login").then((res)=>setList(res.data.data))
  }


  const logincheck=()=>{
    const newlist= list.filter((i)=>i.email===email)
    if(newlist.length>0){
      if(newlist[0].password===password){
        localStorage.setItem("check","okk")
        localStorage.setItem("useremail", email)
        
        navigate("/employee")
      }else{
        alert("Passwrod incorrect")
      }
    }else{
      alert("email incorrect")
    }
  }
 return (
    <div>
      <Header></Header>
       <div className='loginmain'>
        <div className='logindiv'>
            <label style={{fontSize:"30px",fontFamily:"monospace",color:"#561d1f",marginLeft:"190px"}}>Login</label><br></br><br></br>
            <label style={{color:"#561d1f"}}>Email</label><br></br>
            
            <input onChange={(e)=>setEmail(e.target.value)}   style={{height:"35px",width:"480px",marginTop:"10px",}}></input><br></br><br></br>
            <label style={{color:"#561d1f"}} >Password</label>
            
            <input onChange={(e)=>setPassword(e.target.value)}  style={{height:"35px",width:"480px",marginTop:"10px"}}></input><br></br><br/>
            <label style={{marginLeft:"180px",color:"#8b8683",fontSize:"13px"}}>Forgot your password ?</label><br/>
            
            <button onClick={()=>logincheck()}  className='sign'>SIGN IN</button><br/><br></br>
            <label onClick={()=>navigate("/Create")} style={{color:"#561d1f",fontFamily:"monospace",marginLeft:"200px",textDecoration:"underline",marginTop:"50px"}}>Create account</label>

        </div>
       </div>
       <Footer></Footer>

       
    </div>
  )
}

export default Login

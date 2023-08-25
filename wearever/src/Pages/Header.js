import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Header() {
  const navigate=useNavigate()



  const [showdiv, setShowdiv]=useState(false)
  const [searchshow,setSearchshow]=useState(true)

  const login =localStorage.getItem("check")

  const navi =()=>{
    if(login==="okk"){
      navigate("/Myaccount")
    }else{
      navigate("/Login")
    }
  }
  

    
  return (
    <div>

<div style={{height:"150px", width:"100%", backgroundColor:"#561d1f", display:"flex"}}>
<div onClick={()=>navigate("/")} className='head1'>
  <img  style={{width:"60%"}} src='https://wearevermore.in/static/media/logo.a0902883a45658cc0f31.png'/>
</div>
<div className='head2'></div>
<div className='head3'>
  <input style={{height:"30px",boxshadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",width:searchshow===false?"40%":"0px",transition:"0.5s",backgroundColor:"white",outline:"none",border:"none",visibility:searchshow===false?"":"hidden"}} placeholder='search'></input>
<i onClick={()=>setSearchshow(!searchshow)} className='fa fa-search icn'></i>
<i onClick={()=>navi()} className='fa fa-user icn'></i>
<i onClick={()=>navigate("/wishlist")} className='fa fa-heart icn'></i>
<i onClick={()=>navigate("/cart")} className='fa fa-shopping-bag icn'></i>
<i className='fa fa-bars icn1' onClick={()=>setShowdiv(!showdiv)}></i>


</div>
</div>


      <div className='subhead' >
        <label onClick={()=>navigate("/newarrival")} className='labelname' >NEW ARRIVAL</label>
        <label onClick={()=>navigate("/chikankari")} className='labelname' >CHIKANKARI</label>
        <label onClick={()=>navigate("/suitsets")} className='labelname' >SUIT SETS</label>
        <label onClick={()=>navigate("/kurtis")} className='labelname' >KURTIS</label>
        <label onClick={()=>navigate("/pastel")} className='labelname' >PASTEL</label>
      </div>



      <div className='subhead2' style={{height: showdiv===true?"250px":"0px", transition:"0.5s", overflow:"hidden"}}>
        <label className='labelname' >NEW ARRIVAL</label>
        <label className='labelname' >CHIKANKARI</label>
        <label className='labelname' >SUIT SETS</label>
        <label className='labelname' >KURTIS</label>
        <label className='labelname' >PASTEL</label>
      </div>
      <hr/>
      

      

      
      </div>
      
                
  )
}

export default Header

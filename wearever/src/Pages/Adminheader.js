import React from 'react'

function Adminheader() {
  return (
    <div>
         <div style={{height:"100px",width:"100%",display:"flex",flexDirection:"row",backgroundColor:"white"}}>
          <div style={{height:"100px",width:"60%",display:"flex",alignItems:"center"}}>
            <label style={{padding:"10px",fontSize:"20px",textDecoration:"underline",color:"#561d1f"}}>Dashboard</label>
          </div>
          <div style={{height:"100px",width:"40%",display:"flex",alignItems:"center", }}>
            <div style={{height:"55px",width:"85%",backgroundColor:"white",borderRadius:"50px",display:"flex",alignItems:"center",boxDecorationBreak:"clone",boxShadow:"1px 1px 3px black"}}>
              <input style={{height:"40px",width:"80%",backgroundColor:"white",borderRadius:"50px",margin:"10px",border:"1px solid black"}} placeholder='Search'></input>
           <div style={{height:"40px",width:"10%",backgroundColor:"black",margin:"10px",borderRadius:"50%",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
            <i style={{color:"#dab08b"}} class="fa fa-search"></i>
           </div>
            </div>
          </div>
          
          
          </div> 
    </div>
  )
}

export default Adminheader

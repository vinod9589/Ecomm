import React, { useState } from 'react'

function Checkout() {  
    const[a,setA]=useState(0)
    return (
    
    <div>
    <div style={{height:"1200px",width:"100%",display:"flex",flexDirection:"row"}} >
        <div style={{height:"900px",width:"100%",backgroundColor:"white",marginTop:"-25px",padding:"80px"}}>

            <label style={{fontSize:"30px",color:"#561d47"}}>WEAR EVERMORE</label><br/><br></br>
            <label style={{}}>Scheme No. 78</label><br/>
            <label style={{color:"#709edc",fontSize:"15px"}} >Cart</label>
            <label style={{padding:"5px",color:"#709edc",fontSize:"15px"}}>›</label>
            <label style={{padding:"5px",color:"#21303c",fontSize:"15px"}}>Information</label>
            <label style={{padding:"5px",color:"#709edc",fontSize:"15px"}}>›</label>
            <label style={{padding:"5px",color:"#709edc",fontSize:"15px"}}>Shipping</label>
            <label style={{padding:"5px",color:"#709edc",fontSize:"15px"}}>›</label>
            <label style={{padding:"5px",color:"#709edc",fontSize:"15px"}}>Payment</label><br/><br/>


            <label style={{color:"#21303c",fontSize:"18"}}>Contact information</label>
            <label style={{color:"#21303c",marginLeft:"190px",fontSize:"12px"}}>Already have an account?</label>
            <label style={{color:"#709edc",fontSize:"12px",padding:"5px",fontWeight:"bold"}} >Log in</label><br/>
            <input style={{height:"45px",width:"100%",marginTop:"10px",outline:"none",fontSize:"12px"}}  placeholder='gmail'></input><br/>
            
            <input type='checkbox' style={{height:"20px",border:"none",borderRadius:"3px",marginTop:"5px"}}></input>
            <label  style={{padding:"5px",color:"#21303c",fontSize:"15px"}}>Email me with news and offers</label><br></br><br/><br></br>
            <label style={{color:"#21303c"}}>Shipping address</label>
            {/* <input style={{height:"40px",width:"90%",marginTop:"10px",outline:"none"}}></input><br/> */}
            <select style={{height:"45px",width:"100%",marginTop:"10px",outline:"none"}}>
                <option selected disabled>Country</option>    
                <option>London</option>    
                <option>sri lanka</option>    
                <option>uk</option>    
                <option>englend</option>    
                <option>india</option>    
                <option></option>    
            </select>
            <input style={{height:"45px",width:"47%",marginTop:"40px",outline:"none",fontSize:"12px"}} placeholder='Name'></input>
            <input style={{height:"45px",width:"47%",marginTop:"40px",outline:"none",marginLeft:"12px",fontSize:"12px"}} placeholder='Lastname'></input>
            
            <input style={{height:"45px",width:"100%",marginTop:"25px",outline:"none",fontSize:"12px"}} placeholder='Address'></input><br/>
            <input style={{height:"45px",width:"100%",marginTop:"25px",outline:"none",fontSize:"12px"}} placeholder='Apartment,suite,etc.'></input><br/>
           
           
            <input style={{height:"45px",width:"30%",marginTop:"25px",outline:"none",fontSize:"12px"}} placeholder='City'></input>
            {/* <input style={{height:"35px",width:"28%",marginTop:"20px",outline:"none",fontSize:"10px",marginLeft:"8px"}} placeholder=''></input> */}
            <select style={{height:"50px",width:"30%",marginTop:"25px",outline:"none",fontSize:"12px",marginLeft:"23px"}} name="zone" id="Select1" required="" autocomplete="shipping address-level1" class="_b6uH RR8sg vYo81 RGaKd">
                
            <option selected disabled hidden="" disabled="" value="">&nbsp;  Country</option><option value="AN">Andaman and Nicobar Islands</option><option value="AP">Andhra Pradesh</option><option value="AR">Arunachal Pradesh</option><option value="AS">Assam</option><option value="BR">Bihar</option><option value="CH">Chandigarh</option><option value="CG">Chhattisgarh</option><option value="DN">Dadra and Nagar Haveli</option><option value="DD">Daman and Diu</option><option value="DL">Delhi</option><option value="GA">Goa</option><option value="GJ">Gujarat</option><option value="HR">Haryana</option><option value="HP">Himachal Pradesh</option><option value="JK">Jammu and Kashmir</option><option value="JH">Jharkhand</option><option value="KA">Karnataka</option><option value="KL">Kerala</option><option value="LA">Ladakh</option><option value="LD">Lakshadweep</option><option value="MP">Madhya Pradesh</option><option value="MH">Maharashtra</option><option value="MN">Manipur</option><option value="ML">Meghalaya</option><option value="MZ">Mizoram</option><option value="NL">Nagaland</option><option value="OR">Odisha</option><option value="PY">Puducherry</option><option value="PB">Punjab</option><option value="RJ">Rajasthan</option><option value="SK">Sikkim</option><option value="TN">Tamil Nadu</option><option value="TS">Telangana</option><option value="TR">Tripura</option><option value="UP">Uttar Pradesh</option><option value="UK">Uttarakhand</option><option value="WB">West Bengal</option></select>
            
            
            
            
            <input style={{height:"45px",width:"30%",marginTop:"25px",outline:"none",fontSize:"12px",marginLeft:"23px"}} placeholder='PIN Code'></input>
            <input style={{height:"45px",width:"100%",marginTop:"25px",outline:"none",fontSize:"12px"}} placeholder='Phone'></input><br/>

            {/* <button onClick={()=>setA(0)} className='emailtick' style={{height:"15px",border:"none",borderRadius:"3px",marginTop:"5px"}}></button> */}
            <input type='checkbox' style={{height:"20px",border:"none",borderRadius:"3px",marginTop:"5px"}}></input>
            <label  style={{padding:"5px",color:"#21303c",fontSize:"16px"}}>Email me with news and offers</label><br/>
           
           
            <div style={{height:"100px",width:"100%",display:"flex",alignItems:"center"}}>
            <label style={{color:"#709edc",fontSize:"15px",width:"250px"}} >« Return to Cart</label>
            <button style={{height:"60px",width:"60%",fontSize:"15px",marginLeft:"350px",outline:"none",color:"white",backgroundColor:"#1773b0",border:"none",borderRadius:"5px"}} >Continue to shipping</button>
            </div>
            <div style={{height:"600px",width:"100%",backgroundColor:"green"}}>

                <div style={{height:"250px",backgroundColor:"yellow",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly"}}>
                    
                
                </div>
                <div style={{height:"250px",backgroundColor:"blue",width:"100%"}}></div>
            </div>


 </div>
        
        
        
        
        
        
        
        <div style={{height:"1060px",width:"90%",marginTop:"50px", paddingLeft:"5%"}}>
        
        <div style={{height:"90px",width:"90%",display:"flex",flexDirection:"row"}}>
           <div style={{height:"90px",width:"20%",backgroundColor:"white"}}>
            <img style={{height:"100%",width:"70%",marginLeft:"15%"}} src='https://rukminim1.flixcart.com/image/400/400/l4ssfww0/kurta/h/u/0/xxl-mf22kaftan09pi-mialo-fashion-original-imagfm39vnzwuwt7.jpeg?q=70'></img>
            </div> 
            
            <div style={{height:"90px",width:"100px",marginLeft:"10px", display:"flex", flexDirection:"column", gap:"10%", justifyContent:"center"}}>
                <label style={{fontWeight:"bold",fontSize:"15px"}}>Filate</label>
                <label style={{color:"#c7a78c",fontSize:"15px"}}>XS</label>
                

            </div>
            <div style={{height:"90px",width:"100px",marginLeft:"240px",alignItems:"center",display:"flex",justifyContent:"space-evenly"}}>
                <label style={{width:"20%",color:"",fontSize:"15px",fontWeight:"bold",}}>₹499</label>
            </div>
            
        </div>
        <hr style={{width:"100%",marginLeft:"-20px",color:"#8b8b8b",marginTop:"30px"}}></hr>
        <br/>
        <input style={{height:"50px",width:"60%",outline:"none",fontSize:"10px",borderRadius:"2px",border:"0.5px solid grey",marginLeft:"25px"}} placeholder='Discount Code'></input>
    
        <button style={{height:"49px",width:"20%",outline:"none",fontSize:"12px",marginLeft:"20px",backgroundColor:"#808080",border:"1px solid grey"}}>Apply</button>
        <hr style={{width:"100%",marginLeft:"-20px",color:"#8b8b8b",marginTop:"30px"}}></hr>
        <div style={{height:"110px",width:"90%",display:"flex",flexDirection:"row",alignItems:"center",}}>
            <div  style={{height:"110px",width:"150px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly"}}>
                <label>Subtotal</label><br></br>
                <label>Shipping</label>
            </div>
            <div style={{height:"110px",width:"150px",marginLeft:"350px",display:"flex",flexDirection:"column",alignItems:"center"}}>

                <label style={{color:"#252c32",fontWeight:"bold",marginTop:"10px"}}>Rs.4237</label>
            </div>
        </div>
        <hr style={{width:"100%",marginLeft:"-20px",color:"#8b8b8b",marginTop:"30px"}}></hr>


        <label style={{padding:"30px", color:"#252c32",fontWeight:"bold",fontSize:"30px"}}>Total</label>
        <label style={{color:"#252c32",fontWeight:"bold",marginLeft:"50%",fontSize:"30px"}}>Rs.4237</label>


        

     </div>
    </div>
    </div>
  )
}

export default Checkout

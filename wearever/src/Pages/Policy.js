import React from 'react'
import Header from './Header'
import Footer from './Footer'
function Policy() {
  return (
    <div>
      <Header></Header>
      <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",marginTop:"50px"}}>
      <div style={{height:"700px",width:"80%",}}>
      <label style={{fontSize:"35px",alignItems:"center",display:"flex",justifyContent:"center",fontWeight:"bold"}}>Shipping Policy
</label>

      <label style={{marginTop:"70px",fontWeight:"bold"}}>SHIPPING METHODS AND COSTS</label><br></br>
      <label>For more information, please contact our customer care service at socially.ecomm@gmail.com or +91 97529 29335.
</label><br></br>
<label style={{marginTop:"50px",fontWeight:"bold"}}>IMPORTANT INFORMATION
</label><br></br>
<label>Order cut-off times are provided as guidelines only, and do not take into account possible delays caused by payment authorization. We aim to dispatch all orders within 10-15 days with the exception of sale periods where it may take up to 15 days. Estimated delivery times are to be used as a guide only and commence from the date of dispatch. We are not responsible for any delays caused by destination customs clearance processes. We are unable to redirect orders once items have been dispatched. All orders require a signature upon receipt.
</label>
<label style={{fontWeight:"bold"}}>FREE SHIPPING
</label><br></br>
<label>Free shipping is only applicable if the order value exceeds ₹ 15000.
</label><br></br>

<label style={{fontWeight:"bold"}}>INSURANCE
</label><br></br>
<label>Ware Evermore insures each purchase during the time it is in transit until it is delivered to you. We require a signature for any goods delivered, at which point responsibility for your purchased goods passes to you. If you have specified a recipient who is not you for delivery purposes (for example as a gift) then you accept that evidence of a signature by them (or at that delivery address) is evidence of delivery and fulfilment by Ware Evermore and transfer of responsibility in the same way.
</label>

<label style={{fontWeight:"bold"}}>TAXES & DUTIES
</label><br></br>
<label>For Indian customers, product prices displayed are inclusive of all taxes and duties.
</label>

       

       
             </div>
             </div>
             
      
             
      <Footer></Footer>
    </div>
  )
}

export default Policy

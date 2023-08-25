import React from 'react'
import {HashRouter,Routes,Route} from 'react-router-dom'
import Header from './Pages/Header'
import Home from './Pages/Home'
import Footer from './Pages/Footer'
import Create from './Pages/Create'
import Login from './Pages/Login'
import Productview from './Pages/Productview'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import Whishlist from './Pages/Wishlist'
import Adminbar from './Pages/Adminbar'
import Adminheader from './Pages/Adminheader'
import Sidebar from './Pages/Sidebar'
import Addproductadmin from './Pages/Addproductadmin'
import Myaccount from './Pages/Myaccount'
import Newarrival from "./Pages/Newarrival"
import Suitsets from './Pages/Suitsets'
import Kurtis from './Pages/Kurtis'
import Chikankari from './Pages/Chikankari'
import Pastel from './Pages/Pastel'
import Sizechart from './Pages/Sizechart'
import About     from './Pages/About'
import Career from "./Pages/Career"
import Videocall from "./Pages/Videocall"
import Termcondition from "./Pages/Termcondition"
import Policy from "./Pages/Policy"
import Returnpolicy from './Pages/Returnpolicy'
import FAQs from './Pages/FAQs'
import Customizationcharges from './Pages/Customizationcharges'
import Productlist from './Pages/Productlist'
import Editproduct from './Pages/Editproduct'

function App() {
  return (
    
   <HashRouter>
  
    <Routes>
      <Route path='/Header' element={<Header/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/footer' element={<Footer/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Productview' element={<Productview/>}></Route>
      <Route path='/Cart' element={<Cart/>}></Route>
      <Route path='/Checkout' element={<Checkout></Checkout>}></Route>
      <Route path="/Wishlist" element={<Whishlist></Whishlist>}></Route>
      <Route path="/Adminbar" element={<Adminbar/>}></Route>
      <Route path='/Adminheader' element={<Adminheader/>}></Route>
      <Route path='/Sidebar' element={<Sidebar/>}></Route>
      <Route path='/Addproductadmin' element={<Addproductadmin/>}></Route>
      <Route path='/Myaccount' element={<Myaccount></Myaccount>}></Route>
      <Route path="/Newarrival" element={<Newarrival></Newarrival>}></Route>
      <Route path='/Suitsets' element={<Suitsets></Suitsets>}></Route>
      <Route path='/Kurtis' element={<Kurtis></Kurtis>}></Route>
      <Route path='/Pastel' element={<Pastel></Pastel>}></Route>
      <Route path='/Chikankari' element={<Chikankari></Chikankari>}></Route>
      <Route path='/Sizechart' element={<Sizechart></Sizechart>}></Route>
      <Route path='/About' element={<About></About>}></Route>
      <Route path='/Career' element={<Career></Career>}></Route>
      <Route path='/Videocall' element={<Videocall></Videocall>}></Route>
      <Route path='/Termcondition' element={<Termcondition></Termcondition>}></Route>
      <Route path='/Policy' element={<Policy></Policy>}></Route>
      <Route path='/Returnpolicy' element={<Returnpolicy></Returnpolicy>}></Route>
      <Route path='/FAQs' element={<FAQs></FAQs>}></Route>
      <Route path='/Customizationcharges' element={<Customizationcharges></Customizationcharges>}></Route>
      <Route path='/Productlist' element={<Productlist></Productlist>}></Route>
      <Route path='/Editproduct' element={<Editproduct></Editproduct>}></Route>
      

      
    

    </Routes>
    
    
   </HashRouter>
  )
}

export default App

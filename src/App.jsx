import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {
  const [login, setLogin] = useState(false);
  return (
    <>
      {login ? <LoginPopup setLogin={setLogin} />:<></>}
    <div className='app mx-6 md:mx-28 font-outfit overflow-x-clip'>
        <Navbar setLogin={setLogin} />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/PlaceOrder" element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App


import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import OrdersPage from './pages/Order/Order'
import AccountPage from './pages/Account/Account'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import { useAuth } from './context/AuthContext'
import { Navigate } from 'react-router-dom'


const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/" />;

  return children;
};

const App = () => {
  
  return (
    <>
      
      <div className='app mx-6 md:mx-28 font-outfit'>
        <Navbar  />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/account" element={<PrivateRoute><AccountPage /></PrivateRoute>} />
          <Route path="/orders" element={<PrivateRoute><OrdersPage /></PrivateRoute>} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App


import React, { useEffect } from 'react'
import {useState} from 'react'

import {assets } from '../../assets/assets'

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  return (
    <div  className="navbar flex justify-between items-center py-3">
      <div className="navbar flex justify-between items-center scale-75 md:scale-100 py-2">
        <img className='logo' src={assets.logo} alt="logo" />
      </div>
      
      <div className="hidden lg:block">
      <ul className="navbar-menu flex md:gap-12 text-[#49557e] list-none texNamet-lg ">
        <li onClick={()=>setMenu("home")} className={menu=="home"?'border-b-2 border-red-500 cursor-pointer' :" cursor-pointer"}>Home</li>
        <li onClick={()=>setMenu("menu")}className={menu=="menu"?'border-b-2 border-red-500 cursor-pointer' :" cursor-pointer"}>Menu</li>
        <li onClick={()=>setMenu("mobile-app")}className={menu=="mobile-app"?'border-b-2 border-red-500 cursor-pointer' :" cursor-pointer"}>Mobile App</li>
        <li onClick={() => setMenu("contact-us")} className={menu == "contact-us" ? 'border-b-2 border-red-500 cursor-pointer' : " cursor-pointer"}>Contact Us</li>
        </ul>
      </div>

      <div className="navbar-right flex items-center justify-evenly gap-5">
        
        <div className="navbar-search-icon relative">
          <img src={assets.search_icon} alt="" />
        </div>
        
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot absolute min-w-[9px] h-[9px] bg-red-500 rounded-full top-[-8px] right-[-8px]"></div>
        </div>

        <button className="w-20 h-9 md:h-14 md:w-32  bg-transparent md:text-lg text-[#49557e] border-2 border-black px-2  rounded-full cursor-pointer transition duration-300 hover:bg-[#ededed]">Sign In</button>

      </div>

    </div>
  )
}

export default Navbar

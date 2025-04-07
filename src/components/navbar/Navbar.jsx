import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useAuth} from '../../context/AuthContext'
import {assets } from '../../assets/assets'
import LoginPopup from '../LoginPopup/LoginPopup'

const Navbar = () => {
  const {user} = useAuth();
  const [active, setActive] = useState('home');
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
    setActive('home');
  }

  const handleAuth = () => {
    setShowLoginPopup(true);
  }

  const handleScroll = () => {
    const sections = ['home', 'menu', 'mobile-app', 'contact-us'];
    const scrollPosition = window.scrollY;

    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight) {
          setActive(sectionId);
        }
      }
    });
  };

  const scrollToSection = (sectionId) => {
    setActive(sectionId);
    if (window.location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  useEffect(() => {
    const { state } = window.location;
    if (state && state.scrollTo) {
      const element = document.getElementById(state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActive(state.scrollTo);
      }
      // Clear the state
      window.history.replaceState({}, document.title);
    }
  }, []);

  

  return (
    <>
      <div className="navbar flex justify-between items-center py-3 overflow-x-clip">
        <div className="navbar flex justify-between items-center scale-75 md:scale-100 py-2">
          <button onClick={goHome} className="flex items-center gap-2">
          <img  className='logo' src={assets.logo} alt="logo" />
          </button>
        </div>
        
        <div className="hidden lg:block">
          <ul className="navbar-menu flex md:gap-12 text-[#49557e] list-none texNamet-lg ">
            <li onClick={()=>scrollToSection("home")} className={active =="home"?'border-b-2 border-red-500 cursor-pointer' :" cursor-pointer"}>Home</li>
            <li onClick={()=>scrollToSection("menu")} className={active =="menu"?'border-b-2 border-red-500 cursor-pointer' :" cursor-pointer"}>Menu</li>
            <li onClick={()=>scrollToSection("mobile-app")} className={active =="mobile-app"?'border-b-2 border-red-500 cursor-pointer' :" cursor-pointer"}>Mobile App</li>
            <li onClick={()=>scrollToSection("contact-us")} className={active =="contact-us"?'border-b-2 border-red-500 cursor-pointer' :" cursor-pointer"}>Contact Us</li>
          </ul>
        </div>

        <div className="navbar-right flex items-center justify-evenly gap-5">
          
          <div className="navbar-search-icon relative">
            <img src={assets.search_icon} alt="" />
          </div>
          
          <div className="navbar-search-icon">
            <img className="w-10 h-10 opacity-75" src="https://www.freeiconspng.com/uploads/red-shopping-basket-icon-29.jpg" alt="" />
            <div className="dot absolute min-w-[9px] h-[9px] bg-red-500 rounded-full top-[-8px] right-[-8px]"></div>
          </div>

          {user ? (
          <Link to="/account"><img className="w-10 h-10 opacity-75"src="https://png.pngtree.com/png-vector/20220813/ourmid/pngtree-user-flat-red-color-rounded-vector-icon-flat-personal-isolated-vector-png-image_19495794.png" alt="" /></Link>
        ) : (
          <button className=" border-gray-500 border-2 px-3 py-2 rounded-full p-5" onClick={handleAuth}>Sign In </button>
        )}
        </div>
      </div>

      {/* Login Popup */}
      {showLoginPopup && (
      <LoginPopup  setShowLoginPopup={setShowLoginPopup}/>
      )}
    </>
  )
}

export default Navbar

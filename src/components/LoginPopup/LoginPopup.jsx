import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const LoginPopup = ({setLogin}) => {
  const [currState,setCurrState]=useState("Sign Up")
  return (
    <div className='absolute z-10 w-[100%] h-[100%] bg-slate-800 grid bg-opacity-75'>
      <form className="place-self-center max-w-96  bg-white text-gray-800 flex flex-col gap-6 py-5 px-7 rounded-xl text-base" >
        <div className="flex justify-between items-center ">
          <h2 className='text-2xl font-semibold'>{currState}</h2>
          <img className='cursor-pointer w-4 ' onClick={()=>setLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="flex flex-col gap-5">
          {currState === "Login" ? <></> : <input className="outline-none border-2 px-3 py-2" type="text" placeholder='Your name' required />}
          <input className="outline-none border-2 px-3 py-2" type="email" placeholder='your email' required />
          <input className="outline-none border-2 px-3 py-2" type="password" placeholder='Password' required/>
        </div>
        <button className='bg-red-500 py-2 rounded-lg text-white'>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="cond flex items-start gap-3">
          <input className='mt-2' type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currState === "Login" ? <p>Create a new account ? <span className='bg-blue-500 text-white px-3 py-2 rounded-md text-sm cursor-pointer' onClick={()=>setCurrState("Sign Up")}>Click here</span></p> : <p>Already have an account ? <span className='bg-blue-500 text-white px-3 py-2 rounded-md text-sm cursor-pointer' onClick={()=>setCurrState("Login")}>Login here</span></p>}
      </form>
    </div>
  )
}

export default LoginPopup

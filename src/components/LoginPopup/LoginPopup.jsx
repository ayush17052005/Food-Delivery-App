import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { signup, signin } from '../../services/auth'
import { useAuth } from '../../context/AuthContext'

const LoginPopup = ({setShowLoginPopup}) => {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { setUser } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    
    try {
      let response
      if (isLogin) {
        response = await signin(email, password)
      } else {
        response = await signup(email, password)
      }
      setUser(response.user)
      setShowLoginPopup(false)
      setEmail("")
      setPassword("")
    } catch (err) {
      setError(err.message)
      console.error("Auth error:", err)
    }
  }

  return (
    <div className='fixed inset-0 z-10 flex items-center justify-center bg-slate-800 bg-opacity-75'>
      <form onSubmit={handleSubmit} className="max-w-96 bg-white text-gray-800 flex flex-col gap-6 py-5 px-7 rounded-xl text-base" >
        <div className="flex justify-between items-center ">
          <h2 className='text-2xl font-semibold'>{isLogin? "Log In": "Sign Up"}</h2>
          <img className='cursor-pointer w-4 ' onClick={()=>setShowLoginPopup(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="flex flex-col gap-5">
          {isLogin? <></> : <input className="outline-none border-2 px-3 py-2" type="text" placeholder='Your name' required />}
          <input className="outline-none border-2 px-3 py-2" type="email" placeholder='your email' onChange={(e) => setEmail(e.target.value)} required />
          <input className="outline-none border-2 px-3 py-2" type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <div className="cond flex items-start gap-3">
          <input className='mt-2' type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        <button type="submit" className='bg-red-500 py-2 rounded-lg text-white'>{!isLogin ? "Create Account" : "Login"}</button>
        
        {error && <p className="text-red-500 text-sm">{error}</p>}
        
        {isLogin ? <p>Create a new account ? <span className='bg-blue-500 text-white px-3 py-2 rounded-md text-sm cursor-pointer' onClick={()=>setIsLogin(false)}>Click here</span></p> : <p>Already have an account ? <span className='bg-blue-500 text-white px-3 py-2 rounded-md text-sm cursor-pointer' onClick={()=>setIsLogin("True")}>Login here</span></p>}
      </form>
    </div>
  )
}

export default LoginPopup

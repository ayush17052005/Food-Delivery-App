import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
   
    <div className="m-auto mt-[100px] text-center text-4xl  " id="mobile-app">
        <p>For Better Experience Download <br /> Tomato App</p>
        <div className="flex justify-center gap-5 mt-10">
            <img className='max-w-48 cursor-pointer hover:scale-105 hover:duration-500' src={assets.play_store} alt="" />
            <img className='max-w-48 cursor-pointer hover:scale-105 hover:duration-500' src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload
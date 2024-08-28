import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className="text-[#d9d9d9] bg-[#323232] overflow-hidden flex flex-col items-center gap-8 py-5 px-[8vw] pt-[80px] mt-10">

      <div className="w-[100%] flex flex-col lg:flex-row justify-between gap-[80px]">
          <div className="left md:w-[35%] flex flex-col items-start gap-5">
            
              <img src={assets.logo} alt="" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, tempora nostrum fuga dicta nihil beatae quis voluptas voluptatum in omnis impedit libero, inventore, doloribus repellat labore. Doloremque maxime autem quae magnam optio dolores cupiditate.</p>
              <div className="flex justify-between gap-5">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
              </div>
            
          
          </div>

        <div className="center flex flex-col items-start gap-5 cursor-pointer">
          <h2 className='text-2xl font-semibold'>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>delivery</li>
            <li>Privacy Policy</li>
          </ul>
          </div>
          
        <div className="right flex flex-col items-start gap-5 cursor-pointer">
            <h2 className='text-2xl font-semibold' >GET IN TOUCH</h2>
          <ul>
            <li>+91 9657-348-232</li>
            <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr className='w-[100%] h-[2px] bg-gray-400 border-none'/>
        <p className="">Copyright 2024 © tomato.com - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer

import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className="">
        <div className="left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, tempora nostrum fuga dicta nihil beatae quis voluptas voluptatum in omnis impedit libero, inventore, doloribus repellat labore. Doloremque maxime autem quae magnam optio dolores cupiditate.</p>
          <div className="">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="right">
            <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 9657-348-232</li>
            <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="">Copyright 2024 © tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer

import React from 'react'

import { menu_list } from '../../assets/assets.js'

const ExploreMenu = ({ category, setCategory }) => {
  
  return (
    <div className='flex flex-col gap-5'>
      <h1 className='text-slate-900 text-3xl font-medium'>Explore our Menu</h1>
      <p className='max-w-[60%] '>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className="flex justify-between items-center gap-10 text-center my-5 overflow-x-scroll no-scrollbar">
        {menu_list.map((item,index) => {
          return (
            <div onClick={()=>setCategory(prev=>prev==item.menu_name?"All":item.menu_name)}  key={index} className=" w-60">
              <img src={item.menu_image} alt="" className={category === item.menu_name ? "border-4 border-solid border-red-400 p-1 w-[10vw] min-w-20 cursor-pointer  rounded-full animate-clicked" : "w-[10vw] min-w-20 cursor-pointer "} />
              <p className='mt-3 text-slate-900 text-lg cursor-pointer'>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      
      <hr className='my-2 h-[2px] bg-[#e2e2e2] border-none '/>
    </div>
  )
}

export default ExploreMenu

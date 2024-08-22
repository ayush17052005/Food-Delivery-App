import React from 'react'
import {useContext} from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({ key, id, name, price, des, image }) => {
  
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className='rounded-t-2xl rounded-b-lg animate-fadeIn1 shadow-md shadow-zinc-300 ' key={id}>
      <div className='relative' >
        <img className="w-[100%] rounded-t-2xl" src={image} alt={name} />
        {!cartItems[id] ? <img className="max-w-28 absolute bottom-4 right-4 cursor-pointer rounded-[50%]" onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
          : <div className='flex gap-2  bg-zinc-100 rounded-full absolute bottom-4 right-4 items-center p-1'>
            <img onClick={()=>removeFromCart(id)}src={assets.remove_icon_red} alt="" />
            <p >{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)}src={assets.add_icon_green} alt="" />
          </div>
        }
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <p className='font-semibold text-xl'>{name}</p>
          <img className="w-20"src={assets.rating_starts} alt="" />
        </div>
        <p className='text-zinc-600 text-md'>{des}</p>
        <p className='text-red-500 text-2xl font-semibold mt-3'> ₹{price}</p>
      </div>
    </div>
  )
}

export default FoodItem

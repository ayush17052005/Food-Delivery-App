import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import { food_list } from '../../assets/assets'

const FoodDisplay = ({cat}) => {
  // const filterByCategory = (items, category) => {
  //   return items.filter(item => item.cat === cat);
  // };
  // const filteredFoodList = filterByCategory(food_list, cat);
  return (
    <div className=''>
      <h2 className='text-2xl font-semibold'>Top dishes near you</h2>
      <div className="grid grid-cols-4 mt-8 gap-8 gap-y-12 ">{food_list.map((item, index) => {
        if (cat === 'All' || cat==item.category) {
          return <FoodItem
          key={index}
          id={item._id}
          name={item.name}
          des={item.description}
          price={item.price}
          image={item.image}
        />
        }
        
      })}</div>
    </div>
  )
}

export default FoodDisplay

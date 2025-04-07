import React, { useContext, useState, useEffect } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import axios from 'axios';

const FoodDisplay = ({cat}) => {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [recipes, setRecipes] = useState([]);


    const fetchFoodItems = async () => {
      const API_KEY = 'b7f7aadabdab4e96acb2527551283e4e';
      try{
        setLoading(true);
        let queryTag = 'main course';
        
        // Map categories to API tags
        switch(cat) {
          case 'Breakfast':
            queryTag = 'breakfast';
            break;
          case 'Main Course':
            queryTag = 'main course';
            break;
          case 'Starter':
            queryTag = 'appetizer';
            break;
          case 'Dessert':
            queryTag = 'dessert';
            break;
          default:
            queryTag = '';
        }

        const response = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=24${queryTag ? `&tags=${queryTag}` : ''}`
        );
        
        const data = await response.json();
        
        const transformedData = data.recipes.map(recipe => ({
          _id: recipe.id,
          name: recipe.title,
          description: recipe.summary.replace(/<[^>]*>/g, '').substring(0, 60) + '...',
          price: Math.floor(Math.random() * 400) + 100,
          category: queryTag || recipe.dishTypes[0] || 'Other',
          image: `https://spoonacular.com/recipeImages/${recipe.id}-480x360.${recipe.imageType || 'jpg'}`,
        }));
        
        setFoodItems(transformedData);
      }
      catch (error){
        console.error(error.message);
      }

      finally{
        setLoading(false);
      }
    }

    useEffect(() => {
      fetchFoodItems();
    },[cat]);

    
  if (loading) return <div className="text-center py-8 text-xl">Loading delicious meals...</div>;
  if (error) return <div className="text-red-500 text-center py-8">Error: {error}</div>;

  // Filter items based on category
  const filteredItems = cat === 'All' 
    ? foodItems 
    : foodItems.filter(item => item.category.toLowerCase() === cat.toLowerCase());

  return (
    <div className=''>
      <h2 className='text-2xl font-semibold'>Top dishes near you</h2>
      <div className="md:grid md:grid-cols-4 mt-8 gap-8 gap-y-12">
        {filteredItems.map((item, index) => (
          <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            des={item.description}
            price={item.price}
            image={item.image}
           
          />
        ))}
      </div>
    </div>
  )
}

export default FoodDisplay

import { useParams } from 'react-router-dom'
import data from "../data.json"
import { useEffect, useState } from 'react';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe,setRecipe]=useState(null)
  useEffect(()=>{

    const foundRecipe= data.find((item) => item.id === parseInt(id))
    setRecipe(foundRecipe)
  },[id])
  
  if (!recipe) {
    return <div className='text-center text-red-400 mt-10'>Recipe not found</div>
  }

  return (
    <div className='max-w-xl mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title} 
        className='w-full h-40 object-cover rounded-md mb-2'
      />
      <p className='text-gray-500 mb-6'>{recipe.summary}</p>


      <div className='bg-gray-200 p-4 rounded-xl shadow-md'>
      <h2 className='text-xl font-semibold mb-2'>Ingredients</h2>

      <ul className='list-disc list-inside'>
        {recipe.ingredients.map((ingredient,index)=>(
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      </div>

      <div className='bg-gray-200 p-4 rounded-xl shadow-md mt-2'>
        <h2 className='text-xl font-semibold mb-2'>Instructions</h2>
      <ol className='list-decimal list-inside'>
      {recipe.instructions.map((instruction,index)=>(
          <li key={index}>{instruction}</li>
        ))}
      </ol>

      </div>

    </div>
  )
}

export default RecipeDetail

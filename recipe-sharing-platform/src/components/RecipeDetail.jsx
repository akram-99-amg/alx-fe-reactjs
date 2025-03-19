import { useParams } from 'react-router-dom'
import data from "../data.json"

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = data.find((item) => item.id === parseInt(id))
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
        <li> Ingredient 1</li>
        <li> Ingredient 2</li>
      </ul>
      </div>

      <div className='bg-gray-200 p-4 rounded-xl shadow-md mt-2'>
        <h2 className='text-xl font-semibold mb-2'>Instructions</h2>
      <ol className='list-decimal list-inside'>
        <li>Step 1</li>
        <li>Step 2</li>
      </ol>

      </div>

    </div>
  )
}

export default RecipeDetail

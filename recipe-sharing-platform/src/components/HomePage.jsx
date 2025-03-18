import React, { useEffect, useState } from 'react'
import data from "../data.json"
const HomePage = () => {
    const [recipes, setRecepies] = useState([])
    useEffect(() => {
        fetch("./src/data.json")
        .then(res => res.json())
        .then(data => setRecepies(data))
        .catch(err => console.log(err))
    },[])
    // useEffect(()=>{
    //     setRecepies(data)
    // },[])
    return (
        <div className='p-5'>
            <h1 className='text-2xl font-bold flex justify-center m-6'> Recipe List</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {recipes.map((recipe) => (
                    <div key={recipe.id} className='border rounded-lg p-2 shadow-sm hover:shadow-2xl'> 
                        <h1 className='text-xl font-bold'>{recipe.title}</h1>
                        <img src={recipe.image} 
                        alt={recipe.title} 
                        className='w-full h-30 object-cover rounded-md mb-3'
                        />

                        <p className='text-gray-500'>{recipe.summary}</p>
                    </div>

                ))}

            </div>
        </div>
    )
}

export default HomePage

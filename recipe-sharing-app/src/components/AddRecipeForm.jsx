import { useRecipeStore } from './recipeStore';
import React, { useState } from 'react'

const AddRecipeForm = () => {
    const addRecipe =useRecipeStore(state=>state.addRecipe);
    const[title,setTitel]=useState("");
    const[description,setDescription]=useState("");

    const handleSubmit=(event)=>{
        event.preventDefault();
        addRecipe({id:Date.now(), title, description});
        setTitel("");
        setDescription("");
    }

  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text"
      value={title}
      onChange={(e)=>setTitel(e.target.value)}
      placeholder="Title" />

      <textarea 
      value={description}
       onChange={(e)=>setDescription(e.target.value)}
       placeholder="Description"
       />

        <button type="submit">Add Recipe</button>

       
    </form>
  );
};

export default AddRecipeForm

import { useRecipeStore } from './recipeStore';
import React, { useState } from 'react'

const AddRecipeForm = () => {
    const addRecipe =useRecipeStore(state=>state.addRecipe);
    const deleteRecipe =useRecipeStore(state=>state.deleteRecipe)
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");

    const handleSubmit=(event)=>{
        event.preventDefault();
        addRecipe({id:Date.now(), title, description});
        setTitle("");
        setDescription("");
    }

  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text"
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      placeholder="Title" />

      <textarea 
      value={description}
       onChange={(e)=>setDescription(e.target.value)}
       placeholder="Description"
       />

        <button type="submit">Add Recipe</button>

        <button onClick={deleteRecipe}>Delete</button>

       
    </form>
  );
};

export default AddRecipeForm

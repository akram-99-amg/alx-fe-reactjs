import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from "./components/RecipeDetails";
import AppRouter from './components/router'


function App() {


  return (
    <>
      <AddRecipeForm />
      <RecipeList />
      

    </>
  )
}

export default App

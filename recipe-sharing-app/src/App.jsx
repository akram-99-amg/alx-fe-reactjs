import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from "./components/RecipeDetails";



function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="details/" element={<RecipeDetails />}>
          <Route path=":recipeId" element={<RecipeDetails />} />
        </Route>
        

      </Routes>
    </Router>
  )
}

export default App

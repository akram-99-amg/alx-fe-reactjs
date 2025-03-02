import { useRecipeStore } from './recipeStore';
import SearchBar from './SearchBar';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeList = () => {
  const filterRecipes = useRecipeStore(state => state.filterRecipes)
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes)
  const recipes = useRecipeStore(state => state.recipes)


  return (
    <div>
      <SearchBar />
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description} </p>
          <DeleteRecipeButton recipeId={recipe.id} />
        </div>
      ))}


    </div>
  )
}

export default RecipeList

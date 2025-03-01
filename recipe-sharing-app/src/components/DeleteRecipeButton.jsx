
import { useRecipeStore } from './recipeStore'

const DeleteRecipeButton = ({recipeId}) => {
    const deleteBtn = useRecipeStore(state=>state.deleteRecipe)
  return (
    <button onClick={()=>deleteBtn(recipeId)}>
      Delete
    </button>
  )
}

export default DeleteRecipeButton

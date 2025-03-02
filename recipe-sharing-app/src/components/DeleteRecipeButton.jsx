import { useNavigate } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'
import AddRecipeForm from './AddRecipeForm'


const DeleteRecipeButton = ({recipeId}) => {
    const navigate = useNavigate()
    const deleteBtn = useRecipeStore(state=>state.deleteRecipe)
    const handleSubmit=()=>{
        deleteBtn(recipeId)
        navigate("/AddRecipeForm")
    }
  return (
    <button onClick={handleSubmit}>
      Delete
    </button>
  )
}

export default DeleteRecipeButton

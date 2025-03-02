import { create } from "zustand"
import {createJSONStorage, persist} from "zustand/middleware"

export const useRecipeStore = create(persist(set => ({
    recipes: [],
    addRecipe: (newRecipe) => set(state => ({
        recipes: [...state.recipes, newRecipe]
    })),
    setRecipes: (recipes) => set({ recipes }),
    
    deleteRecipe: (id) => set(state => ({
        recipes: state.recipes.filter(newRecipe => newRecipe.id !== id)
    })),
    updateRecipe: (id, updatedRecipe) =>
        set((state) => ({
          recipes: state.recipes.map((recipe) =>
            recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
          ),
        })),
    


})),{
  name:"recipe",
  storage: createJSONStorage(()=>sessionStorage), 
})

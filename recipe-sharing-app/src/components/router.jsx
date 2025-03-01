import React from 'react'
import {createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from "react-router-dom"
import RecipeDetails from './RecipeDetails';
import App from '../App.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
       <Route path="/" element= {<React.lazy(()=>import("../App")) />} />
       <Route path="/details/:recipeId" element={<RecipeDetails />}  />
        </>
    )
    
);
export default function AppRouter(){
    return < RouterProvider router={router} />
}



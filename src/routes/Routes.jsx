import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ChefDetails from "../pages/Home/ChefDetails/ChefDetails";
import RecipesLayout from "../layouts/RecipesLayout";
import Recipes from "../pages/Recipes/Recipes";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/chef/:id',
                element: <ChefDetails></ChefDetails>,
                loader :({params})=> fetch(`http://localhost:5000/chef/${params.id}`)
            },

        ]
    },
    {
        path:'recipes',
        element: <RecipesLayout></RecipesLayout>,
        children: [
            {
             path:':id',
             element:<Recipes></Recipes>,
             loader:()=>fetch(`http://localhost:5000/recipes/${params.id}`)
            }
        ]
    }
])
export default router;
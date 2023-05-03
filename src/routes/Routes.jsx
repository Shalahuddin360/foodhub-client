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
                element: <ChefDetails></ChefDetails>

            },

        ]
    },
    {
        path:'recipes',
        element: <RecipesLayout></RecipesLayout>,
        children: [
            {
             path:':id',
             element:<Recipes></Recipes>
            }
        ]
    }
])
export default router;
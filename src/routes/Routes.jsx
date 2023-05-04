import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ChefDetails from "../pages/Home/ChefDetails/ChefDetails";
import Recipes from "../pages/Recipes/Recipes";
import Login from "../pages/Home/Login/Login";
import Register from "../pages/Home/Register/Register";
import PrivateRoutes from "./PrivateRoutes";


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
               path:'/login',
               element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/chef/:id',
                element: <PrivateRoutes><ChefDetails></ChefDetails></PrivateRoutes>,
                loader :({params})=> fetch(`http://localhost:5000/chef/${params.id}`)
            },
            {
                path:'/recipes/:id',
                element:<Recipes></Recipes>,
                loader:({params})=>fetch(`http://localhost:5000/recipes/${params.id}`)
                    
                
            }

        ]
    }

])
export default router;
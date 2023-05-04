import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ChefDetails from "../pages/Home/ChefDetails/ChefDetails";
import Recipes from "../pages/Recipes/Recipes";
import Login from "../pages/Home/Login/Login";
import Register from "../pages/Home/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Terms from "../pages/Shared/Terms/Terms";
import Blog from "../pages/Home/Home/Blog/Blog";
import ErrorPage from "../pages/Home/ErrorPage/ErrorPage";


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
                path:'/terms',
                element:<Terms></Terms>

            },
            {
              path:'/blog',
              element:<Blog></Blog>
            },
            {
                path: '/chef/:id',
                element: <PrivateRoutes><ChefDetails></ChefDetails></PrivateRoutes>,
                loader :({params})=> fetch(`https://the-foodhub-server-shalahuddin360.vercel.app/chef/${params.id}`)
            },
            {
                path:'/recipes/:id',
                element:<Recipes></Recipes>,
                loader:({params})=>fetch(`https://the-foodhub-server-shalahuddin360.vercel.app/recipes/${params.id}`)
                    
                
            },
            {
                path:'/*',
                element:<ErrorPage></ErrorPage>
            }

        ]
    }

])
export default router;
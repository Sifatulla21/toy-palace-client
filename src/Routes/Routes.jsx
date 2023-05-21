import { createBrowserRouter } from "react-router-dom";
import Error from "../Layouts/Error/Error";
import Main from "../Layouts/Main/Main";
import AddToy from "../Pages/AddToy/AddToy";
import AllToy from "../Pages/All Toy/AllToy";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/Login/SignUp/SignUp";
import MyToy from "../Pages/MyToy/MyToy";
import ViewDetails from "../Pages/Shared/ViewDetails/ViewDetails";
import UpdateToy from "../Pages/UpdateToy/UpdateToy.jsx";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
          {
            path: "/",
            element: <Home></Home>
          },
          {
            path: "login", 
            element:<Login></Login>
          },
          {
            path: "signup",
            element:<SignUp></SignUp>
          },
          {
            path: "alltoy",
            element:<AllToy></AllToy>
          },
          {
            path: "addtoy",
            element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
          },
          {
            path: "mytoy",
            element:<PrivateRoute><MyToy></MyToy></PrivateRoute>
          },
          {
            path: 'toy/:id',
            element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
            loader: ({params}) => fetch(`https://toy-place-server-rose.vercel.app/alltoys/${params.id}`)
          },
          {
            path: 'mytoy/:id',
            element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
            loader: ({params}) => fetch(`https://toy-place-server-rose.vercel.app/alltoys/${params.id}`)
          },

      ]
    },
    {
      path:'/',
      element:<Error></Error>,
      children:[
          {
              path:'*',
              element:<ErrorPage></ErrorPage>
          }   
      ]
  },
  ]);
  export default router;
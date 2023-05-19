import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import AddToy from "../Pages/AddToy/AddToy";
import AllToy from "../Pages/All Toy/AllToy";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/Login/SignUp/SignUp";
import MyToy from "../Pages/MyToy/MyToy";
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
          }

      ]
    },
  ]);
  export default router;
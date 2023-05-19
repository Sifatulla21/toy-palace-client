import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/Login/SignUp/SignUp";
import AddToy from "../Pages/Shared/AddToy/AddToy";
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
            path: "addtoy",
            element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
          }

      ]
    },
  ]);
  export default router;
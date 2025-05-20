
import { createBrowserRouter, RouterProvider } from "react-router";

import Login from "../pages/LoginPage";
import Home from "../pages/HomePage";
import Warehouse from "../pages/WarehousePage";
import AppLayout from "../components/NavbarComponent";



const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />, 
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'warehouse', element: <Warehouse /> }
    ]
  }
]);




export default router
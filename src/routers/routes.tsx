
import { createBrowserRouter, RouterProvider } from "react-router";

import Login from "../pages/LoginPage";
import Home from "../pages/HomePage";
import Warehouse from "../pages/WarehousePage";
// import Sidebar from "../components/Sidebar";
import Stock from "../pages/StockPage";
import Area from "../pages/AreaPage";
import Profile from "../pages/ProfilePage";
import AppLayout from "../layouts/AppLayout";



const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />, 
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'warehouse', element: <Warehouse /> },
      { path: 'stock', element: <Stock /> },
      { path: 'area', element: <Area /> },
      { path: 'profile', element: <Profile /> } 
    ]
  }
]);




export default router
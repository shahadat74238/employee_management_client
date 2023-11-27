import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/MainLayout/Layout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dahsboard/Dashboard/Dashboard";
import PrivetRouter from "./PrivetRouter";
import UserDashboard from "../Pages/Dahsboard/UserDashboard/UserDashboard";
import VerifyEmployee from "../Pages/Dahsboard/Dashboard/Admin/VerifyEmployee";
import AllUser from "../Pages/Dahsboard/Hr/AllUser";
import UserDetails from "../Pages/Dahsboard/Hr/UserDetails";
import AdminRoute from "./AdminRoute";
import HrRoute from "./HrRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivetRouter>
        <Dashboard />
      </PrivetRouter>
    ),
    children: [
      {
        index: true,
        element: <UserDashboard />,
      },
      {
        path: "user",
        element: (
          <HrRoute>
            <AllUser />
          </HrRoute>
        ),
      },
      {
        path: "user/:email",
        element: <UserDetails />,
      },
      {
        path: "verifyEmployee",
        element: (
          <AdminRoute>
            <VerifyEmployee />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;

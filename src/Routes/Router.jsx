import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/MainLayout/Layout";
import Home from "../Pages/Home/Home";
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
import PaymentHistory from "../Pages/Dahsboard/UserDashboard/PaymentHistory";
import WorkSheet from "../Pages/Dahsboard/UserDashboard/WorkSheet";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Contact from "../Pages/Contact/Contact";
import Progress from "../Pages/Dahsboard/Hr/Progress";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
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
    errorElement: <ErrorPage />,
    element: (
      <PrivetRouter>
        <Dashboard />
      </PrivetRouter>
    ),
    children: [
      {
        path: "profile",
        element: <UserDashboard />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />
      },
      {
        path: "workSheet",
        element: <WorkSheet />
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
        element: (
          <HrRoute>
            <UserDetails />
          </HrRoute>
        ),
      },
      {
        path: "progress",
        element: (
          <HrRoute>
            <Progress />
          </HrRoute>
        ),
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

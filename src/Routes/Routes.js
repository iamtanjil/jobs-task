import DashboardLayout from "../Layout/DashboardLayout";
import AddCustomer from "../Pages/Dashboard/AddCustomer/AddCustomer";
import AddProducts from "../Pages/Dashboard/AddProducts/AddProducts";
import AllCustomer from "../Pages/Dashboard/AllCustomer/AllCustomer";
import AllOrders from "../Pages/Dashboard/AllOrders/AllOrders";
import Overview from "../Pages/Dashboard/Overview/Overview";
import Products from "../Pages/Dashboard/Products/Products";
import DetailsProduct from "../Pages/DetailsProduct/DetailsProduct";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import UserProfile from "../Pages/UserProfile/UserProfile";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home");

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/user',
                element:<UserProfile></UserProfile>
            },
            {
                path:'/productdetails',
                element:<DetailsProduct></DetailsProduct>
            },
        ]
    },
    {
        path:'/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path:'/dashboard/overview',
                element: <Overview></Overview>
            },
            {
                path:'/dashboard/allcustomer',
                element: <AllCustomer></AllCustomer>
            },
            {
                path:'/dashboard/addcustomer',
                element: <AddCustomer></AddCustomer>
            },
            {
                path:'/dashboard/allproduct',
                element: <Products></Products>
            },
            {
                path:'/dashboard/addproducts',
                element: <AddProducts></AddProducts>
            },
            {
                path:'/dashboard/allorders',
                element: <AllOrders></AllOrders>
            },
        ]
    }
]);

export default router;
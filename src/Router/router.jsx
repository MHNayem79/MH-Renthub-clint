import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AvailableCars from "../Pages/AvailableCars/AvailableCars";
import AddCar from "../Pages/AddCar/AddCar";
import MyCars from "../Pages/MyCars/MyCars";
import MyBookings from "../Pages/MyBookings/MyBookings";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2>Page Not Found</h2>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'availableCar',
                element: <AvailableCars></AvailableCars>
            },
            {
                path: 'addCar',
                element: <PrivateRouter><AddCar></AddCar></PrivateRouter>
            },
            {
                path: 'myCars',
                element: <PrivateRouter><MyCars></MyCars></PrivateRouter>
            },
            {
                path: 'myBookings',
                element: <PrivateRouter><MyBookings></MyBookings></PrivateRouter>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
        ]
    },
]);

export default router
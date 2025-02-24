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
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CarDetails from "../Pages/CarDetails/CarDetails";
import Update from "../Pages/Update/Update";
import BookingUpdate from "../Pages/BookingUpdate/BookingUpdate";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'availableCars',
                element: <AvailableCars></AvailableCars>
            },
            {
                path: '/update/:id',
                element: <PrivateRouter><Update></Update></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/myCars/${params.id}`)
            },
            {
                path: 'carDetails/:id',
                element: <PrivateRouter><CarDetails></CarDetails></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/allCars/${params.id}`)
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
                path: 'bookingUpdate/:id',
                element: <PrivateRouter><BookingUpdate></BookingUpdate></PrivateRouter>,
                loader:({params})=>fetch(`http://localhost:5000/myBookings/${params.id}`)
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
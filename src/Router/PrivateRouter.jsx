import { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location);

    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    if (user) {
        return children
    }
    return (
        <Navigate to="/login" state={location?.pathname}></Navigate>
    );
};

export default PrivateRouter;
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";


const Login = () => {
    const { googleVerify, signInUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const location=useLocation();
    console.log('sign in ',location)
    const from=location.state||'/';
    const handleGoogleRegister = async () => {
        try {
            const user = await googleVerify()
            if (user) {
                navigate(from);
            }
        } catch (error) {
            console.error('google sign in error', error)
            if (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.message}`,
                });
            }

        }
    }
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                if (result.user.providerId) {
                    Swal.fire({
                        title: "Successfully Logged In!",
                        icon: "success",
                        draggable: true
                    });
                }
                navigate(from)
            })
            .catch(error => {
                console.log("ERROR", error.message)
                if (error) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `${error.message}`,
                    });
                }
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                placeholder="email"
                                name="email"
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                placeholder="password"
                                name="password"
                                className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <p className="mt-3">New To This Website?Please <Link className="text-orange-500">Register</Link></p>
                        </div>
                    </form>
                    <button onClick={handleGoogleRegister} className="btn btn-primary bg-amber-700">Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
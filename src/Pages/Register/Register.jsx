import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";


const Register = () => {
    const { createUser, googleVerify } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleGoogleRegister = () => {
        googleVerify()
    }
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password)
        if (password.length < 6) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password Must Be More than six Character!",
            });
            return
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                if (result.user.providerId) {
                    Swal.fire({
                        title: "Successfully Register!",
                        icon: "success",
                        draggable: true
                    });
                }
                navigate('/login')
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
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-[500px] max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"
                                placeholder="Name"
                                name="name"
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                placeholder="Email"
                                name="email"
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text"
                                placeholder="PhotoURL"
                                name="photo"
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
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                            <p className="mt-3">Already Have an Account Please <Link className="text-red-500" to="/login">Login</Link></p>
                        </div>
                    </form>
                    <button onClick={handleGoogleRegister} className="btn btn-primary bg-amber-700">Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;
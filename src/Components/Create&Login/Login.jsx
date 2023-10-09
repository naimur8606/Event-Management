import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import SocialLogin from "./SocialLogin";
import {  } from "react-icons/ai";

const Login = () => {
    const { userLogin, setUserLocation } = useContext(AuthContext)
    const location = useLocation()
    const State = location?.state
    setUserLocation(State)
    const navigate = useNavigate()
    const formSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        userLogin(email, password)
            .then(() => {
                toast.success('Login successfully !', {
                    position: "top-left",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
                navigate(location?.state ? State : "/")
            }
            )
            .catch(error => {
                toast.error(`${error}`, {
                    position: "top-left",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            })
    }
    return (
        <div className="w-11/12 mx-auto bg-[#fff]">
            <div className="grid grid-1 my-5">
                <div className="my-5">
                    <h2 className="text-center text-4xl font-semibold">Login Now</h2>
                </div>
                <div className="w-72 md:w-2/3 lg:w-1/2 2xl:w-1/3 mx-auto ">
                    <form onSubmit={formSubmit} className="w-full space-y-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-xl">Are you new here <Link to={"/createUser"} className="text-blue-600 underline">create</Link> account</p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
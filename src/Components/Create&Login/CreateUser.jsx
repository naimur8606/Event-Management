import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from "./SocialLogin";

const CreateUser = () => {
    const { createUser,userCurrentPath} = useContext(AuthContext);
    const navigate = useNavigate()
    const formSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if(!/^(?=.*[a-z])(?!.*[A-Z])(?=.*[0-9]).{6,}$/.test(password)){
            return toast.error("One digit, minimum 6 characters, no uppercase in the password !", {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",})
        }

        createUser(email, password)
            .then(()=>{
                toast.success('User created and Login successfully !', {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            navigate(userCurrentPath? userCurrentPath:"/")
        })
            .catch(error =>
                {toast.error(`'${error}`, {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })});
    };
    return (
        <div className="w-11/12 mx-auto bg-[#fff]">
            <div className="grid grid-1 my-5">
                <div className="my-5">
                    <h2 className="text-center text-4xl font-semibold">Create Now</h2>
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
                            <input type="text" name="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Create Account</button>
                        </div>
                    </form>
                    <p className="text-xl">Have already account <Link to={"/login"} className="text-blue-600 underline">Login</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default CreateUser;
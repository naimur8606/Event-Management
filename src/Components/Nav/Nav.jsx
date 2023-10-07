import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsPerson, BsPersonX } from "react-icons/bs";

const Nav = () => {
    const [menu, setMenu] = useState(true)
    const user = false
    const items = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#fd4520] border border-[#fd4520] px-3 py-1 rounded-md" : ""
                }>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/services"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#fd4520] border border-[#fd4520] px-3 py-1 rounded-md" : ""
                }>
                Services
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/album"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#fd4520] border border-[#fd4520] px-3 py-1 rounded-md" : ""
                }>
                Album
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#fd4520] border border-[#fd4520] px-3 py-1 rounded-md" : ""
                }>
                Contact
            </NavLink>
        </li>
        <li className="dropdown dropdown-end">
            <div tabIndex={0} className="text-black text-2xl flex items-center">
                {user ? <BsPerson></BsPerson> : <BsPersonX></BsPersonX>}<span className="text-base ml-1"> Dashboard</span>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-slate-50 rounded-box w-52">
                <li><a>Selected Product</a></li>
                <li><a>Register</a></li>
                <li><a>Login</a></li>
                <li><a>Logout</a></li>
            </ul>
        </li>
    </>
    return (
        <div className="w-full bg-slate-50">
            <div className="w-11/12 mx-auto flex justify-between items-center py-1">
            <img className="h-14 2xl:h-24" src="https://i.ibb.co/Jx20NcQ/06-10-2023-19-48-32-REC-removebg-preview.png" alt="" />

            <ul className={`absolute right-0 z-[1] duration-1000 bg-slate-50 p-5 lg:p-0 lg:static rounded-l-lg lg:flex lg:w-[50%] text-lg 2xl:text-2xl lg:justify-around ${menu === false ? "top-12 md:top-12" : "-top-60"}`}>
                {
                    items
                }
            </ul>
            <div onClick={() => setMenu(!menu)} className='text-3xl lg:hidden'>
                {menu === false ?
                    <AiOutlineClose></AiOutlineClose> :
                    <AiOutlineMenu></AiOutlineMenu>
                }
            </div>
        </div>
        </div>
    );
};

export default Nav;
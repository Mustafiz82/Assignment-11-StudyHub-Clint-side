import React, { useContext } from 'react';
import logo from "../../assets/logo.png"
import LoggedInUl from './LoggedInUl';
import { AuthContext } from '../../Context/Context';
import portrait from "../../assets/portrait.webp"
import { Link } from 'react-router-dom';


const LoggedInNav = () => {
    const {logOut ,user} = useContext(AuthContext)
    console.log(user);

    const handleLogout = () => {
        logOut()
        
    }

    
    return (
        <div>
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <LoggedInUl></LoggedInUl>
                    </ul>
                </div>
                <div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                <img src={logo} alt="" className="w-10 h-10 " />StudyHub
                </Link>
                
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <LoggedInUl></LoggedInUl>
                </ul>
            </div>
            <div  className="navbar-end space-x-5">
                <img  title={user.displayName} src={user.photoURL || portrait} alt="" className='h-10 w-10 rounded-full  '/>
                <button onClick={handleLogout} className="btn">Logout</button>
            </div>
        </div>
    </div>
    );
};

export default LoggedInNav;
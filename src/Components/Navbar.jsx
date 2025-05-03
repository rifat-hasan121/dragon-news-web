import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { ToastContainer } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    // console.log('user trying to log out');
    logOut()
      .then(() => {
        toast("You successfully log out");
        <ToastContainer/>
      })
      .catch((error) => {
        // console.log(error)
      });
  }
    return (
      <div className="flex flex-col lg:flex lg:flex-row justify-between items-center">
        <div className="empty"></div>
        <div className="nav lg:ml-48 space-x-4 text-accent">
          <NavLink data-aos="zoom-out" to="/">Home</NavLink>
          <NavLink data-aos="zoom-out" to="/about">About</NavLink>
          <NavLink data-aos="zoom-out" to="/Career">Career</NavLink>
        </div>
        <div className="hidden lg:flex items-center gap-3">
          <img className='w-12 h-12 rounded-full'
            src={`${
              user ? user.photoURL : "https://i.ibb.co.com/gZT56VyZ/user.png"
            }`}
            alt="user"
          />
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn btn-primary px-10 text-white"
            >
              Log Out
            </button>
          ) : (
            <Link to="/auth/login" className="btn btn-primary px-10 text-white">
              Login
            </Link>
          )}
        </div>
      </div>
    );
};

export default Navbar;
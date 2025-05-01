import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
      <div className="flex justify-between items-center">
        <div className="empty"></div>
        <div className="nav ml-48 space-x-4 text-accent">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/Career">Career</NavLink>
        </div>
        <div className="flex items-center gap-3">
        <img src="src/assets/user.png" alt="user" />
          <button className="btn btn-primary px-10 text-white">Login</button>
        </div>
      </div>
    );
};

export default Navbar;
import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const AuthLayouts = () => {
    return (
      <div className=" py-12 bg-base-200 min-h-screen">
        <header className="w-11/12 mx-auto">
          <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto'>
                <Outlet></Outlet>
            </main>
      </div>
    );
};

export default AuthLayouts;
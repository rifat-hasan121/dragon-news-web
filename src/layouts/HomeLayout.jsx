import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomeLayouts/LeftAside';
import RighAside from '../Components/HomeLayouts/RighAside';

const HomeLayout = () => {
    return (
      <div>
        <header>
          <Header></Header>
          <section className="w-11/12 mx-auto">
            <LatestNews></LatestNews>
          </section>
          <nav className="w-11/12 mx-auto">
            <Navbar></Navbar>
          </nav>
        </header>
        <main className="w-11/12 mx-auto gap-8 lg:grid lg:grid-cols-12 lg:mt-20">
          <aside className='col-span-3 hidden lg:flex'>
            <LeftAside></LeftAside>
          </aside>
          <section className="main-section lg:col-span-6">
            <Outlet></Outlet>
          </section>
          <aside className='col-span-3 hidden lg:flex'>
            <RighAside></RighAside>
          </aside>
        </main>
      </div>
    );
};

export default HomeLayout;
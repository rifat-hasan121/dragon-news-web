import React, { useEffect } from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomeLayouts/LeftAside';
import RighAside from '../Components/HomeLayouts/RighAside';
import Loading from '../Components/Loading';
import AOS from "aos";
import "aos/dist/aos.css";

const HomeLayout = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
   }) 
  }, [])
  

  const { state } = useNavigation();
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
          <aside className="col-span-3 hidden lg:flex">
            <LeftAside></LeftAside>
          </aside>
          <section className="main-section lg:col-span-6">
            {state == "loading" ? <Loading /> : <Outlet></Outlet>}
          </section>
          <aside className="col-span-3 hidden lg:flex">
            <RighAside></RighAside>
          </aside>
        </main>
      </div>
    );
};

export default HomeLayout;
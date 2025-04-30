import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <section className='left-section'></section>
            <section className='main-section'>
                <Outlet></Outlet>
            </section>
            <section className='right-section'></section>
        </div>
    );
};

export default HomeLayout;
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SocialMedia from '../components/SocialMedia';
import ScrollTop from '../components/ScrollTop';


const Main = () => {
    return (
        <div className='overflow-x-hidden'>
            <NavBar></NavBar>
            <div className='min-h-[calc(100vh-478.4px)] relative'>
                <Outlet></Outlet>
                <SocialMedia></SocialMedia>
                <ScrollTop></ScrollTop>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;
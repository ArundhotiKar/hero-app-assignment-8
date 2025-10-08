import React from 'react';
import Navber from '../../Components/Navber/Navber';
import { Outlet } from 'react-router';
import Footer from '../../Components/Fotter/Footer';

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
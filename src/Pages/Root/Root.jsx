import React from 'react';
import Navber from '../../Components/Navber/Navber';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../Components/Fotter/Footer';
import Loader from '../Loader/Loader';

const Root = () => {
    const navigation = useNavigation(); // ✅ add this
    return (
        <div>
            <Navber></Navber>
            {/* Show loader when navigating */}
            {navigation.state === "loading" && <Loader />}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
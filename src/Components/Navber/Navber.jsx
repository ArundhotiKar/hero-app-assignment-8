import React from 'react';

import logo from "../../assets/logo.png";
import cat from "../../assets/fi_2111432.png";
import { Link } from 'react-router';

const Navber = () => {

  const links = (
    <>
      <Link to="/" className={location.pathname === '/' ? 'font-bold text-purple-600' : 'text-gray-700'}><li className="m-2">Home</li></Link>
      <Link to="/apps" className={location.pathname === '/apps' ? 'font-bold text-purple-600' : 'text-gray-700'}><li className="m-2">Apps</li></Link>
      <Link to="/installation" className={location.pathname === '/installation' ? 'font-bold text-purple-600' : 'text-gray-700'}><li className="m-2">Installation</li></Link>

    </>
  );

  
  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Dropdown for mobile */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>

          {/* Dropdown menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        {/* Logo and brand name */}
        <a className="text-xl flex items-center">
          <img src={logo} alt="Logo" className="w-[40px] ml-10" />
          <h1 className="text-sm bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)] bg-clip-text text-transparent font-bold ml-1">
            HERO.IO
          </h1>
        </a>
      </div>

      {/* Navbar Center for large screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
        
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <a
          href="https://github.com/ArundhotiKar" 
          target="_blank" // opens in a new tab
          rel="noopener noreferrer" 
          className="btn flex items-center bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)] p-2 rounded-lg mr-10"
        >
          <img src={cat} alt="Cat" className="w-6 h-6 mr-2" />
          <h1 className="text-white text-xl">Contribute</h1>
        </a>
      </div>
    </div>
  );
};

export default Navber;

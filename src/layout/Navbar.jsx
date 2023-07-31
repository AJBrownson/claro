// import React from 'react'
import Logo from "../assets/Techfield Logo/Techfield Logo.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#EAFFF6] p-4">
      <div className="flex items-center justify-between">
        <div className="p-2">
          <img src={Logo} alt="Techfield Logo" className="w-17 h-17" />
        </div>

        <ul className="flex space-x-4">
          <NavLink to="./about">
            <li className="p-2 text-[#222237]">About</li>
          </NavLink>
          <li className="p-2 text-[#222237]">Products</li>
          <li className="p-2 text-[#222237]">Blog</li>
          <li className="p-2 text-[#35355f]">Contact</li>
        </ul>

        <div className="p-2">
          {/* <button className="px-4 py-2 bg-[#00EC85] text-[#222237] rounded-lg"> */}
          <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00EC85] bg-[#00EC85] transition duration-150 ease-in-out hover:bg- lg:text-xl lg:font-bold  rounded-xl text-[#222237] px-4 sm:px-10 border border-[#00EC85] py-2 sm:py-4 text-sm">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

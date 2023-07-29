// import React from 'react'
import Logo from '../assets/Techfield Logo/Techfield Logo.svg'



const Navbar = () => {
  return (
    <nav className="bg-[#EAFFF6] p-4">
      <div className="flex items-center justify-between">
        <div className="p-2">
          <img
            src={Logo}
            alt="Techfield Logo"
            className="w-17 h-17"
          />
        </div>

        <ul className="flex space-x-4 font-onest">
          <li className="p-2 text-[#222237]">About</li>
          <li className="p-2 text-[#222237]">Products</li>
          <li className="p-2 text-[#222237]">Blog</li>
          <li className="p-2 text-[#35355f]">Contact</li>
        </ul>

        <div className="p-2">
          <button className="px-4 py-2 bg-[#00EC85] text-[#222237] rounded-lg">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

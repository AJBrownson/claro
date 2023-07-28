// import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-[#EAFFF6] p-4">
      <div className="flex items-center justify-between">
        {/* Left part for the logo */}
        <div className="p-2">
          <img
            src="/path/to/your/logo.png"
            alt="Logo"
            className="w-12 h-12"
          />
        </div>

        <ul className="flex space-x-4 font-onest">
          <li className="p-2 text-[#222237]">About</li>
          <li className="p-2 text-[#222237]">Products</li>
          <li className="p-2 text-[#222237]">Blog</li>
          <li className="p-2 text-[#222237]">Contact</li>
        </ul>

        {/* Right part for a button */}
        <div className="p-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Button
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

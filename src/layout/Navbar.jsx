import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Logo from "../assets/Techfield Logo/Techfield Logo.svg";
import { NavLink } from "react-router-dom";



const Navbar = () => {
  const navigation = [
    { title: "About", link: "/about" },
    { title: "Products", link: "/products" },
    { title: "Blog", link: "/blog" },
    { title: "Contact", link: "/contact" },
  ];

  const location = useLocation();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className="bg-light-green p-4 md:px-16 xl:px-24">
      <div className="flex items-center justify-between max-w-[1240px] mx-auto">
        <div className="p-2">
          <NavLink to="/" onClick={handleClick}>
            <img src={Logo} alt="Techfield Logo" className="w-17 h-17 md:w-32 md:h-10 xl:w-full" />
          </NavLink>
        </div>

        {/* desktop menu */}
        <ul className="hidden md:flex space-x-4">
          {navigation.map((item) => (
            <li key={item.title} className="md:text-sm xl:text-lg p-2">
              <NavLink
                to={item.link}
                className={
                  item.link === location.pathname
                    ? "text-lime-green"
                    : "text-light-black"
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="p-2 hidden md:block">
          <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-green bg-lime-green lg:text-lg xl:text-xl font-bold rounded-xl text-light-black md:px-4 xl:px-10 border border-lime-green sm:py-4 md:py-2 xl:py-4 text-sm">
            Get Started
          </button>
        </div>

        {/* mobile menu */}
        <div onClick={handleClick} className="block md:hidden">
          {!click ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <div
          className={
            !click
              ? "fixed left-0 top-0 w-[80%] h-full text-center bg-white ease-in-out duration-500 md:hidden"
              : "fixed left-[-100%]"
          }
        >
          <div className="w-full m-4 p-2">
            <NavLink to="/">
              <img
                src={Logo}
                alt="Techfield Logo"
                className="w-17 h-17"
                onClick={handleClick}
              />
            </NavLink>
          </div>
          <ul className="p-4">
            {navigation.map((item) => (
              <li key={item.title} className="p-4">
                <NavLink
                  to={item.link}
                  className={
                    item.link === location.pathname
                      ? "text-lime-green"
                      : "text-light-black"
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="p-2">
            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-green bg-lime-green lg:text-xl lg:font-bold rounded-xl text-light-black px-4 border border-lime-green py-2 sm:py-4 text-sm">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

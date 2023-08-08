import { useLocation } from 'react-router-dom'
import Logo from "../assets/Techfield Logo/Techfield Logo.svg";
import { NavLink } from "react-router-dom";



const Navbar = () => {

  const navigation = [
    { title: 'About', link: '/about' },
    { title: 'Products', link: '/products' },
    { title: 'Blog', link: '/blog' },
    { title: 'Contact', link: '/contact' }
  ]

  const location = useLocation()

  return (
    <nav className="bg-light-green p-4">
      <div className="flex items-center justify-between">
        <div className="p-2">
          <NavLink to="/">
            <img src={Logo} alt="Techfield Logo" className="w-17 h-17" />
          </NavLink>
        </div>

          <ul className="flex space-x-4">
          {navigation.map((item) => (
            <li key={item.title} className="p-2">
              <NavLink to={item.link} className={item.link === location.pathname ? 'text-lime-green' : 'text-light-black'}>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul> 

        <div className="p-2">
          <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-green bg-lime-green transition duration-150 ease-in-out hover:bg- lg:text-xl lg:font-bold  rounded-xl text-light-black px-4 sm:px-10 border border-lime-green py-2 sm:py-4 text-sm">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

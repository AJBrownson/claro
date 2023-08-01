import Arr from "../assets/Icons/arrow-trend-up.svg";
import Logo from '../assets/Techfield Logo/Techfield Logo Alt.svg'
import FB from "../assets/Icons/facebook-circle.svg"
import Insta from "../assets/Icons/instagram.svg"
import Twitter from "../assets/Icons/twitter-outline.svg"


const Footer = () => {
  return (
    <>
      <main className="bg-[#222237] text-white p-36 pb-12">
        {/* top deck */}
        <div className="flex items-center justify-between pb-10 border-b-[1px] border-[#00EC85]">
          <div className="flex justify-between w-[38rem]">
            <h1 className="text-3xl font-bold">Unlock Global Opportunities</h1>
            <p>
              Expand your horizons and tap into a world of global opportunities.
            </p>
          </div>
          <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00EC85] bg-[#00EC85] transition duration-150 ease-in-out hover:bg- lg:text-xl lg:font-bold  rounded-xl text-[#222237] px-4 sm:px-10 border border-[#00EC85] py-2 sm:py-4 text-sm">
            <span className="flex items-center justify-between">
              Get Started
              <img src={Arr} alt="" className="pl-2" />
            </span>
          </button>
        </div>

        {/* middle deck */}
        <div className="flex items-center justify-between mt-16 pb-16 border-b-[1px] border-[#00EC85]">
          <div className="flex flex-col pb-20 w-[20rem]">
            <img src={Logo} alt="" className="w-64 mb-6" />
            <p className="mb-6">
              Expand your horizons and tap into a world of global opportunities.
            </p>
            <span className="flex justify-between w-[12rem]">
            <img src={FB} alt="" className="w-10 h-10" />
            <img src={Insta} alt="" className="w-10 h-10" />
            <img src={Twitter} alt="" className="w-10 h-10" />
            </span>
          </div>
          <div className="grid grid-cols-3 grid-rows-4 gap-2 h-72 w-[45%]">
            <p className="text-2xl font-bold mb-10">Product</p>
            <p className="text-2xl font-bold mb-10">Company</p>
            <p className="text-2xl font-bold mb-10">Others</p>
            <p>Accelerate</p>
            <p>Home</p>
            <p>Events</p>
            <p>Raise</p>
            <p>About</p>
            <p>Resources</p>
            <p>Normadic</p>
            <p>Contact</p>
            <p>Partnership</p>
            <p>Match</p>
            <p>Blog</p>
            <p>Success Stories</p>
          </div>
        </div>

        {/* lower deck */}
        <div className="flex items-center justify-between mt-16">
          <p>&copy; All rights reserved by <span className="text-[#00EC85]">Techfield</span></p>
          <p>Designed and Developed by <span className="text-[#00EC85]">Oniontabs</span></p>
        </div>
      </main>
    </>
  );
};

export default Footer;

import Arr from "../assets/Icons/arrow-trend-up.svg";
import Logo from '../assets/Techfield Logo/Techfield Logo Alt.svg'
import FB from "../assets/Icons/facebook-circle.svg"
import Insta from "../assets/Icons/instagram.svg"
import Twitter from "../assets/Icons/twitter-outline.svg"


const Footer = () => {
  return (
    <>
      <main className="bg-light-black text-white px-5 md:px-10 md:p-36 md:pb-12">
        {/* top deck */}
        <div className="flex flex-col pt-20 md:pt-0 md:flex-row md:items-center md:justify-between pb-10 border-b-[1px] border-lime-green">
          <div className="flex flex-col md:flex-row justify-between ">
            <h1 className="text-3xl md:text-xl font-bold">Unlock Global Opportunities</h1>
            <p className="md:text-sm">
              Expand your horizons and tap into a world of global opportunities.
            </p>
          </div>

          {/* mobile button */}
          <div className="mt-5 md:hidden">
            <button className="focus:outline-none px-5 py-3 bg-lime-green text-sm lg:text-xl font-bold rounded-xl text-light-black border border-lime-green">
            <span className="flex items-center justify-between">
              Get Started
              <img src={Arr} alt="" className="pl-2" />
            </span>
            </button>
          </div>

          <button className="hidden md:block focus:outline-none bg-lime-green lg:text-xl font-bold rounded-xl text-light-black px-4 sm:px-10 border border-lime-green py-2 sm:py-4 md:py-3 text-sm md:text-xs">
            <span className="flex items-center justify-between">
              Get Started
              <img src={Arr} alt="" className="pl-2" />
            </span>
          </button>
        </div>

        {/* middle deck */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-16 pb-10 md:pb-16 border-b-[1px] border-lime-green">
          <div className="flex flex-col px-5 md:px-0 pb-20 w-[20rem]">
            <img src={Logo} alt="" className="w-48 md:w-52 mb-6" />
            <p className="mb-6 md:text-sm">
              Expand your horizons and tap into a world of global opportunities.
            </p>
            <span className="flex justify-between md:w-[12rem]">
            <img src={FB} alt="" className="w-10 md:w-8 " />
            <img src={Insta} alt="" className="w-10 md:w-8 " />
            <img src={Twitter} alt="" className="w-10 md:w-8 " />
            </span>
          </div>
          
          {/* mobile view */}
          <div className="md:hidden">
            <div className="text-center mb-10">
              <h1 className='text-2xl font-bold mb-5'>Product</h1>
              <p>Accelerate</p>
              <p>Raise</p>
              <p>Normadic</p>
              <p>Match</p>
            </div>

            <div className="text-center mb-10">
              <h1 className='text-2xl font-bold mb-5'>Company</h1>
              <p>Home</p>
              <p>About</p>
              <p>Contact</p>
              <p>Blog</p>
            </div>

            <div className="text-center">
              <h1 className='text-2xl font-bold mb-5'>Others</h1>
              <p>Events</p>
              <p>Resources</p>
              <p>Partnership</p>
              <p>Success Stories</p>
            </div>
          </div>
          
          <div className="hidden md:grid grid-cols-3 grid-rows-4 gap-4 h-72 w-[45%]">
            <p className="md:text-xl font-bold mb-10">Product</p>
            <p className="md:text-xl font-bold mb-10">Company</p>
            <p className="md:text-xl font-bold mb-10">Others</p>
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
        <div className="flex flex-col text-sm md:text-base pb-4 md:pb-0 text-center md:flex-row md:items-center md:justify-between mt-10 md:mt-16">
          <p className="mb-2 md:mb-0">&copy; All rights reserved by <span className="text-lime-green font-bold">Techfield</span></p>
          <p>Designed and Developed by <span className="text-lime-green font-bold">Oniontabs</span></p>
        </div>
      </main>
    </>
  );
};

export default Footer;

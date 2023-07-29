// import React from 'react'
import HeroImage from '../assets/Images/Hero Image.png'



const Home = () => {
  return (
    <>
    <main>
      <div className="bg-cover bg-center bg-[#EAFFF6] h-screen">
        <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 mt-7 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-[#222237] font-black leading-7 md:leading-10">
            Unlocking Global Venture Opportunities for Underserved Early-Stage African Founders
            </h1>
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
            We connect underserved early-stage founders, innovators, and 
            talents to unlimited venture support and resources to accelerate growth.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00EC85] bg-[#00EC85] transition duration-150 ease-in-out hover:bg- lg:text-xl lg:font-bold  rounded text-[#222237] px-4 sm:px-10 border border-[#00EC85] py-2 sm:py-4 text-sm">
              Get Started
            </button>
            <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[00EC85] bg-transparent transition duration-150 ease-in-out hover:border-[#00EC85] lg:text-xl lg:font-bold  hover:text-[#00EC85] rounded border border-[#00EC85] text-[#222237] px-4 sm:px-10 py-2 sm:py-4 text-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className='container mx-auto flex justify-center'>
        <img src={HeroImage} alt='' className='w-4/5'/>
      </div>
      </main>
    </>
  );
};

export default Home;

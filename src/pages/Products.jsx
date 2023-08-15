// import React from 'react'
import BG from "../assets/Images/Background Graphic Element.svg";
import Img1 from "../assets/Companies Logos/62ea4e159b98557bdd40b938_Company logo.svg";
import Img2 from "../assets/Companies Logos/62ea4e159c9dd47ae626cb4e_Company logo-2.svg";
import Img3 from "../assets/Companies Logos/62ea4e159d1225438feb960b_Company logo-1.svg";
import Accelerate from "../assets/Images/Accelerate.png";
import Raise from "../assets/Images/Raise.png";
import Normadic from "../assets/Images/Normadic.png";
import Cofounder from "../assets/Images/Cofounder Match.png";
import Arrow from "../assets/Icons/arrow-trend-up.svg";
import ArrowGreen from "../assets/Icons/arrow-trend-up Green.svg";



const Products = () => {
  return (
    <>
      <main>
        <div className="bg-light-green md:h-screen md:relative">
          <div className="hidden md:absolute md:top-[1.8rem] md:left-0 md:flex">
            <img src={BG} alt="" />
          </div>
          <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="text-light-black text-center w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 mt-3 sm:mb-10">
              <h1 className="text-2xl font-semibold md:text-3xl md:leading-tight">
                Raise the capital you need to fuel innovation, scale your
                business, and turn your ideas into reality.
              </h1>
              <p className="mt-3 font-normal text-sm md:text-xs md:mx-10">
                Discover products to help you grow and scale your startup.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <button className="focus:outline-none bg-lime-green lg:text-xl font-bold rounded-xl text-light-black px-4 sm:px-10 border border-lime-green py-2 sm:py-4 text-sm">
                <span className="flex items-center">
                  Get Started
                  <img src={Arrow} alt="" className="pl-3" />
                </span>
              </button>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-center">
              <h1 className="text-xl md:text-2xl font-bold">
                Trusted by amazing startups
              </h1>
            </div>
            <div className="bg-light-green flex justify-between px-5 md:px-48">
              <img src={Img1} alt="" className="w-20 h-20 md:w-24" />
              <img src={Img3} alt="" className="w-20 h-20 md:w-24" />
              <img src={Img2} alt="" className="w-20 h-20 md:w-24" />
            </div>
          </div>
        </div>

        {/* second section */}
        <div className="container mt-10 md:mt-20 md:px-8">
          <div className="text-center mb-10 px-5 md:px-0">
            <h1 className="text-xl md:text-2xl font-bold md:mx-36">Great products tailored specifically for African Founders</h1>
          </div>

          {/* div for the cards */}
          <div className="flex flex-col px-5">

            <div className="md:w-96 text-white flex flex-col-reverse md:flex-row md:justify-between bg-light-black rounded-3xl mb-20 md:mb-48">
              <div className="p-4 md:p-0">
                <h1 className="text-3xl md:text-2xl font-bold mb-3">Accelerate</h1>
                <p className="text-sm mb-5 md:mb-24">
                  Unlock your startup&apos;s full potential with our
                  comprehensive accelerator program. Benefit from expert
                  guidance, valuable resources, and a network of industry
                  leaders to propel your growth and success
                </p>
                <button className="focus:outline-none bg-lime-green lg:text-xl font-bold rounded-xl text-light-black px-4 sm:px-10 border border-lime-green py-2 sm:py-4 text-sm">
                  <span className="flex items-center">
                    Get Started
                    <img src={Arrow} alt="" className="pl-3" />
                  </span>
                </button>
              </div>
              <img
                src={Accelerate}
                alt=""
                className="rounded-3xl"
              />
            </div>
{/* 
            <div className="md:w-[70rem] flex flex-col-reverse md:flex-row md:justify-between bg-lime-green rounded-3xl mb-20 md:mb-48">
              <div className="p-4 md:p-16 md:w-[30rem]">
                <h1 className="text-3xl font-bold mb-3">Raise</h1>
                <p className="text-sm md:text-base mb-5 md:mb-24">
                  Connect with a vast network of global investors, build
                  valuable relationships, and raise the capital you need to take
                  your startup to new heights. Discover a world of funding
                  opportunities with Techfield
                </p>
                <button className="focus:outline-none bg-light-black lg:text-xl font-bold rounded-xl text-lime-green px-4 sm:px-10 border border-light-black py-2 sm:py-4 text-sm">
                  <span className="flex items-center">
                    Get Started
                    <img src={ArrowGreen} alt="" className="pl-3" />
                  </span>
                </button>
              </div>
              <img
                src={Raise}
                alt=""
                className="md:h-[29rem] md:w-[28rem] object-cover rounded-3xl"
              />
            </div>

            <div className="md:w-[70rem] text-white flex flex-col-reverse md:flex-row md:justify-between bg-light-black rounded-3xl mb-20 md:mb-48">
              <div className="p-4 md:p-16 md:w-[30rem]">
                <h1 className="text-3xl font-bold mb-3">Nomadic</h1>
                <p className="text-sm md:text-base mb-5 md:mb-24">
                  Take your startup on an extraordinary journey. Launch, expand,
                  or relocate your venture to 100+ world-leading tech hubs.
                  Explore new markets, access vibrant ecosystems, and fuel your
                  growth with Techfield&apos;s Nomadic
                </p>
                <button className="focus:outline-none bg-lime-green lg:text-xl font-bold rounded-xl text-light-black px-4 sm:px-10 border border-lime-green py-2 sm:py-4 text-sm">
                  <span className="flex items-center">
                    Get Started
                    <img src={Arrow} alt="" className="pl-3" />
                  </span>
                </button>
              </div>
              <img
                src={Normadic}
                alt=""
                className="md:h-[29rem] md:w-[28rem] object-cover rounded-3xl"
              />
            </div>

            <div className="md:w-[70rem] flex flex-col-reverse md:flex-row md:justify-between bg-lime-green rounded-3xl mb-20 md:mb-48">
              <div className="p-4 md:p-16 md:w-[30rem]">
                <h1 className="text-3xl font-bold mb-3">Co-founder Match</h1>
                <p className="text-sm md:text-base mb-5 md:mb-24">
                  Build a winning team. Connect with like-minded entrepreneurs,
                  discover potential co-founders, and collaborate with
                  individuals who share your passion and drive. Find the missing
                  piece for your startup&apos;s success.
                </p>
                <button className="focus:outline-none bg-light-black lg:text-xl font-bold rounded-xl text-lime-green px-4 sm:px-10 border border-light-black py-2 sm:py-4 text-sm">
                  <span className="flex items-center">
                    Get Started
                    <img src={ArrowGreen} alt="" className="pl-3" />
                  </span>
                </button>
              </div>
              <img
                src={Cofounder}
                alt=""
                className="md:h-[29rem] md:w-[28rem] object-cover rounded-3xl"
              />
            </div> */}
          </div> 
        </div>
      </main>
    </>
  );
};

export default Products;

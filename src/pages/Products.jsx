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
        <div className="bg-[#EAFFF6] h-screen relative">
          <div className="absolute top-[7rem] left-0 flex flex-row">
            <img src={BG} alt="" />
          </div>
          <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 mt-7 sm:mb-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-[#222237] font-bold leading-7 md:leading-10">
                Raise the capital you need to fuel innovation, scale your
                business, and turn your ideas into reality.
              </h1>
              <p className="mt-5 sm:mt-10 lg:w-10/12 text-[#222237] font-normal text-center text-sm sm:text-lg">
                Discover products to help you grow and scale your startup.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00EC85] bg-[#00EC85] transition duration-150 ease-in-out hover:bg- lg:text-xl lg:font-bold  rounded-xl text-[#222237] px-4 sm:px-10 border border-[#00EC85] py-2 sm:py-4 text-sm">
                <span className="flex items-center">
                  Get Started
                  <img src={Arrow} alt="" className="pl-3" />
                </span>
              </button>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-center">
              <h1 className="text-3xl font-bold">
                Trusted by amazing startups
              </h1>
            </div>
            <div className="bg-[#EAFFF6] flex justify-between pl-[26rem] pr-[26rem]">
              <img src={Img1} alt="" className="w-28 h-28" />
              <img src={Img3} alt="" className="w-28 h-28" />
              <img src={Img2} alt="" className="w-28 h-28" />
            </div>
          </div>
        </div>

        {/* second section */}
        <div className="container mt-24">
          <div className="text-center mt-52 mb-10">
            <h1 className="text-3xl font-bold">Great products tailored specifically for</h1>
            <h1 className="text-3xl font-bold">African Founders</h1>
          </div>

          {/* div for the cards */}
          <div className="flex flex-col pl-32">
            <div className=" w-[70rem] text-white flex justify-between bg-[#222237] rounded-3xl mb-48">
              <div className="p-16 w-[30rem]">
                <h1 className="text-3xl font-bold mb-3">Accelerate</h1>
                <p className="mb-24">
                  Unlock your startup&apos;s full potential with our
                  comprehensive accelerator program. Benefit from expert
                  guidance, valuable resources, and a network of industry
                  leaders to propel your growth and success
                </p>
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00EC85] bg-[#00EC85] transition duration-150 ease-in-out hover:bg- lg:text-xl lg:font-bold  rounded-xl text-[#222237] px-4 sm:px-10 border border-[#00EC85] py-2 sm:py-4 text-sm">
                  <span className="flex items-center">
                    Get Started
                    <img src={Arrow} alt="" className="pl-3" />
                  </span>
                </button>
              </div>
              <img
                src={Accelerate}
                alt=""
                className="h-[29rem] w-[28rem] object-cover rounded-3xl"
              />
            </div>

            <div className=" w-[70rem] text-[#222237] flex flex-row-reverse justify-between bg-[#00EC85] rounded-3xl mb-48">
              <div className="p-16 w-[30rem]">
                <h1 className="text-3xl font-bold mb-3">Raise</h1>
                <p className="mb-24">
                  Connect with a vast network of global investors, build
                  valuable relationships, and raise the capital you need to take
                  your startup to new heights. Discover a world of funding
                  opportunities with Techfield
                </p>
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#222237] bg-[#222237] transition duration-150 ease-in-out hover:bg- lg:text-xl lg:font-bold  rounded-xl border border-[#222237] px-4 sm:px-10 text-[#00EC85] py-2 sm:py-4 text-sm">
                  <span className="flex items-center">
                    Get Started
                    <img src={ArrowGreen} alt="" className="pl-3 w-9" />
                  </span>
                </button>
              </div>
              <img
                src={Raise}
                alt=""
                className="h-[29rem] w-[28rem] object-cover rounded-3xl"
              />
            </div>

            <div className=" w-[70rem] text-white flex justify-between bg-[#222237] rounded-3xl mb-48">
              <div className="p-16 w-[30rem]">
                <h1 className="text-3xl font-bold mb-3">Nomadic</h1>
                <p className="mb-24">
                  Take your startup on an extraordinary journey. Launch, expand,
                  or relocate your venture to 100+ world-leading tech hubs.
                  Explore new markets, access vibrant ecosystems, and fuel your
                  growth with Techfield&apos;s Nomadic
                </p>
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00EC85] bg-[#00EC85] transition duration-150 ease-in-out hover:bg- lg:text-xl lg:font-bold  rounded-xl text-[#222237] px-4 sm:px-10 border border-[#00EC85] py-2 sm:py-4 text-sm">
                  <span className="flex items-center">
                    Get Started
                    <img src={Arrow} alt="" className="pl-3" />
                  </span>
                </button>
              </div>
              <img
                src={Normadic}
                alt=""
                className="h-[29rem] w-[28rem] object-cover rounded-3xl"
              />
            </div>

            <div className=" w-[70rem] text-[#222237] flex flex-row-reverse justify-between bg-[#00EC85] rounded-3xl mb-48">
              <div className="p-16 w-[30rem]">
                <h1 className="text-3xl font-bold mb-3">Co-founder Match</h1>
                <p className="mb-24">
                  Build a winning team. Connect with like-minded entrepreneurs,
                  discover potential co-founders, and collaborate with
                  individuals who share your passion and drive. Find the missing
                  piece for your startup&apos;s success.
                </p>
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#222237] bg-[#222237] transition duration-150 ease-in-out hover:bg- lg:text-xl lg:font-bold  rounded-xl border border-[#222237] px-4 sm:px-10 text-[#00EC85] py-2 sm:py-4 text-sm">
                  <span className="flex items-center">
                    Get Started
                    <img src={ArrowGreen} alt="" className="pl-3 w-9" />
                  </span>
                </button>
              </div>
              <img
                src={Cofounder}
                alt=""
                className="h-[29rem] w-[28rem] object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Products;

// import React from 'react'
import BG from "../assets/Images/Background Graphic Element.svg";
import Cofounder from "../assets/Images/Cofounder Match.png";

const Blog = () => {
  return (
    <>
      <main>
        <div className="bg-[#EAFFF6] h-screen relative">
          <div className="absolute top-[1.5rem] left-0 flex flex-row">
            <img src={BG} alt="" />
          </div>
          <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 mt-7 sm:mb-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-[#222237] font-bold leading-7 md:leading-10">
                Resources for founders & innovators to learn how to build great
                businesses.
              </h1>
              <p className="mt-5 sm:mt-10 lg:w-10/12 text-[#222237] font-normal text-center text-sm sm:text-lg">
                Weekly posts on everything startup, funding, scaling, and
                digital culture.
              </p>
            </div>
          </div>

          {/* floating card section */}
          <div className="flex flex-row justify-evenly items-center w-[70%] p-6 pt-10 pb-10 shadow-2xl shadow-slate-200 absolute top-[25rem] left-52 bg-white rounded-2xl">
            <img
              src={Cofounder}
              alt=""
              className="w-[25rem] h-[25rem] object-cover rounded-3xl pl-4"
            />
            <div className="flex flex-col w-1/2 pl-8 pr-4">
              <h1 className="text-3xl font-bold mb-6">
                Early stage SaaS startups grow the same with or without VC
                dollars
              </h1>
              <p className="text-[#222237] mb-8 pr-[3rem] text-lg">
                A new report from Capchase found that Saas company growth
                wasn&apos;t as tied to venture-capital backing as founders
                likely thought
              </p>
              <h3 className="text-xl font-bold">Read More</h3>
            </div>
          </div>
        </div>

        <div className="mt-96">
          {/* heading section */}
          <div className="flex justify-between pl-52 pr-52">
            <h1 className="font-bold text-3xl text-[#222237]">Take a look at our articles & resources</h1>
            <ul className="flex space-x-4 font-medium pb-4 border-b-[1px] border-[#00EC85]">
              <p className="text-[#00EC85]">All</p>
              <p>Venture</p>
              <p>Business</p>
              <p>Management</p>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Blog;

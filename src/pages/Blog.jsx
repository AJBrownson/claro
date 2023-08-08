// import React from 'react'
import BG from "../assets/Images/Background Graphic Element.svg";
import Cofounder from "../assets/Images/Cofounder Match.png";
import Blog1 from "../assets/Images/Blog 1.png";
import Blog2 from "../assets/Images/Blog 2.png";
import Blog3 from "../assets/Images/Blog 3.png";
import Blog4 from "../assets/Images/Blog -1.png";
import Blog5 from "../assets/Images/Blog 5.png";
import Blog6 from "../assets/Images/Blog 6.png";
import Arrow from "../assets/Icons/arrow-trend-up.svg";



const Blog = () => {
  return (
    <>
      <main>
        <div className="bg-light-green h-screen relative">
          <div className="absolute top-[1.5rem] left-0 flex flex-row">
            <img src={BG} alt="" />
          </div>
          <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 mt-7 sm:mb-10">
              <h1 className="text-5xl text-center text-light-black leading-tight font-semibold">
                Resources for founders & innovators to learn how to build great
                businesses.
              </h1>
              <p className="mt-3 font-normal text-center text-lg text-light-black">
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
              <p className="text-light-black mb-8 pr-[3rem] text-lg">
                A new report from Capchase found that Saas company growth
                wasn&apos;t as tied to venture-capital backing as founders
                likely thought
              </p>
              <h3 className="text-xl font-bold">Read More</h3>
            </div>
          </div>
        </div>


        {/* second section */}
        <div className="mt-96 mb-8">
          {/* heading section */}
          <div className="flex justify-between items-center pl-48 pr-48">
            <h1 className="font-bold text-3xl text-light-black w-96">
              Take a look at our articles & resources
            </h1>
            <div>
              <ul className="flex space-x-4 font-medium pb-4 border-b-[1px] border-lime-green">
                <p className="text-lime-green">All</p>
                <p>Venture</p>
                <p>Business</p>
                <p>Management</p>
              </ul>
            </div>
          </div>
        </div>

        {/* article cards */}
        <div className="container grid grid-cols-2 grid-rows-3 pl-48">
          <div className="flex flex-row justify-between items-center p-4 mb-10 w-[28rem] shadow-xl shadow-slate-200 rounded-2xl">
            <img
              src={Blog1}
              alt=""
              className="w-48 h-48 object-cover rounded-xl"
            />
            <div className="flex flex-col pl-4">
              <h1 className="font-bold text-sm mb-2 pr-8">
                Early-Stage Startup Investment in Africa report in 2023
              </h1>
              <p className="text-sm mb-4">
                Discover products to help you grow and scale your startup. Or
                maybe you say Or collaborative learning.
              </p>
              <h3 className="font-bold text-sm">Read More</h3>
            </div>
          </div>

          <div className="flex flex-row justify-between items-center p-4 mb-10 w-[28rem] shadow-xl shadow-slate-200 rounded-2xl">
            <img
              src={Blog2}
              alt=""
              className="w-48 h-48 object-cover rounded-xl"
            />
            <div className="flex flex-col pl-4">
              <h1 className="font-bold text-sm mb-2 pr-8">
                Africa Start-up and Technology Developments in 2023
              </h1>
              <p className="text-sm mb-4">
                Discover products to help you grow and scale your startup. Or
                maybe you say Or collaborative learning.
              </p>
              <h3 className="font-bold text-sm">Read More</h3>
            </div>
          </div>

          <div className="flex flex-row justify-between items-center p-4 mb-10 w-[28rem] shadow-xl shadow-slate-200 rounded-2xl">
            <img
              src={Blog3}
              alt=""
              className="w-48 h-48 object-cover rounded-xl"
            />
            <div className="flex flex-col pl-4">
              <h1 className="font-bold text-sm mb-2 pr-8">
                8 VCs say they are still bullish on SAFE rounds, but it&apos;s
                not 2021 anymore
              </h1>
              <p className="text-sm mb-4">
                SAFE rounds, or simple agreements for future equity, have been
                around since Y Combinator invented...
              </p>
              <h3 className="font-bold text-sm">Read More</h3>
            </div>
          </div>

          <div className="flex flex-row justify-between items-center p-4 mb-10 w-[28rem] shadow-xl shadow-slate-200 rounded-2xl">
            <img
              src={Blog4}
              alt=""
              className="w-48 h-48 object-cover rounded-xl"
            />
            <div className="flex flex-col pl-4">
              <h1 className="font-bold text-sm mb-2 pr-8">
                How CEMEA&apos;s fintech future is getting a big boost from Visa
              </h1>
              <p className="text-sm mb-4">
                The Visa Everywhere Initiative helps CEMEA fintechs gain access
                to the digital economy and boost financial...
              </p>
              <h3 className="font-bold text-sm">Read More</h3>
            </div>
          </div>

          <div className="flex flex-row justify-between items-center p-4 mb-10 w-[28rem] shadow-xl shadow-slate-200 rounded-2xl">
            <img
              src={Blog5}
              alt=""
              className="w-48 h-48 object-cover rounded-xl"
            />
            <div className="flex flex-col pl-4">
              <h1 className="font-bold text-sm mb-2 pr-8">
                Venture&apos;s Q2 was calm (and that&apos;s not good)
              </h1>
              <p className="text-sm mb-4">
                Hello, and welcome back to Equity, the podcast about the
                business of startups, where we unpack the numbers and nuance
                behind the headlines.
              </p>
              <h3 className="font-bold text-sm">Read More</h3>
            </div>
          </div>

          <div className="flex flex-row justify-between items-center p-4 mb-10 w-[28rem] shadow-xl shadow-slate-200 rounded-2xl">
            <img
              src={Blog6}
              alt=""
              className="w-48 h-48 object-cover rounded-xl"
            />
            <div className="flex flex-col pl-4">
              <h1 className="font-bold text-sm mb-2 pr-8">
                Big Sky Capital debuts its $20M fund to invest in enterprise
                SaaS startups
              </h1>
              <p className="text-sm mb-4">
                Jahn Karsybaev and Adil Nurgozhin met while at the University of
                Montana and launched five startups...
              </p>
              <h3 className="font-bold text-sm">Read More</h3>
            </div>
          </div>
        </div>

        {/* sign up section */}
        <div className="text-center bg-light-green pt-24 pb-24 pl-80 pr-80 mt-40">
          <h1 className="text-4xl font-semibold mb-4">Sign up for our newsletter</h1>
          <p>
            You&apos;ll also get notified about our weekly post on everything
            startup, funding, scaling, and digital culture. Don&apos;t worry, we
            won&apos;t spam you with useless content or annoying sales.
          </p>
          <div className="mt-16">
            <form className="flex justify-between">
              <input type="email" placeholder="Enter your email here" className="w-[26rem] p-4 rounded-lg "/>
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00EC85] bg-[#00EC85] transition duration-150 ease-in-out hover:bg- lg:text-xl lg:font-bold rounded-lg text-light-black px-4 sm:px-10 border border-[#00EC85] py-2 sm:py-4 text-sm">
                <span className="flex items-center">
                  Get Started
                  <img src={Arrow} alt="" className="pl-3" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Blog;

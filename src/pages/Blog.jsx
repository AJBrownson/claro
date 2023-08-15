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
        <div className="bg-light-green md:h-screen relative">
          <div className="hidden md:absolute md:top-[1.5rem] md:left-0 md:flex md:flex-row">
            <img src={BG} alt="" />
          </div>
          <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center text-center text-light-black flex-col mb-5 mt-7 sm:mb-10">
              <h1 className="text-2xl font-semibold md:text-5xl md:leading-tight">
                Resources for founders & innovators to learn how to build great
                businesses.
              </h1>
              <p className="mt-3 font-normal text-sm md:text-lg md:mx-24">
                Weekly posts on everything startup, funding, scaling, and
                digital culture.
              </p>
            </div>
          </div>

          {/* floating card section */}
          <div className="px-5 md:px-0">
          <div className="md:absolute md:top-[25rem] md:left-52 flex flex-col md:flex-row justify-evenly items-center md:w-[70%] px-2 md:px-0 md:p-6 md:py-10 shadow-2xl shadow-slate-200 bg-white rounded-2xl">
            <img
              src={Cofounder}
              alt=""
              className="md:w-[25rem] md:h-[25rem] object-cover md:rounded-3xl md:pl-4"
            />
            <div className="flex flex-col md:w-1/2 mt-3 md:mt-0 md:pl-8 md:pr-4">
              <h1 className="text-xl md:text-3xl font-bold mb-3 md:mb-6">
                Early stage SaaS startups grow the same with or without VC
                dollars
              </h1>
              <p className="text-light-black mb-8 md:pr-[3rem] md:text-lg text-sm">
                A new report from Capchase found that Saas company growth
                wasn&apos;t as tied to venture-capital backing as founders
                likely thought
              </p>
              <h3 className="text-sm md:text-xl font-bold mb-3 md:mb-0">Read More</h3>
            </div>
          </div>
          </div>
        </div>


        {/* second section */}
        <div className="px-5 md:px-0 mt-32 md:mt-96 mb-8">
          {/* heading section */}
          <div className="flex flex-col md:flex-row justify-between md:items-center md:px-48">
            <h1 className="text-center md:text-start font-bold text-xl md:text-3xl text-light-black md:w-96">
              Take a look at our articles & resources
            </h1>
            <div>
              <ul className="flex space-x-4 font-medium mt-10 md:mt-0 px-3 md:px-0 pb-4 border-b-[1px] border-lime-green">
                <p className="text-lime-green text-sm">All</p>
                <p className="text-sm">Venture</p>
                <p className="text-sm">Business</p>
                <p className="text-sm">Management</p>
              </ul>
            </div>
          </div>
        </div> 

        {/* article cards */}
        <div className="container flex flex-col px-5 md:px-0 md:grid md:grid-cols-2 md:grid-rows-3 md:pl-48">
          <div className="flex flex-col md:flex-row justify-between items-center p-4 mb-10 md:w-[28rem] shadow-xl shadow-slate-200 rounded-2xl">
            <img
              src={Blog1}
              alt=""
              className="md:w-48 md:h-48 object-cover rounded-xl"
            />
            <div className="flex flex-col md:pl-4">
              <h1 className="font-bold text-sm mb-2 md:pr-8">
                Early-Stage Startup Investment in Africa report in 2023
              </h1>
              <p className="text-sm mb-4">
                Discover products to help you grow and scale your startup. Or
                maybe you say Or collaborative learning.
              </p>
              <h3 className="font-bold text-sm">Read More</h3>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center p-4 mb-10 md:w-[28rem] shadow-xl shadow-slate-200 rounded-2xl">
            <img
              src={Blog2}
              alt=""
              className="md:w-48 md:h-48 object-cover rounded-xl"
            />
            <div className="flex flex-col md:pl-4">
              <h1 className="font-bold text-sm mb-2 md:pr-8">
                Africa Start-up and Technology Developments in 2023
              </h1>
              <p className="text-sm mb-4">
                Discover products to help you grow and scale your startup. Or
                maybe you say Or collaborative learning.
              </p>
              <h3 className="font-bold text-sm">Read More</h3>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center p-4 mb-10 md:w-[28rem] shadow-xl shadow-slate-200 rounded-2xl">
            <img
              src={Blog3}
              alt=""
              className="md:w-48 md:h-48 object-cover rounded-xl"
            />
            <div className="flex flex-col md:pl-4">
              <h1 className="font-bold text-sm mb-2 md:pr-8">
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

          <div className="flex flex-col md:flex-row justify-between items-center p-4 mb-10 md:w-[28rem] shadow-xl shadow-slate-200 rounded-2xl">
            <img
              src={Blog4}
              alt=""
              className="md:w-48 md:h-48 object-cover rounded-xl"
            />
            <div className="flex flex-col md:pl-4">
              <h1 className="font-bold text-sm mb-2 md:pr-8">
                How CEMEA&apos;s fintech future is getting a big boost from Visa
              </h1>
              <p className="text-sm mb-4">
                The Visa Everywhere Initiative helps CEMEA fintechs gain access
                to the digital economy and boost financial...
              </p>
              <h3 className="font-bold text-sm">Read More</h3>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center p-4 mb-10 md:w-[28rem] shadow-xl shadow-slate-200 rounded-2xl">
            <img
              src={Blog5}
              alt=""
              className="md:w-48 md:h-48 object-cover rounded-xl"
            />
            <div className="flex flex-col md:pl-4">
              <h1 className="font-bold text-sm mb-2 md:pr-8">
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

          <div className="flex flex-col md:flex-row justify-between items-center p-4 mb-10 md:w-[28rem] shadow-xl shadow-slate-200 rounded-2xl">
            <img
              src={Blog6}
              alt=""
              className="md:w-48 md:h-48 object-cover rounded-xl"
            />
            <div className="flex flex-col md:pl-4">
              <h1 className="font-bold text-sm mb-2 md:pr-8">
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
        <div className="text-center bg-light-green py-16 md:py-24 px-5 md:px-80 mt-10 md:mt-40">
          <h1 className="text-xl md:text-4xl font-semibold mb-4">Sign up for our newsletter</h1>
          <p>
            You&apos;ll also get notified about our weekly post on everything
            startup, funding, scaling, and digital culture. Don&apos;t worry, we
            won&apos;t spam you with useless content or annoying sales.
          </p>
          <div className="mt-10 md:mt-16">
            <form className="flex flex-col md:flex-row justify-between">
              <input type="email" placeholder="Enter your email here" className="md:w-[26rem] mb-5 md:mb-0 p-4 rounded-lg "/>

              {/* mobile view */}
              <div className="md:hidden">
              <button className="focus:outline-none bg-lime-green lg:text-xl font-bold rounded-lg text-light-black px-4 border border-lime-green py-2 text-sm">
              <span className="flex text-center items-center">
                  Get Started
                  <img src={Arrow} alt="" className="pl-3" />
                </span>
              </button>
              </div>

              {/* desktop view */}
              <button className="hidden md:block focus:outline-none bg-lime-green lg:text-xl font-bold rounded-lg text-light-black px-4 border border-lime-green py-2 text-sm">
                <span className="flex text-center items-center">
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

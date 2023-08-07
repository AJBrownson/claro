// import React from 'react'
import BG from "../assets/Images/Background Graphic Element.svg";
import BGDark from "../assets/Images/Dark Background Element.svg";
import HeroImage from "../assets/Images/Hero Image.png";
import Img1 from "../assets/Companies Logos/62ea4e159b98557bdd40b938_Company logo.svg";
import Img2 from "../assets/Companies Logos/62ea4e159c9dd47ae626cb4e_Company logo-2.svg";
import Img3 from "../assets/Companies Logos/62ea4e159d1225438feb960b_Company logo-1.svg";
import Img4 from "../assets/Companies Logos/62ea4e15131e426f8c1652c5_Company logo-3.svg";
import Img5 from "../assets/Companies Logos/62ea4e15af559257920f37c4_Company logo-4.svg";
import Equip from "../assets/Icons/Equip Icon.svg";
import Educate from "../assets/Icons/Educate Icon.svg";
import Empower from "../assets/Icons/Empower Icon.svg";
import Portrait from "../assets/Images/portrait-successful-businesspeople-sitting-cafe-table.png";
import Portrait2 from "../assets/Images/Made for African founders _ startups.png";
import AccIcon from "../assets/Icons/Accelerate Icon.svg";
import ArrGreen from "../assets/Icons/arrow-trend-up Green.svg";
import Arr from "../assets/Icons/arrow-trend-up.svg";
import RaIcon from "../assets/Icons/Raise Icon.svg";
import NorIcon from "../assets/Icons/Normadic Icon.svg";
import MaIcon from "../assets/Icons/Match Icon.svg";
import { PiCaretDown } from "react-icons/pi";
import JoinIcon from "../assets/Icons/Join Premier Global Network Icon.svg";
import ConnIcon from "../assets/Icons/Connect With Global Investors.svg";
import LaunIcon from "../assets/Icons/Launch _ Expand Globally Icon.svg";
import FindIcon from "../assets/Icons/Find Your Ideal Co-founders.svg";
import ForgIcon from "../assets/Icons/Forge Powerful.svg";
import AcceIcon from "../assets/Icons/Access Essential.svg";
import Avatar from "../assets/Images/avatar6.png";
import Blog1 from "../assets/Images/Blog 1.png";
import Blog2 from "../assets/Images/Blog 2.png";



const Home = () => {
  return (
    <>
      <main>
        <div className="bg-cover bg-center bg-light-green h-screen relative">
          <div className="absolute top-8 left-0">
            <img src={BG} alt="" />
          </div>
          <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 mt-5 sm:mb-10">
              <h1 className="text-5xl text-center text-light-black leading-tight font-semibold">
                Unlocking Global Venture Opportunities for Underserved
                Early-Stage African Founders
              </h1>
              <p className="mt-3 font-normal text-center text-lg text-light-black ml-24 mr-24">
                We connect underserved early-stage founders, innovators, and
                talents to unlimited venture support and resources to accelerate
                growth.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-green bg-lime-green transition duration-150 ease-in-out hover:bg- lg:text-xl lg:font-bold rounded-lg text-light-black px-4 sm:px-10 border border-lime-green py-2 sm:py-4 text-sm">
                <span className="flex ">
                  Get Started
                  <img src={Arr} alt='' className="pl-3"/>
                </span>
              </button>
              <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[00EC85] bg-transparent transition duration-150 ease-in-out hover:border-lime-green lg:text-xl lg:font-bold  hover:text-lime-green rounded-lg border border-light-black text-light-black px-4 sm:px-10 py-2 sm:py-4 text-sm">
              <span className="flex ">
                  Learn More
                  <img src={Arr} alt='' className="pl-3"/>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* section for the hero image */}
        <div className="h-screen">
          <div className="container mx-auto flex justify-center absolute top-[39rem] left-10">
            <img src={HeroImage} alt="" className="w-4/5" />
          </div>
          <div className="container flex flex-row h-4/5 mt-[30rem] justify-between items-center mx-auto p-16">
            <span className="w-64">
            <h3 className="text-5xl font-extrabold">Trusted by amazing startups</h3>
            </span>
            <div className="grid gap-10 grid-cols-3 grid-rows-3">
              <img src={Img1} alt="" className="w-40" />
              <img src={Img3} alt="" className="w-40" />
              <img src={Img2} alt="" className="w-40" />
              <img src={Img4} alt="" className="w-40" />
              <img src={Img5} alt="" className="w-40" />
              <img src={Img3} alt="" className="w-40" />
              <img src={Img2} alt="" className="w-40" />
              <img src={Img1} alt="" className="w-40" />
              <img src={Img4} alt="" className="w-40" />
            </div>
          </div>
        </div>

        {/* section for the approach */}
        <div className="bg-light-black text-[#FFFFFF] h-3/4 p-16 relative">
          <div className="absolute top-20 left-0 h-40">
            <img src={BGDark} alt="" />
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-3">Our approach</h1>
            <p>
              We support our founders by equipping, educating, and
              empoweringthem.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-24 p-20">
            <div className="p-10 border rounded-3xl border-lime-green">
              <img src={Equip} alt="" className="pt-4 pb-4" />
              <h1 className="text-xl font-bold pb-3">Equip</h1>
              <p>
                Providing founders with the tools, resources, and guidance they
                need to thrive in the competitive tech landscape.
              </p>
            </div>

            <div className="p-10 border rounded-3xl border-lime-green">
              <img src={Educate} alt="" className="pt-4 pb-4" />
              <h1 className="text-xl font-bold pb-3">Educate</h1>
              <p>
                Offering comprehensive educational programs and
                knowledge-sharing opportunities to help founders sharpen their
                skills and stay ahead of the curve.
              </p>
            </div>

            <div className="p-10 border rounded-3xl border-lime-green">
              <img src={Empower} alt="" className="pt-4 pb-4" />
              <h1 className="text-xl font-bold pb-3">Empower</h1>
              <p>
                Enabling founders to take charge of their entrepreneurial
                journey, fostering confidence, resilience, and the ability to
                make impactful decisions.
              </p>
            </div>
          </div>
        </div>

        {/* new section */}
        <div className="flex flex-col p-32">
          {/* upper section div */}
          <div className="flex flex-row justify-between align-middle p-4">
            <div className="p-6 w-1/2 mr-20">
              <img src={Portrait} alt="" />
            </div>
            <div className="p-6 mt-16 w-1/2">
              <h1 className="text-4xl font-bold mb-4 text-light-black">
                Building tools for founders and innovators in emerging markets.
              </h1>
              <p className="text-light-black mb-10">
                At Techfield, we are committed to Unlocking global venture
                opportunities and empowering underserved early-stage African
                founders to accelerate growth, drive innovation, and make their
                mark in the tech industry.
              </p>
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-green bg-lime-green transition duration-150 ease-in-out hover:bg- lg:text-xl lg:font-bold  rounded-xl text-light-black px-4 sm:px-10 border border-lime-green py-2 sm:py-4 text-sm">
                Learn More
              </button>
            </div>
          </div>

          {/* lower section div */}
          <div className="flex flex-row justify-between align-middle p-4 mt-16">
            <div className="p-6 mt-4 w-1/2">
              <h1 className="text-4xl font-bold mb-4 text-light-black">
                Made for African founders & startups
              </h1>
              <p className="text-light-black mb-4">
                Discover products to help you grow and scale your startup.
              </p>

              {/* div for the dropdown */}
              <div>
                <div className="w-96 border border-lime-green p-4 rounded-2xl">
                  <span className="flex flex-row items-center">
                    <img src={AccIcon} alt="" className="pr-2" />
                    <h1 className="text-lg font-semibold text-light-black">
                      Accelerate
                    </h1>
                  </span>
                  <span className="flex justify-between">
                    <p className="text-light-black ">
                      Fast-track your startup&apos;s growth
                    </p>
                    <img src={ArrGreen} alt="" />
                  </span>
                </div>
              </div>
              <div className="w-96 p-2 flex items-center justify-between">
                <span className="flex flex-row items-center">
                  <img src={RaIcon} alt="" className="pr-2" />
                  <h1 className="text-lg font-semibold text-light-black">
                    Raise
                  </h1>
                </span>
                <PiCaretDown />
              </div>
              <div className="w-96 p-2 flex items-center justify-between">
                <span className="flex flex-row items-center">
                  <img src={NorIcon} alt="" className="pr-2" />
                  <h1 className="text-lg font-semibold text-light-black">
                    Normadic
                  </h1>
                </span>
                <PiCaretDown />
              </div>
              <div className="w-96 p-2 flex items-center justify-between">
                <span className="flex flex-row items-center">
                  <img src={MaIcon} alt="" className="pr-2" />
                  <h1 className="text-lg font-semibold text-light-black">
                    Match
                  </h1>
                </span>
                <PiCaretDown />
              </div>
            </div>

            <div className="p-4 w-1/2 ml-20">
              <img src={Portrait2} alt="" />
            </div>
          </div>
        </div>

        {/* amplify section */}
        <div className="bg-light-black text-[#FFFFFF] h-1/2 p-16 relative">
        <div className="absolute top-[21rem] left-[-16rem] w-[100rem] h-[100rem">
            <img src={BGDark} alt="" />
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">
              Amplify Your Startup&apos;s Success
            </h1>
            <p>Thousands of Founders and innovators are using us to;</p>
          </div>

          <div className="grid grid-cols-3 grid-rows-2 gap-24 p-20">
            <div className="p-10 border rounded-3xl border-lime-green">
              <img src={JoinIcon} alt="" className="pt-4 pb-4" />
              <h1 className="text-xl font-bold pb-3">
                Join Premier Global Network
              </h1>
              <p>
                Unlock Opportunities with Prestigious Accelerators, Incubators,
                and Venture Studios
              </p>
            </div>

            <div className="p-10 border rounded-3xl border-lime-green">
              <img src={ConnIcon} alt="" className="pt-4 pb-4" />
              <h1 className="text-xl font-bold pb-3">
                Connect with Global Investors
              </h1>
              <p>
                Raise Funds and Build Valuable Relationships with 200k+ Global
                Investors
              </p>
            </div>

            <div className="p-10 border rounded-3xl border-lime-green">
              <img src={LaunIcon} alt="" className="pt-4 pb-4" />
              <h1 className="text-xl font-bold pb-3">
                Launch and Expand Globally
              </h1>
              <p>
                Take Your Startup to New Heights in 100+ World-Leading Tech Hubs
              </p>
            </div>

            <div className="p-10 border rounded-3xl border-lime-green">
              <img src={FindIcon} alt="" className="pt-4 pb-4" />
              <h1 className="text-xl font-bold pb-3">
                Find Your Ideal Co-founders
              </h1>
              <p>Drive Your Vision Forward with Perfect Co-founder Matches</p>
            </div>

            <div className="p-10 border rounded-3xl border-lime-green">
              <img src={ForgIcon} alt="" className="pt-4 pb-4" />
              <h1 className="text-xl font-bold pb-3">
                Forge Powerful Partnerships
              </h1>
              <p>
                Collaborate with Leading Corporations, Agencies, Governments,
                and Institutions
              </p>
            </div>

            <div className="p-10 border rounded-3xl border-lime-green">
              <img src={AcceIcon} alt="" className="pt-4 pb-4" />
              <h1 className="text-xl font-bold pb-3">
                Access Essential Venture Tools
              </h1>
              <p>
                Empower Your Startup&apos;s Success with 250+ Discounted Venture
                Building Tools
              </p>
            </div>
          </div>
        </div>

        {/* testimonials section */}
        <div>
          {/* testimonials */}
          <div className="p-16">
            <div className="text-center p-16">
              <h1 className="text-3xl font-bold mb-3">Testimonials</h1>
              <p>
                Join thousands of founders and innovators that are already
                enjoying the benefits of Techfield
              </p>
            </div>
            {/* quote div */}
            <div className="flex items-center justify-center">
              <div className="quote-box">
                <div className="bg-green-200 rounded-r-lg rounded-l-lg pt-10 pb-10 pl-20 pr-20 m-0 w-[40rem]">
                  <blockquote className="p-0 mb-3 font-bold">
                    &quot;It’s an innovative, easy to use interface. It’s not
                    confusing; you don’t need to explain it. It’s
                    self-servicing&quot;.
                  </blockquote>
                  <div className="text-center">
                    <h1 className="font-bold text-xl">Katherine Abiola</h1>
                    <p>Founder Korner</p>
                  </div>
                </div>
              </div>
            </div>
            {/* avatar div */}
            <div className="flex items-center justify-center mt-10">
              <div className="flex justify-between w-96">
                <img src={Avatar} alt="" className="w-16 h-16 rounded-full" />
                <img src={Avatar} alt="" className="w-16 h-16 rounded-full" />
                <img src={Avatar} alt="" className="w-16 h-16 rounded-full" />
                <img src={Avatar} alt="" className="w-16 h-16 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* artcle div */}
        <div className="mb-20">
          <div className="flex items-center justify-center">
            <div className="flex justify-between w-[75%]">
              <div className="w-96">
                <h1 className="text-3xl font-bold">
                  Take a look at our articles & resources
                </h1>
              </div>
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-green bg-lime-green transition duration-150 ease-in-out hover:bg- lg:text-xl lg:font-bold  rounded-xl text-light-black px-4 sm:px-10 border border-lime-green py-2 sm:py-4 text-sm">
                <span className="flex items-center">
                  Browse Articles
                  <img src={Arr} alt="" className="pl-2" />
                </span>
              </button>
            </div>
          </div>

          {/* cards */}
          <div className="flex justify-between mt-20 pl-40 pr-40">
            <div className="w-[30rem] flex flex-col rounded-2xl bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-w-xl md:flex-row">
              <img
                src={Blog1}
                alt=""
                className="h-20 w-20 rounded-xl object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              />
              <div className="flex flex-col justify-start p-6">
                <h1 className="mb-2 text-xl font-medium ">
                  Early-Stage Startup Investment in Africa report in 2023
                </h1>
                <p>
                  Discover products to help you grow and scale your startup. Or
                  maybe you say Or collaborative learning.
                </p>
                <h6>Read More</h6>
              </div>
            </div>

            <div className="w-[30rem] flex flex-col rounded-2xl bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-w-xl md:flex-row">
              <img
                src={Blog2}
                alt=""
                className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              />
              <div className="flex flex-col justify-start p-6">
                <h1 className="mb-2 text-xl font-medium ">
                  Africa Start-up and Technology Developments in 2023
                </h1>
                <p>
                  Discover products to help you grow and scale your startup. Or
                  maybe you say Or collaborative learning.
                </p>
                <h6>Read More</h6>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

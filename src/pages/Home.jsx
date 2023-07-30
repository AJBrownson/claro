// import React from 'react'
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
import RaIcon from "../assets/Icons/Raise Icon.svg";
import NorIcon from "../assets/Icons/Normadic Icon.svg";
import MaIcon from "../assets/Icons/Match Icon.svg";
import { AiFillCaretDown } from "react-icons/ai";
import JoinIcon from "../assets/Icons/Join Premier Global Network Icon.svg";
import ConnIcon from "../assets/Icons/Connect With Global Investors.svg";
import LaunIcon from "../assets/Icons/Launch _ Expand Globally Icon.svg";
import FindIcon from "../assets/Icons/Find Your Ideal Co-founders.svg";
import ForgIcon from "../assets/Icons/Forge Powerful.svg";
import AcceIcon from "../assets/Icons/Access Essential.svg";

const Home = () => {
  return (
    <>
      <main>
        <div className="bg-cover bg-center bg-[#EAFFF6] h-screen">
          <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 mt-7 sm:mb-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-[#222237] font-black leading-7 md:leading-10">
                Unlocking Global Venture Opportunities for Underserved
                Early-Stage African Founders
              </h1>
              <p className="mt-5 sm:mt-10 lg:w-10/12 text-[#222237] font-normal text-center text-sm sm:text-lg">
                We connect underserved early-stage founders, innovators, and
                talents to unlimited venture support and resources to accelerate
                growth.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00EC85] bg-[#00EC85] transition duration-150 ease-in-out hover:bg- lg:text-xl lg:font-bold  rounded-xl text-[#222237] px-4 sm:px-10 border border-[#00EC85] py-2 sm:py-4 text-sm">
                Get Started
              </button>
              <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[00EC85] bg-transparent transition duration-150 ease-in-out hover:border-[#00EC85] lg:text-xl lg:font-bold  hover:text-[#00EC85] rounded-xl border border-[#222237] text-[#222237] px-4 sm:px-10 py-2 sm:py-4 text-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* section for the hero image */}
        <div>
          <div className="container mx-auto flex justify-center">
            <img src={HeroImage} alt="" className="w-4/5" />
          </div>
          <div className="container flex flex-row h-4/5 mt-24 justify-between items-center mx-auto">
            <h3>Trusted by amazing startups</h3>
            <div className="grid gap-4 grid-cols-3 grid-rows-3">
              <img src={Img1} alt="" />
              <img src={Img3} alt="" />
              <img src={Img2} alt="" />
              <img src={Img4} alt="" />
              <img src={Img5} alt="" />
              <img src={Img3} alt="" />
              <img src={Img2} alt="" />
              <img src={Img1} alt="" />
              <img src={Img4} alt="" />
            </div>
          </div>
        </div>

        {/* section for the approach */}
        <div className="bg-[#222237] text-[#FFFFFF] h-3/4 p-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-3">Our approach</h1>
            <p>
              We support our founders by equipping, educating, and
              empoweringthem.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-24 p-20">
            <div className="p-10 border rounded-3xl border-[#00EC85]">
              <img src={Equip} alt="" className="pt-4 pb-4" />
              <h1 className="text-xl font-bold pb-3">Equip</h1>
              <p>
                Providing founders with the tools, resources, and guidance they
                need to thrive in the competitive tech landscape.
              </p>
            </div>

            <div className="p-10 border rounded-3xl border-[#00EC85]">
              <img src={Educate} alt="" className="pt-4 pb-4" />
              <h1 className="text-xl font-bold pb-3">Educate</h1>
              <p>
                Offering comprehensive educational programs and
                knowledge-sharing opportunities to help founders sharpen their
                skills and stay ahead of the curve.
              </p>
            </div>

            <div className="p-10 border rounded-3xl border-[#00EC85]">
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
              <h1 className="text-4xl font-bold mb-4 text-[#222237]">
                Building tools for founders and innovators in emerging markets.
              </h1>
              <p className="text-[#222237] mb-10">
                At Techfield, we are committed to Unlocking global venture
                opportunities and empowering underserved early-stage African
                founders to accelerate growth, drive innovation, and make their
                mark in the tech industry.
              </p>
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00EC85] bg-[#00EC85] transition duration-150 ease-in-out hover:bg- lg:text-xl lg:font-bold  rounded-xl text-[#222237] px-4 sm:px-10 border border-[#00EC85] py-2 sm:py-4 text-sm">
                Learn More
              </button>
            </div>
          </div>

          {/* lower section div */}
          <div className="flex flex-row justify-between align-middle p-4 mt-16">
            <div className="p-6 mt-4 w-1/2">
              <h1 className="text-4xl font-bold mb-4 text-[#222237]">
                Made for African founders & startups
              </h1>
              <p className="text-[#222237] mb-4">
                Discover products to help you grow and scale your startup.
              </p>

              {/* div for the dropdown */}
              <div>
                <div className="w-96 border border-[#00EC85] p-4 rounded-2xl">
                  <span className="flex flex-row items-center">
                    <img src={AccIcon} alt="" className="pr-2" />
                    <h1 className="text-lg font-semibold text-[#222237]">
                      Accelerate
                    </h1>
                  </span>
                  <span className="flex justify-between">
                    <p className="text-[#222237] ">
                      Fast-track your startup&apos;s growth
                    </p>
                    <img src={ArrGreen} alt="" />
                  </span>
                </div>
              </div>
              <div className="w-96 p-2 flex items-center justify-between">
                <span className="flex flex-row items-center">
                  <img src={RaIcon} alt="" className="pr-2" />
                  <h1 className="text-lg font-semibold text-[#222237]">
                    Raise
                  </h1>
                </span>
                <AiFillCaretDown />
              </div>
              <div className="w-96 p-2 flex items-center justify-between">
                <span className="flex flex-row items-center">
                  <img src={NorIcon} alt="" className="pr-2" />
                  <h1 className="text-lg font-semibold text-[#222237]">
                    Normadic
                  </h1>
                </span>
                <AiFillCaretDown />
              </div>
              <div className="w-96 p-2 flex items-center justify-between">
                <span className="flex flex-row items-center">
                  <img src={MaIcon} alt="" className="pr-2" />
                  <h1 className="text-lg font-semibold text-[#222237]">
                    Match
                  </h1>
                </span>
                <AiFillCaretDown />
              </div>
            </div>

            <div className="p-4 w-1/2 ml-20">
              <img src={Portrait2} alt="" />
            </div>
          </div>
        </div>

        {/* amplify section */}
        <div className="bg-[#222237] text-[#FFFFFF] h-3/4 p-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-3">
              Amplify Your Startup&apos;s Success
            </h1>
            <p>Thousands of Founders and innovators are using us to;</p>
          </div>

          <div className="grid grid-cols-3 grid-rows-2 gap-24 p-20">
            <div className="p-10 border rounded-3xl border-[#00EC85]">
              <img src={JoinIcon} alt="" className="pt-4 pb-4" />
              <h1 className="text-xl font-bold pb-3">
                Join Premier Global Network
              </h1>
              <p>
                Unlock Opportunities with Prestigious Accelerators, Incubators,
                and Venture Studios
              </p>
            </div>

            <div className="p-10 border rounded-3xl border-[#00EC85]">
              <img src={ConnIcon} alt="" className="pt-4 pb-4" />
              <h1 className="text-xl font-bold pb-3">
                Connect with Global Investors
              </h1>
              <p>
                Raise Funds and Build Valuable Relationships with 200k+ Global
                Investors
              </p>
            </div>

            <div className="p-10 border rounded-3xl border-[#00EC85]">
              <img src={LaunIcon} alt="" className="pt-4 pb-4" />
              <h1 className="text-xl font-bold pb-3">
                Launch and Expand Globally
              </h1>
              <p>
                Take Your Startup to New Heights in 100+ World-Leading Tech Hubs
              </p>
            </div>

            <div className="p-10 border rounded-3xl border-[#00EC85]">
              <img src={FindIcon} alt="" className="pt-4 pb-4" />
              <h1 className="text-xl font-bold pb-3">
                Find Your Ideal Co-founders
              </h1>
              <p>Drive Your Vision Forward with Perfect Co-founder Matches</p>
            </div>

            <div className="p-10 border rounded-3xl border-[#00EC85]">
              <img src={ForgIcon} alt="" className="pt-4 pb-4" />
              <h1 className="text-xl font-bold pb-3">
                Forge Powerful Partnerships
              </h1>
              <p>
                Collaborate with Leading Corporations, Agencies, Governments,
                and Institutions
              </p>
            </div>

            <div className="p-10 border rounded-3xl border-[#00EC85]">
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
            <div className="text-center border border-[#222237] p-16">
              <h1 className="text-3xl font-bold mb-3">Testimonials</h1>
              <p>
                Join thousands of founders and innovators that are already
                enjoying the benefits of Techfield
              </p>
            </div>
            {/* quote div */}
            <div className="p-16 bg-[#EAFFF6] text-center font-bold">
              <p>&quot;It’s an innovative, easy to use interface. It’s not confusing; you don’t need to explain it. It’s self-servicing&quot;.</p>
              <h1>Katherine Abiola</h1>
              <p>Founder Korner</p>
            </div>

          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

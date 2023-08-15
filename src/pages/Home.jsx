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
import Arr from "../assets/Icons/arrow-trend-up.svg";
import JoinIcon from "../assets/Icons/Join Premier Global Network Icon.svg";
import ConnIcon from "../assets/Icons/Connect With Global Investors.svg";
import LaunIcon from "../assets/Icons/Launch _ Expand Globally Icon.svg";
import FindIcon from "../assets/Icons/Find Your Ideal Co-founders.svg";
import ForgIcon from "../assets/Icons/Forge Powerful.svg";
import AcceIcon from "../assets/Icons/Access Essential.svg";
import Avatar from "../assets/Images/avatar6.png";
import Blog1 from "../assets/Images/Blog 1.png";
import Blog2 from "../assets/Images/Blog 2.png";
import Dropdown from "../components/Dropdown";


const Home = () => {
  return (
    <>
      <main>
        <div className="bg-light-green md:relative md:h-screen">
          <div className="md:absolute hidden md:block md:top-8 md:left-0">
            <img src={BG} alt="" />
          </div>
          <div className="container mx-auto flex flex-col items-center px-2 py-12 sm:py-24">
            <div className="text-light-black text-center w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 md:mb-3 mt-3 sm:mb-10">
              <h1 className="text-2xl font-semibold md:text-3xl md:leading-tight">
                Unlocking Global Venture Opportunities for Underserved
                Early-Stage African Founders
              </h1>
              <p className="mt-3 font-normal text-sm md:text-xs md:mx-10">
                We connect underserved early-stage founders, innovators, and
                talents to unlimited venture support and resources to accelerate
                growth.
              </p>
            </div>
            <div className="grid grid-col gap-4 md:grid-cols-2 md:gap-6">
              <button className="focus:outline-none bg-lime-green text-light-black border border-lime-green px-4 py-2 sm:py-4 text-sm font-bold sm:text-xs sm:px-4 md:px-4 lg:text-xl rounded-lg ">
                <span className="flex ">
                  Get Started
                  <img src={Arr} alt='' className="pl-3"/>
                </span>
              </button>
              <button className=" focus:outline-none bg-transparent hover:border-lime-green hover:text-lime-green border border-light-black text-light-black px-4 py-2 sm:py-4 text-sm font-bold sm:text-xs sm:px-4 md:px-4 lg:text-xl rounded-lg">
              <span className="flex ">
                  Learn More
                  <img src={Arr} alt='' className="pl-3"/>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* section for the hero image */}
        <div className="mb-16 md:h-[40vh]">
          <div className="px-5 md:px-20 md:absolute md:top-[28rem] md:left-0">
            <img src={HeroImage} alt="" className="md:w-full" />
          </div>
          <div className="flex flex-col md:flex-row md:px-20 md:mt-40">
            <span className="mt-10 md:mt-6">
            <h3 className="text-center md:text-start md:w-4/5 text-2xl md:text-2xl font-bold md:leading-tight">Trusted by amazing startups</h3>
            </span>
            <div className="grid grid-cols-3 gap-2 md:gap-4 px-4 md:px-0 sm:grid sm:gap-6 mt-8 md:mt-0 sm:grid-cols-3 sm:grid-rows-3">
              <img src={Img1} alt="" className="sm:w-40 w-28 pt-4 px-2 md:px-0" />
              <img src={Img3} alt="" className="sm:w-40 w-28 pt-4 px-2 md:px-0" />
              <img src={Img2} alt="" className="sm:w-40 w-28 pt-4 px-2 md:px-0" />
              <img src={Img4} alt="" className="sm:w-40 w-28 pt-4 px-2 md:px-0" />
              <img src={Img5} alt="" className="sm:w-40 w-28 pt-4 px-2 md:px-0" />
              <img src={Img3} alt="" className="sm:w-40 w-28 pt-4 px-2 md:px-0" />
              <img src={Img2} alt="" className="sm:w-40 w-28 pt-4 px-2 md:px-0" />
              <img src={Img1} alt="" className="sm:w-40 w-28 pt-4 px-2 md:px-0" />
              <img src={Img4} alt="" className="sm:w-40 w-28 pt-4 px-2 md:px-0" />
            </div>
          </div>
        </div>

         {/* section for the approach */}
         <div className="bg-light-black text-white h-3/4 p-16 relative">
          <div className="absolute top-20 left-0 h-40">
            <img src={BGDark} alt="" />
          </div>
          <div className="text-center mt-10 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-3">Our approach</h1>
            <p className="text-sm">
              We support our founders by equipping, educating, and
              empowering them.
            </p>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-3 md:gap-8 md:p-2">
            <div className="p-6 mt-10 sm:mt-0 md:p-6 border rounded-3xl border-lime-green">
              <img src={Equip} alt="" className="pt-4 pb-4 w-8 md:w-9" />
              <h1 className="text-md md:text-xl font-bold pb-3">Equip</h1>
              <p className='text-xs'>
                Providing founders with the tools, resources, and guidance they
                need to thrive in the competitive tech landscape.
              </p>
            </div>

            <div className="p-6 mt-10 sm:mt-0 md:p-6 border rounded-3xl border-lime-green">
              <img src={Educate} alt="" className="pt-4 pb-4 w-8 md:w-9" />
              <h1 className="text-md md:text-xl font-bold pb-3">Educate</h1>
              <p className='text-xs'>
                Offering comprehensive educational programs and
                knowledge-sharing opportunities to help founders sharpen their
                skills and stay ahead of the curve.
              </p>
            </div>

            <div className="p-6 mt-10 sm:mt-0 md:p-6 border rounded-3xl border-lime-green">
              <img src={Empower} alt="" className="pt-4 pb-4 w-8 md:w-9" />
              <h1 className="text-md md:text-xl font-bold pb-3">Empower</h1>
              <p className='text-xs'>
                Enabling founders to take charge of their entrepreneurial
                journey, fostering confidence, resilience, and the ability to
                make impactful decisions.
              </p>
            </div>
          </div>
        </div>


         {/* new section */}
         <div className="flex flex-col px-1 mt-20">
          {/* upper section div */}
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-10 md:px-16 justify-between">
            <div className="p-4 md:p-0 md:mr-0">
              <img src={Portrait} alt="" className="mt-6 md:mt-5"/>
            </div>
            <div className="p-4 md:p-6 md:mt-12">
              <h1 className="text-xl font-bold mb-4 md:mb-2 text-light-black">
                Building tools for founders and innovators in emerging markets.
              </h1>
              <p className="text-light-black mb-10 md:mb-3 md:text-xs">
                At Techfield, we are committed to Unlocking global venture
                opportunities and empowering underserved early-stage African
                founders to accelerate growth, drive innovation, and make their
                mark in the tech industry.
              </p>
              <button className="focus:outline-none bg-lime-green lg:text-xl font-bold rounded-md text-light-black border border-lime-green px-4 py-2 md:text-xs">
                <span className="flex ">
                  Learn More
                  <img src={Arr} alt='' className="pl-3 md:w-6 "/>
                </span>
              </button>
            </div>
          </div>


            {/* lower section div */}
            <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-10 md:px-16 md:mt-12 justify-between">
            <div className="p-4 md:p-6 md:mt-12">
              <h1 className="text-xl font-bold mb-4 md:mb-2 text-light-black">
                Made for African founders & startups
              </h1>
              <p className="text-light-black mb-10 md:mb-3 md:text-xs">
                Discover products to help you grow and scale your startup.
              </p>
              {/* div for the dropdown */}
              <Dropdown />
            </div>
            <div className="p-4 md:p-0 md:mr-0">
              <img src={Portrait2} alt="" className="mt-6 md:mt-16"/>
            </div>
          </div>
          
        </div>

        {/* amplify section */}
        <div className="bg-light-black text-white h-1/2 p-16 relative xs:mt-16">
        <div className="hidden md:absolute md:top-[21rem] md:left-[-16rem] md:w-[100rem] md:h-[100rem">
            <img src={BGDark} alt="" />
          </div>
          <div className="text-center mt-10 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-3">
              Amplify Your Startup&apos;s Success
            </h1>
            <p className="text-sm">Thousands of Founders and innovators are using us to</p>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-3 md:gap-8 md:p-2">
            <div className="p-6 mt-10 sm:mt-0 md:p-4 border rounded-3xl border-lime-green">
              <img src={JoinIcon} alt="" className="pt-4 pb-4 w-8 md:w-9" />
              <h1 className="text-md md:text-lg font-bold pb-3">
                Join Premier Global Network
              </h1>
              <p className='text-xs'>
                Unlock Opportunities with Prestigious Accelerators, Incubators,
                and Venture Studios
              </p>
            </div>

            <div className="p-6 mt-10 sm:mt-0 md:p-4 border rounded-3xl border-lime-green">
              <img src={ConnIcon} alt="" className="pt-4 pb-4 w-8 md:w-9" />
              <h1 className="text-md md:text-lg font-bold pb-3">
                Connect with Global Investors
              </h1>
              <p className='text-xs'>
                Raise Funds and Build Valuable Relationships with 200k+ Global
                Investors
              </p>
            </div>

            <div className="p-6 mt-10 sm:mt-0 md:p-4 border rounded-3xl border-lime-green">
              <img src={LaunIcon} alt="" className="pt-4 pb-4 w-8 md:w-9" />
              <h1 className="text-md md:text-lg font-bold pb-3">
                Launch and Expand Globally
              </h1>
              <p className='text-xs'>
                Take Your Startup to New Heights in 100+ World-Leading Tech Hubs
              </p>
            </div>

            <div className="p-6 mt-10 sm:mt-0 md:p-4 border rounded-3xl border-lime-green">
              <img src={FindIcon} alt="" className="pt-4 pb-4 w-8 md:w-9" />
              <h1 className="text-md md:text-lg font-bold pb-3">
                Find Your Ideal Co-founders
              </h1>
              <p className='text-xs'>Drive Your Vision Forward with Perfect Co-founder Matches</p>
            </div>

            <div className="p-6 mt-10 sm:mt-0 md:p-4 border rounded-3xl border-lime-green">
              <img src={ForgIcon} alt="" className="pt-4 pb-4 w-8 md:w-9" />
              <h1 className="text-md md:text-lg font-bold pb-3">
                Forge Powerful Partnerships
              </h1>
              <p className='text-xs'>
                Collaborate with Leading Corporations, Agencies, Governments,
                and Institutions
              </p>
            </div>

            <div className="p-6 mt-10 sm:mt-0 md:p-4 border rounded-3xl border-lime-green">
              <img src={AcceIcon} alt="" className="pt-4 pb-4 w-8 md:w-9" />
              <h1 className="text-md md:text-lg font-bold pb-3">
                Access Essential Venture Tools
              </h1>
              <p className='text-xs'>
                Empower Your Startup&apos;s Success with 250+ Discounted Venture
                Building Tools
              </p>
            </div>
          </div>
        </div>

         {/* testimonials section */}
         <div className="mb-20">

          {/* testimonials heading */}
          <div className="md:mt-28">
            <div className="text-center p-16 md:p-0 pb-10 md:pb-10">
              <h1 className="text-3xl font-bold mb-3">Testimonials</h1>
              <p className="md:mx-44">
                Join thousands of founders and innovators that are already
                enjoying the benefits of Techfield
              </p>
            </div>
            
            {/* quote div */}
            <div className="flex items-center justify-center xs:px-5">
              <div className="md:mx-5">
                <div className="bg-green-200 rounded-2xl py-10 px-10 md:px-28 m-0 md:w-[35rem]">
                  <blockquote className="p-0 mb-3 font-bold xs:text-center md:text-sm">
                    &quot;It’s an innovative, easy to use interface. It’s not
                    confusing; you don’t need to explain it. It’s
                    self-servicing&quot;.
                  </blockquote>
                  <div className="text-center">
                    <h1 className="font-bold text-xl md:text-lg">Katherine Abiola</h1>
                    <p>Founder Korner</p>
                  </div>
                </div>
              </div>
            </div>
            {/* avatar div */}
            <div className="flex items-center justify-center mt-10">
              <div className="flex justify-between w-96 md:w-80 xs:px-5">
                <img src={Avatar} alt="" className="w-12 h-12 md:w-14 md:h-14 rounded-full" />
                <img src={Avatar} alt="" className="w-12 h-12 md:w-14 md:h-14 rounded-full" />
                <img src={Avatar} alt="" className="w-12 h-12 md:w-14 md:h-14 rounded-full" />
                <img src={Avatar} alt="" className="w-12 h-12 md:w-14 md:h-14 rounded-full" />
              </div>
            </div>
          </div>
        </div>

         {/* article div */}
         <div className="mb-40 md:mb-32 md:mt-40">
          <div className="flex items-center justify-center">
            <div className="md:flex md:justify-between md:w-[75%]">
              <div className="text-center md:text-start md:w-80">
                <h1 className="text-xl md:text-2xl font-bold text-light-black">
                  Take a look at our articles & resources
                </h1>
              </div>
              <button className="hidden md:block focus:outline-none bg-lime-green text-light-black border border-lime-green px-4 py-2 sm:py-4 text-sm font-bold sm:text-xs sm:px-4 md:px-4 lg:text-xl rounded-lg ">
                <span className="flex ">
                  Browse Articles
                  <img src={Arr} alt='' className="pl-3"/>
                </span>
              </button>
            </div>
          </div>

          {/* cards */}
          <div className="flex flex-col px-5 mt-10 md:px-24">
          <div className="flex flex-col mb-10 md:mb-12 md:flex-row justify-between md:items-center p-4 md:w-[36rem] shadow-xl shadow-slate-200 rounded-2xl">
            <img
              src={Blog1}
              alt=""
              className="md:w-52 md:h-52 object-cover rounded-xl"
            />
            <div className="flex flex-col mt-3 md:mt-0 md:pl-4">
              <h1 className="font-bold text-sm mb-2 md:pr-12">
                Early-Stage Startup Investment in Africa report in 2023
              </h1>
              <p className="text-sm mb-4">
                Discover products to help you grow and scale your startup. Or
                maybe you say Or collaborative learning.
              </p>
              <h3 className="font-bold text-sm">Read More</h3>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between md:items-center p-4 md:w-[36rem] shadow-xl shadow-slate-200 rounded-2xl">
            <img
              src={Blog2}
              alt=""
              className="md:w-52 md:h-52 object-cover rounded-xl"
            />
            <div className="flex flex-col mt-3 md:mt-0 md:pl-4">
              <h1 className="font-bold text-sm mb-2 md:pr-12">
                Africa Start-up and Technology Developments in 2023
              </h1>
              <p className="text-sm mb-4">
                Discover products to help you grow and scale your startup. Or
                maybe you say Or collaborative learning.
              </p>
              <h3 className="font-bold text-sm">Read More</h3>
            </div>
          </div>
          </div>

          <div className="px-5 mt-5 md:hidden">
          <button className="bg-lime-green px-10 py-5 rounded-xl font-bold">
                <span className="flex items-center">
                  Browse Articles
                  <img src={Arr} alt="" className="pl-2" />
                </span>
          </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

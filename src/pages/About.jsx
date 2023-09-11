// import React from 'react'
import BG from "../assets/Images/Background Graphic Element.svg";
import BGDark from "../assets/Images/Dark Background Element.svg";
import AboutImage1 from "../assets/Images/About Image 1.png";
import AboutImage2 from "../assets/Images/About Image 2.png";
import AboutImage3 from "../assets/Images/Why we do, what we do..png";
import SupIcon from "../assets/Icons/Support.svg";
import ComIcon from "../assets/Icons/Community.svg";
import HelpIcon from "../assets/Icons/Help.svg";
import CEO from "../assets/Images/CEO Remark.png";
import Office from "../assets/Images/Techfield Office.png"
import Arr from '../assets/Icons/arrow-trend-up.svg'


const About = () => {
  return (
    <>
      <main>
        <div className="bg-light-green md:relative md:h-screen">
        <div className="md:absolute hidden md:block md:lg:top-8 md:lg:left-0">
          {/* <div className="absolute top-8 left-0 flex flex-row"> */}
            <img src={BG} alt="" />
          </div>
          <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="text-light-black text-center w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 md:mb-3 mt-3 sm:mb-10">
              <h1 className="text-2xl font-semibold md:text-3xl xl:text-5xl md:leading-tight xl:leading-tight lg:mx-20 xl:mx-0">
                Techfield is building navigational tools for underrepresented
                founders and innovators in emerging markets.
              </h1>
              <p className="mt-3 font-normal text-sm md:text-xs xl:text-lg md:mx-10 lg:mx-28 xl:mx-24 lg:mb-5">
                Be part of Techfield today and expand your horizons and tap into
                a world of global venture opportunities
              </p>
            </div>
            <div className="flex justify-center items-center">
            <button className="bg-lime-green transition lg:text-xl font-bold rounded-lg text-light-black px-4 sm:px-10 border border-lime-green py-2 sm:py-4 text-sm">
                <span className="flex ">
                  Get Started
                  <img src={Arr} alt='' className="pl-3"/>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* section for the hero images */}
        <div className="md:h-[80vh]">
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8 xl:gap-10 px-5 md:px-12 md:absolute md:top-[32rem] xl:top-[38rem] md:left-0 lg:left-20 xl:left-28">
            <img
              src={AboutImage1}
              alt=""
              className="md:w-80 md:h-80 lg:w-full xl:w-full xl:h-96 rounded-3xl object-cover"
            />
            <img
              src={AboutImage2}
              alt=""
              className="mt-10 md:mt-0 md:w-80 lg:w-80 xl:w-[26rem] object-cover rounded-3xl"
            />
          </div>

          <div className="container flex flex-col md:grid md:grid-cols-2 md:gap-12 px-5 md:px-12 mt-32 md:mt-[20rem] lg:mt-[21rem] xl:mt-[30rem] md:mx-auto lg:px-32">
            <span className="">
              <img
                src={AboutImage3}
                alt=""
                className="md:h-80 lg:h-96 xl:w-full xl:h-[30rem] object-cover rounded-3xl"
              />
            </span>
            <div className="flex flex-col mt-5 md:mt-1">
              <h1 className="text-3xl md:text-2xl xl:text-4xl font-bold pb-5">
                Why we do, what we do.
              </h1>
              <p className="pb-3 text-sm md:text-xs lg:text-sm xl:text-lg">
                In Africa, more than 70% of total venture capital funding and
                resources goes to diasporan founders or entrepreneurs with
                foreign background, leaving the local founders at the mercy of
                very limited ecosystem support.
              </p>
              <p className="pb-3 text-sm md:text-xs lg:text-sm xl:text-lg">
                We understand that the information and access gap is inhibiting
                the growth of digital technology in the continent. This is the
                main drive behind Techfield.
              </p>
              <p className="text-sm md:text-xs lg:text-sm xl:text-lg">
                We&apos;re sourcing all available venture-building opportunities
                across the globe; From Silicon valley in the US to London in the
                UK, United Arab Emirates, Singapore, Germany, etc, and bringing
                all of this into one platform.
              </p>
            </div>
          </div>
        </div>

        {/* third section */}
        <div className="bg-light-black text-white px-5 md:px-12 lg:px-32 py-16 md:py-20 md:relative flex flex-col md:grid md:grid-cols-2 md:gap-12 lg:gap-16 xl:gap-20 justify-between">
          <div className="hidden md:block md:absolute md:top-32 md:left-0 md:h-40">
            <img src={BGDark} alt="" />
          </div>
          <div className="flex flex-col justify-between xl:px-5">
            <h1 className="text-xl md:text-2xl xl:text-4xl font-bold mb-10 md:mb-3">
              Unlocking and connecting African startups with global
              opportunities
            </h1>
            <div className="flex flex-row justify-between">
              <span className="flex flex-col">
                <p className="text-2xl md:text-3xl xl:text-4xl font-medium mb-1">20+</p>
                <p className='md:text-sm xl:text-xl'>Startups Empowered</p>
              </span>
              <span className="flex flex-col">
                <p className="text-2xl md:text-3xl xl:text-4xl font-medium mb-1">$500k</p>
                <p className='md:text-sm xl:text-xl'>Seed Capital Raised</p>
              </span>
            </div>
          </div>

          <div className="flex flex-col mt-12 md:mt-0">
            <div className="mb-14">
              <span className="flex items-center mb-4">
                <img src={SupIcon} alt="" />
                <h1 className="text-xl xl:text-2xl font-bold pl-4">
                  Round-the-clock Support
                </h1>
              </span>
              <p className='md:text-sm xl:text-xl'>
                We have real people who help you through your problems 24/7,
                whether they’re helping you take the first step or the next
                step.
              </p>
            </div>
            <div className="mb-14">
              <span className="flex items-center mb-4">
                <img src={ComIcon} alt="" />
                <h1 className="text-xl xl:text-2xl font-bold pl-4">Friendly Community</h1>
              </span>
              <p className='md:text-sm xl:text-xl'>
                A rich community to connect with other bright folks who are
                making their own way. Exchange ideas, share experiences, move
                forward.
              </p>
            </div>
            <div>
              <span className="flex items-center mb-4">
                <img src={HelpIcon} alt="" />
                <h1 className="text-xl xl:text-2xl font-bold pl-4">Help & Advice</h1>
              </span>
              <p className='md:text-sm xl:text-xl'>
                We cover it all. From how-to videos to expertly-authored blog
                posts, we&apos;ve got tons of inspiration and solid advice
                waiting for you.
              </p>
            </div>
          </div>
        </div>

        {/* fourth section */}
        <div className="flex flex-col mb-20 md:mb-0 mt-20 px-5 md:px-12 lg:px-32 md:mt-0 md:p-32">
          {/* upper section div */}
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-12 lg:gap-20 xl:gap-32 ">
  
            <div className="">
              <h1 className="text-xl mt-5 md:mt-2 md:text-xl xl:text-4xl font-bold mb-5 md:mb-3 text-light-black">
                Democratizing access to global venture-building opportunities to
                founders in Africa.
              </h1>
              <p className="text-light-black mb-3 md:mb-3 md:text-sm lg:text-md xl:text-lg">
                We pay more attention to impact-driven Founders, solving some of
                the world&apos;s biggest challenges and addressing at least 5 of
                UN&apos;s sustainable goals.
              </p>
              <p className="text-light-black md:text-sm lg:text-md xl:text-lg">
                To all early stage startup founders, Techfield is your catalyst
                for innovation and growth, get access to tools, support, and
                opportunities to ignite innovation and fuel your entrepreneurial
                journey. Let&apos;s build together. Welcome to Techfield.
              </p>
            </div>

            <div className="">
              <img src={CEO} alt="" className="md:h-[21rem] xl:w-full xl:h-full md:object-cover md:rounded-3xl"/>
            </div>

          </div>

          {/* lower section div */}
          <div className="w-full">
            <h1 className="text-xl md:text-2xl xl:text-4xl font-bold mt-20 md:mt-40 mb-8 md:mx-36 xl:mx-72 text-light-black text-center">Come and visit our offices around the world</h1>
            <div className="flex flex-col md:grid md:grid-cols-2 md:gap-12 xl:gap-0 md:justify-between items-center">
            <div className="">
              <img src={Office} alt="" className="mb-8 md:mb-0"/>
            </div>
            <div className="md:px-6 xl:px-36">
              <div className="mb-8">
                <h1 className="text-xl md:text-2xl xl:text-3xl font-bold mb-3 text-light-black">Uyo, Nigeria</h1>
                <p className="text-sm xl:text-lg">Suite 216, Ibom E-Library Uyo, Akwa Ibom State.Nigeria.</p>
              </div>

              <div className="">
                <h1 className="text-xl md:text-2xl xl:text-3xl font-bold mb-3 text-light-black">London Office</h1>
                <p className="text-sm xl:text-lg">2H Woodstock Studios 36 Woodstock Grove London, W12 8LE United Kingdom</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;

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



const About = () => {
  return (
    <>
      <main>
        <div className="bg-cover bg-center bg-[#EAFFF6] h-screen relative">
          <div className="absolute top-8 left-0 flex flex-row">
            <img src={BG} alt="" />
          </div>
          <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 mt-7 sm:mb-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-[#222237] font-black leading-7 md:leading-10">
                Techfield is building navigational tools for underrepresented
                founders and innovators in emerging markets.
              </h1>
              <p className="mt-5 sm:mt-10 lg:w-10/12 text-[#222237] font-normal text-center text-sm sm:text-lg">
                Be part of Techfield today and expand your horizons and tap into
                a world of global venture opportunities
              </p>
            </div>
            <div className="flex justify-center items-center">
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00EC85] bg-[#00EC85] transition duration-150 ease-in-out hover:bg- lg:text-xl lg:font-bold  rounded-xl text-[#222237] px-4 sm:px-10 border border-[#00EC85] py-2 sm:py-4 text-sm">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* section for the hero images */}
        <div className="h-screen">
          <div className="container mx-auto flex justify-around pr-36 pl-36 absolute top-[48rem] left-10">
            <img
              src={AboutImage1}
              alt=""
              className="w-[32rem] h-[25rem] rounded-3xl object-cover"
            />
            <img
              src={AboutImage2}
              alt=""
              className="w-96 h-[30rem] object-cover rounded-3xl "
            />
          </div>
          <div className="container flex flex-row h-1/2 mt-[40rem] justify-between mx-auto pl-[11rem] pr-48">
            <span className="w-96">
              <img
                src={AboutImage3}
                alt=""
                className="w-96 h-[27rem] object-cover rounded-3xl"
              />
            </span>
            <div className="flex flex-col w-[24rem]">
              <h1 className="text-3xl font-bold pb-2">
                Why we do, what we do.
              </h1>
              <p className="pb-3">
                In Africa, more than 70% of total venture capital funding and
                resources goes to diasporan founders or entrepreneurs with
                foreign background, leaving the local founders at the mercy of
                very limited ecosystem support.
              </p>
              <p className="pb-3">
                We understand that the information and access gap is inhibiting
                the growth of digital technology in the continent. This is the
                main drive behind Techfield.
              </p>
              <p className="pb-3">
                We&apos;re sourcing all available venture-building opportunities
                across the globe; From Silicon valley in the US to London in the
                UK, United Arab Emirates, Singapore, Germany, etc, and bringing
                all of this into one platform.
              </p>
            </div>
          </div>
        </div>

        {/* third section */}
        <div className="bg-[#222237] text-[#FFFFFF] h-3/4 p-40 relative flex justify-between">
          <div className="absolute top-20 left-0 h-40">
            <img src={BGDark} alt="" />
          </div>
          <div className="w-96 flex flex-col justify-between">
            <h1 className="text-3xl font-bold mb-3">
              Unlocking and connecting African startups with global
              opportunities
            </h1>
            <div className="flex justify-between">
              <span className="flex flex-col">
                <p className="text-5xl font-medium mb-1">20+</p>
                <p>Startups Empowered</p>
              </span>
              <span className="flex flex-col">
                <p className="text-5xl font-medium mb-1">$500k</p>
                <p>Seed Capital Raised</p>
              </span>
            </div>
          </div>

          <div className="flex flex-col w-96">
            <div className="mb-14">
              <span className="flex items-center mb-4">
                <img src={SupIcon} alt="" />
                <h1 className="text-xl font-bold pl-4">
                  Round-the-clock Support
                </h1>
              </span>
              <p>
                We have real people who help you through your problems 24/7,
                whether they’re helping you take the first step or the next
                step.
              </p>
            </div>
            <div className="mb-14">
              <span className="flex items-center mb-4">
                <img src={ComIcon} alt="" />
                <h1 className="text-xl font-bold pl-4">Friendly Community</h1>
              </span>
              <p>
                A rich community to connect with other bright folks who are
                making their own way. Exchange ideas, share experiences, move
                forward.
              </p>
            </div>
            <div>
              <span className="flex items-center mb-4">
                <img src={HelpIcon} alt="" />
                <h1 className="text-xl font-bold pl-4">Help & Advice</h1>
              </span>
              <p>
                We cover it all. From how-to videos to expertly-authored blog
                posts, we&apos;ve got tons of inspiration and solid advice
                waiting for you.
              </p>
            </div>
          </div>
        </div>

        {/* fourth section */}
        <div className="flex flex-col p-32">
          {/* upper section div */}
          <div className="flex flex-row-reverse justify-between align-middle ">
            <div className="p-6 w-1/2 ml-20">
              <img src={CEO} alt="" />
            </div>
            <div className="p-3 mt-16 w-1/2">
              <h1 className="text-4xl font-bold mb-7 text-[#222237]">
                Democratizing access to global venture-building opportunities to
                founders in Africa.
              </h1>
              <p className="text-[#222237] mb-7">
                We pay more attention to impact-driven Founders, solving some of
                the world&apos;s biggest challenges and addressing at least 5 of
                UN&apos;s sustainable goals.
              </p>
              <p className="text-[#222237]">
                To all early stage startup founders, Techfield is your catalyst
                for innovation and growth, get access to tools, support, and
                opportunities to ignite innovation and fuel your entrepreneurial
                journey. Let&apos;s build together. Welcome to Techfield.
              </p>
            </div>
          </div>

          {/* lower section div */}
          <div className="w-full">
            <h1 className="text-3xl font-bold mt-40 mb-5 text-[#222237] text-center">Come and visit our offices <pre className="text-3xl font-bold mb-3 text-[#222237]">around the world</pre></h1>
            <div className="flex justify-between items-center">
            <div className="w-[70%]">
              <img src={Office} alt="" className="h-[25rem] w-[40rem] object-cover rounded-3xl"/>
            </div>
            <div className="w-[30%]">
              <div className="w-[16.5rem] mb-16">
                <h1 className="text-3xl font-bold mb-3 text-[#222237]">Uyo, Nigeria</h1>
                <p>Suite 216, Ibom E-Library Uyo, Akwa Ibom State.Nigeria.</p>
              </div>

              <div className="w-[16.5rem]">
                <h1 className="text-3xl font-bold mb-3 text-[#222237]">London Office</h1>
                <p>2H Woodstock Studios 36 Woodstock Grove London, W12 8LE United Kingdom</p>
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

// import React from 'react'
import BG from "../assets/Images/Background Graphic Element.svg";
import Img1 from "../assets/Companies Logos/62ea4e159b98557bdd40b938_Company logo.svg";
import Img2 from "../assets/Companies Logos/62ea4e159c9dd47ae626cb4e_Company logo-2.svg";
import Img3 from "../assets/Companies Logos/62ea4e159d1225438feb960b_Company logo-1.svg";
import Arrow from "../assets/Icons/arrow-trend-up.svg";
import Message from "../assets/Icons/Message Us.svg"
import Call from "../assets/Icons/Call Us.svg"
import Office from "../assets/Images/Techfield Office.png"



const Contact = () => {
  return (
    <>
      <main>
        <div className="bg-light-green md:h-screen md:relative">
          <div className="hidden md:absolute md:top-[1.8rem] md:left-0 md:flex md:flex-row">
            <img src={BG} alt="" />
          </div>
          <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center text-center md:text-start flex-col mt-3 ">
              <h1 className="text-2xl font-semibold md:text-5xl md:leading-tight">
                Get in touch for queries, assistance and more.
              </h1>
              <p className="mt-3 font-normal text-sm md:text-lg md:mx-24">
                We offer unmatched 24x7 customer support.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:mt-[-3rem]">
            <div className="text-center">
              <h1 className="text-xl md:text-3xl font-bold">
                Trusted by amazing startups
              </h1>
            </div>
            <div className="bg-light-green flex justify-between px-5 md:px-[26rem]">
            <img src={Img1} alt="" className="w-20 h-20 md:w-28 md:h-28" />
            <img src={Img3} alt="" className="w-20 h-20 md:w-28 md:h-28" />
            <img src={Img2} alt="" className="w-20 h-20 md:w-28 md:h-28" />
            </div>
          </div>
        </div>

        {/* form card section */}
        <div className="px-5 md:px-0 md:container md:h-screen">
          <div className="md:absolute md:top-[37rem] px-5 md:px-0 md:left-36 bg-white shadow-2xl shadow-slate-200 rounded-3xl md:w-[80%]">
            <h1 className="text-2xl md:text-3xl font-semibold text-center mt-16 mb-8">
              Fill the form or Send us an email
            </h1>
            <form className="flex flex-col pb-16">

              <div className="flex flex-col md:flex-row justify-around items-center mb-4 md:mb-8 md:px-20">
                <div className="flex flex-col mb-4 md:mb-0">
                  <label className="font-semibold text-md md:text-xl text-light-black mb-4">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Eg, Kunle Matthew"
                    className="p-5 md:pr-40 rounded-xl border border-lime-green"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-semibold text-md md:text-xl text-light-black mb-4">
                    Startup Name
                  </label>
                  <input
                    type="text"
                    placeholder="Eg, Engango"
                    className="p-5 md:pr-40 rounded-xl border border-lime-green"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-around items-center mb-4 md:mb-8 md:px-20">
                <div className="flex flex-col mb-4 md:mb-0">
                  <label className="font-semibold text-md md:text-xl text-light-black mb-4">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Eg, email@example.com"
                    className="p-5 md:pr-40 rounded-xl border border-lime-green"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-semibold text-md md:text-xl text-light-black mb-4">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    placeholder="Eg, +234 806 723 6644"
                    className="p-5 md:pr-40 rounded-xl border border-lime-green"
                  />
                </div>
              </div>
              
              <div className="flex flex-col xsl:px-6 md:px-[6.5rem] mb-10 md:mb-20">
                <label className="font-semibold text-md md:text-xl text-light-black mb-4">
                  Message
                </label>
                <textarea
                  placeholder="How can we help you?"
                  cols={20}
                  rows={5}
                  className="p-5 md:pr-40 rounded-xl border border-lime-green"
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button className="focus:outline-none bg-lime-green lg:text-xl font-bold rounded-xl text-light-black px-4 sm:px-10 border border-lime-green py-2 sm:py-4 text-sm">
                  <span className="flex items-center">
                    Send Message
                    <img src={Arrow} alt="" className="pl-3" />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* two cards section */}
        <div className="flex flex-col md:flex-row justify-between px-5 md:px-40 mt-20 md:mt-40">
          <div className="bg-light-black md:w-[45%] mb-16 md:mb-0 p-16 md:p-20 rounded-xl md:rounded-3xl text-white flex flex-col items-center">
            <img src={Message} alt="" />
            <h1 className="text-xl md:text-3xl font-semibold">Message Us</h1>
            <p>support@techfield.africa</p>
          </div>

          <div className="bg-light-black md:w-[45%] p-16 md:p-20 rounded-xl md:rounded-3xl text-white flex flex-col items-center">
            <img src={Call} alt="" />
            <h1 className="text-xl md:text-3xl font-semibold">Call Us</h1>
            <p>+234 905 730 8845</p>
          </div>
        </div>

        {/* last section */}
        <div className="w-full px-5 md:p-32 pb-16 md:pb-0">
            <h1 className="text-xl md:text-3xl font-bold mt-20 md:mt-40 mb-5 md:mx-80 text-light-black text-center">Come and visit our offices around the world</h1>
            <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="md:w-[70%]">
              <img src={Office} alt="" className="md:h-[25rem] md:w-[40rem] object-cover md:rounded-3xl"/>
            </div>
            <div className="mt-5 md:mt-0 md:w-[30%]">
              <div className="md:w-[16.5rem] mb-8 md:mb-16">
                <h1 className="text-xl md:text-3xl font-bold mb-3 text-light-black">Uyo, Nigeria</h1>
                <p>Suite 216, Ibom E-Library Uyo, Akwa Ibom State.Nigeria.</p>
              </div>

               <div className="md:w-[16.5rem]">
                <h1 className="text-xl md:text-3xl font-bold mb-3 text-light-black">London Office</h1>
                <p>2H Woodstock Studios 36 Woodstock Grove London, W12 8LE United Kingdom</p>
              </div>
            </div>
          </div>
          </div>
      </main>
    </>
  );
};

export default Contact;

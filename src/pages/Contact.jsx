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
        <div className="bg-light-green h-screen relative">
          <div className="absolute top-[1.8rem] left-0 flex flex-row">
            <img src={BG} alt="" />
          </div>
          <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mt-2 ">
              <h1 className="text-5xl text-center text-light-black leading-tight font-semibold">
                Get in touch for queries, assistance and more.
              </h1>
              <p className="mt-3 font-normal text-center text-lg text-light-black">
                We offer unmatched 24x7 customer support.
              </p>
            </div>
          </div>

          <div className="flex flex-col mt-[-3rem]">
            <div className="text-center">
              <h1 className="text-3xl font-bold">
                Trusted by amazing startups
              </h1>
            </div>
            <div className="bg-light-green flex justify-between pl-[26rem] pr-[26rem]">
              <img src={Img1} alt="" className="w-28 h-28" />
              <img src={Img3} alt="" className="w-28 h-28" />
              <img src={Img2} alt="" className="w-28 h-28" />
            </div>
          </div>
        </div>

        {/* form card section */}
        <div className="container">
          <div className="shadow-2xl shadow-slate-200 rounded-3xl w-[80%] ml-40 ">
            <h1 className="text-3xl font-semibold text-center mt-16 mb-8">
              Fill the form or Send us an email
            </h1>
            <form className="flex flex-col pb-16">
              <div className="flex flex-row justify-around items-center mb-8 pl-20 pr-20">
                <div className="flex flex-col">
                  <label className="font-semibold text-xl text-light-black mb-4">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Eg, Kunle Matthew"
                    className="p-5 pr-40 rounded-xl border border-lime-green"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-semibold text-xl text-light-black mb-4">
                    Startup Name
                  </label>
                  <input
                    type="text"
                    placeholder="Eg, Engango"
                    className="p-5 pr-40 rounded-xl border border-lime-green"
                  />
                </div>
              </div>

              <div className="flex flex-row justify-around mb-8 pl-20 pr-20">
                <div className="flex flex-col">
                  <label className="font-semibold text-xl text-light-black mb-4">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Eg, email@example.com"
                    className="p-5 pr-40 rounded-xl border border-lime-green"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-semibold text-xl text-light-black mb-4">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    placeholder="Eg, +234 806 723 6644"
                    className="p-5 pr-40 rounded-xl border border-lime-green"
                  />
                </div>
              </div>

              <div className="flex flex-col pl-[6.5rem] pr-[6.5rem] mb-20">
                <label className="font-semibold text-xl text-light-black mb-4">
                  Message
                </label>
                <textarea
                  placeholder="How can we help you?"
                  cols={20}
                  rows={5}
                  className="p-5 pr-40 rounded-xl border border-lime-green"
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-green bg-lime-green transition duration-150 ease-in-out hover:bg- lg:text-xl lg:font-bold  rounded-xl text-light-black px-4 sm:px-10 border border-lime-green py-2 sm:py-4 text-sm">
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
        <div className="flex justify-between pl-40 pr-40  mt-40">
          <div className="bg-light-black w-[45%] p-20 rounded-3xl text-white flex flex-col items-center">
            <img src={Message} alt="" />
            <h1 className="text-3xl font-semibold">Message Us</h1>
            <p>support@techfield.africa</p>
          </div>

          <div className="bg-light-black w-[45%] rounded-3xl p-20 text-white flex flex-col items-center">
            <img src={Call} alt="" />
            <h1 className="text-3xl font-semibold">Call Us</h1>
            <p>+234 905 730 8845</p>
          </div>
        </div>

        {/* last section */}
        <div className="w-full p-32 pt-0">
            <h1 className="text-3xl font-bold mt-40 text-light-black text-center">Come and visit our offices</h1>
            <h1 className="text-3xl font-bold mb-5 text-light-black text-center">around the world</h1>
            <div className="flex justify-between items-center">
            <div className="w-[70%]">
              <img src={Office} alt="" className="h-[25rem] w-[40rem] object-cover rounded-3xl"/>
            </div>
            <div className="w-[30%]">
              <div className="w-[16.5rem] mb-16">
                <h1 className="text-3xl font-bold mb-3 text-light-black">Uyo, Nigeria</h1>
                <p>Suite 216, Ibom E-Library Uyo, Akwa Ibom State.Nigeria.</p>
              </div>

              <div className="w-[16.5rem]">
                <h1 className="text-3xl font-bold mb-3 text-light-black">London Office</h1>
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

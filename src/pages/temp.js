        {/* section for the hero image */}
        <div className="h-[65vh]">
          <div className="container mx-auto flex justify-center absolute top-[39rem] left-10">
            <img src={HeroImage} alt="" className="w-4/5" />
          </div>
          <div className="container flex flex-row h-4/5 mt-[30rem] justify-between mx-auto p-16 pl-32 pr-32">
            <span className="w-64">
            <h3 className="text-4xl font-bold leading-tight">Trusted by amazing startups</h3>
            </span>
            <div className="grid gap-10 grid-cols-3 grid-rows-3"> max-w-[374px] flex flex-wrap justify-between
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
          <div className="text-center mt-10">
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
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-green bg-lime-green transition duration-150 ease-in-out hover:bg- lg:text-xl lg:font-bold rounded-lg text-light-black px-4 sm:px-10 border border-lime-green py-2 sm:py-4 text-sm">
                <span className="flex ">
                  Learn More
                  <img src={Arr} alt='' className="pl-3"/>
                </span>
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
                    <img src={ArrGreen} alt="" className="w-6 h-6"/>
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
                <PiCaretDown className="mr-3"/>
              </div>
              <div className="w-96 p-2 flex items-center justify-between">
                <span className="flex flex-row items-center">
                  <img src={NorIcon} alt="" className="pr-2" />
                  <h1 className="text-lg font-semibold text-light-black">
                    Normadic
                  </h1>
                </span>
                <PiCaretDown className="mr-3"/>
              </div>
              <div className="w-96 p-2 flex items-center justify-between">
                <span className="flex flex-row items-center">
                  <img src={MaIcon} alt="" className="pr-2" />
                  <h1 className="text-lg font-semibold text-light-black">
                    Match
                  </h1>
                </span>
                <PiCaretDown className="mr-3"/>
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
        <div className="mb-20">
          {/* testimonials */}
          <div className="p-16">
            <div className="text-center p-16 pb-10">
              <h1 className="text-3xl font-bold mb-3">Testimonials</h1>
              <p className=" mr-[22rem] ml-[22rem]">
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

        {/* article div */}
        <div className="mb-40">
          <div className="flex items-center justify-center">
            <div className="flex justify-between w-[75%]">
              <div className="w-96">
                <h1 className="text-3xl font-bold text-light-black">
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
          <div className="flex flex-row justify-between items-center p-4 w-[30rem] shadow-xl shadow-slate-200 rounded-2xl">
            <img
              src={Blog1}
              alt=""
              className="w-48 h-48 object-cover rounded-xl"
            />
            <div className="flex flex-col pl-4">
              <h1 className="font-bold text-sm mb-2 pr-12">
                Early-Stage Startup Investment in Africa report in 2023
              </h1>
              <p className="text-sm mb-4">
                Discover products to help you grow and scale your startup. Or
                maybe you say Or collaborative learning.
              </p>
              <h3 className="font-bold text-sm">Read More</h3>
            </div>
          </div>

          <div className="flex flex-row justify-between items-center p-4 w-[30rem] shadow-xl shadow-slate-200 rounded-2xl">
            <img
              src={Blog2}
              alt=""
              className="w-48 h-48 object-cover rounded-xl"
            />
            <div className="flex flex-col pl-4">
              <h1 className="font-bold text-sm mb-2 pr-12">
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
        </div>


<div className='relative inline-block text-left'>
<button
    ref={dropDownButton}
    onClick={() => setIsOpen(!isOpen)}
    className='text-white bg-lime-green'
>
    Trigger Button
</button>
{isOpen && (
    <div
        ref={dropDownMenu}
        className='absolute bg-white border-shadow rounded-md'
    >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </div>
)}
</div>



// for home
<div className="container flex flex-col">
<span className="mt-5 md:mt-[13rem]">
<h3 className="text-2xl text-center md:text-4xl font-bold md:leading-tight">Trusted by amazing startups</h3>
</span>
<div className="grid grid-cols-3 gap-2 px-4 sm:grid sm:gap-6 mt-10 sm:mt-0 md:p-10 sm:grid-cols-3 sm:grid-rows-3">
  <img src={Img1} alt="" className="sm:w-40 w-28 pt-4 px-2" />
  <img src={Img3} alt="" className="sm:w-40 w-28 pt-4 px-2" />
  <img src={Img2} alt="" className="sm:w-40 w-28 pt-4 px-2" />
  <img src={Img4} alt="" className="sm:w-40 w-28 pt-4 px-2" />
  <img src={Img5} alt="" className="sm:w-40 w-28 pt-4 px-2" />
  <img src={Img3} alt="" className="sm:w-40 w-28 pt-4 px-2" />
  <img src={Img2} alt="" className="sm:w-40 w-28 pt-4 px-2" />
  <img src={Img1} alt="" className="sm:w-40 w-28 pt-4 px-2" />
  <img src={Img4} alt="" className="sm:w-40 w-28 pt-4 px-2" />
</div>
</div>



<div className="flex flex-col mb-10 md:mb-12 md:flex-row justify-between md:items-center p-4 md:w-[36rem] lg:w-[28rem] shadow-xl shadow-slate-200 rounded-2xl">
<img
  src={Blog3}
  alt=""
  className="md:w-48 md:h-48 lg:w-40 object-cover rounded-xl"
/>
<div className="flex flex-col md:px-10">
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

<div className="flex flex-col md:flex-row justify-between items-center p-4 mb-10 md:w-full shadow-xl shadow-slate-200 rounded-2xl">
<img
  src={Blog4}
  alt=""
  className="md:w-48 md:h-48 object-cover rounded-xl"
/>
<div className="flex flex-col md:px-10">
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

<div className="flex flex-col md:flex-row justify-between items-center p-4 mb-10 md:w-full shadow-xl shadow-slate-200 rounded-2xl">
<img
  src={Blog5}
  alt=""
  className="md:w-48 md:h-48 object-cover rounded-xl"
/>
<div className="flex flex-col md:px-10">
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

<div className="flex flex-col md:flex-row justify-between items-center p-4 mb-10 md:w-full shadow-xl shadow-slate-200 rounded-2xl">
<img
  src={Blog6}
  alt=""
  className="md:w-48 md:h-48 object-cover rounded-xl"
/>
<div className="flex flex-col md:px-10">
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


{/* <div className="w-full px-5 md:px-10 lg:px-24 xl:px-24 pb-16 md:pb-32">
            <h1 className="text-xl md:text-2xl xl:text-4xl font-bold mt-20 md:mt-40 mb-8 md:mx-36 xl:mx-80 text-light-black text-center">Come and visit our offices around the world</h1>
            <div className="flex flex-col md:grid md:grid-cols-2 md:gap-12 md:justify-between items-center">
            <div className="">
              <img src={Office} alt="" className=""/>
            </div>
            <div className="mt-5 md:mt-0 md:px-6 xl:p-36">
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
          </div> */}
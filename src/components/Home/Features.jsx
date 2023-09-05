import React from "react";
import { FaCheck, FaAward } from "react-icons/fa";
import { TbFileCertificate, TbUserStar } from "react-icons/tb";
import { SiHappycow } from "react-icons/si";
import { IconContext } from "react-icons";
import CountUp from 'react-countup';
function Features() {

  return (
    <>
      <div className="px-16 grid grid-cols-1 gap-2 lg:grid-cols-2 md:items-center">
        <div className="mt-10 lg:px-6 text-lg revealUp" >
          <p className="mb-4 text-left font-semibold uppercase text-[#5b8c51] text-2xl relative  before:content-[''] before:block before:border-b-2 before:absolute before:w-10  before:-z-10 before:top-2 before:left-32 before:border-solid before:border-[#5b8c51]  after:block after:border-b-2 after:absolute after:w-20  after:-z-10 after:top-5 after:left-32 after:border-solid after:border-[#5b8c51]">
            Why Us!
          </p>
          <h1 className="mb-4 text-left text-4xl font-bold">
            Few Reasons Why People Choosing Us!
          </h1>
          <p className="mb-4 text-left text-gray-600 ">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <div className=" mb-5 text-left">
            <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside ">
              <li className="flex items-center ">
                <div className="mr-4">
                  <IconContext.Provider value={{ color: "#5b8c51" }}>
                    <FaCheck />
                  </IconContext.Provider>
                </div>
                Justo magna erat amet
              </li>
              <li className="flex items-center ">
                <div className="mr-4">
                  <IconContext.Provider value={{ color: "#5b8c51" }}>
                    <FaCheck />
                  </IconContext.Provider>
                </div>
                Aliqu diam amet diam et eos
              </li>
              <li className="flex items-center ">
                <div className="mr-4">
                  <IconContext.Provider value={{ color: "#5b8c51" }}>
                    <FaCheck />
                  </IconContext.Provider>
                </div>
                Clita erat ipsum et lorem et sit
              </li>
            </ul>
          </div>
          <button className="flex justify-start my-6 px-7 py-3 bg-[#EDDD5E] hover:bg-[#e7d649] rounded-full font-bold  text-[#5b8c51]">
            Explore More
          </button>
        </div>

        <div className="reveal grid grid-cols-1  md:grid-cols-2 xl:p-6 ">

          <div className="bg-[#5b8c51] rounded-t-lg md:rounded-tl-lg md:rounded-tr-none h-72">
            <div className="grid h-full content-center ">
              <IconContext.Provider value={{ color: "#EDDD5E" }}>
                <TbFileCertificate className="mx-auto w-20 h-20 " />
              </IconContext.Provider>
              <CountUp start={0} end={25} duration={10} className="my-4 text-5xl font-bold text-white" />
              <p className="text-xl font-semibold text-[#EDDD5E]">
                Years Experience
              </p>
            </div>
          </div>

          <div className="bg-[#EDDD5E] md:rounded-tr-lg h-72">
            <div className="grid h-full content-center ">
              <IconContext.Provider value={{ color: "#5b8c51" }}>
                <FaAward className="mx-auto w-20 h-20 " />
              </IconContext.Provider>
              <CountUp start={0} end={183} duration={10} className="my-4 text-5xl font-bold text-white" />
              <p className="text-xl font-semibold text-[#5b8c51]">Award Winning</p>
            </div>
          </div>

          <div className="bg-[#EDDD5E] md:rounded-bl-lg h-72">
            <div className="grid h-full content-center ">
              <IconContext.Provider value={{ color: "#5b8c51" }}>
                <SiHappycow className="mx-auto w-20 h-20 " />
              </IconContext.Provider>
              <CountUp start={0} end={2615} duration={10} className="my-4 text-5xl font-bold text-white" />
              <p class="text-xl font-semibold text-[#5b8c51]">Total Animals</p>
            </div>
          </div>

          <div className="bg-[#5b8c51] rounded-b-lg md:rounded-br-lg md:rounded-bl-none h-72">
            <div className="grid h-full content-center ">
              <IconContext.Provider value={{ color: "#EDDD5E" }}>
                <TbUserStar className="mx-auto w-20 h-20 " />
              </IconContext.Provider>
              <CountUp start={0} end={51940} duration={10} className="my-4 text-5xl font-bold text-white" />
              <p className="text-xl font-semibold text-[#EDDD5E]">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;

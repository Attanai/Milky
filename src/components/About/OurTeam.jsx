import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
function OurTeam() {
  const team = [
    {
      id: 1,
      name: "Adam Crew",
      job: "Founder",
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60 ",
    },
    {
      id: 2,
      name: "Doris Jordan",
      job: "Veterinarian",
      img: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "Jack Dawson",
      job: "Farmer",
      img: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <>
      <div className="p-8 ">
        <div className="mx-auto my-4 max-w-[500px] revealUp">
          <p className="bg-white mb-4 px-4 text-center font-semibold uppercase text-[#5b8c51] text-2xl inline-block relative  before:content-[''] before:block before:border-b-[2px] before:absolute before:w-60  before:-z-10 before:top-2 before:-left-10 before:border-solid before:border-[#5b8c51]  after:block after:border-b-2 after:absolute after:w-80  after:-z-10 after:top-5 after:-left-[5rem] after:border-solid after:border-[#5b8c51]">
            Our Team
          </p>
          <h1 className="mb-4 text-center text-4xl font-bold leading-[3rem]">
            Experienced Team Members
          </h1>
        </div>

        <div className="px-14 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {team?.map((val) => (
            <div className="mb-6 lg:mb-0 m-auto shadow-inner revealUp" key={val.id}>
              <div className="p-6 block rounded-lg bg-red shadow-2xl">
                <div>
                  <img
                    className="w-64 h-64 lg:w-72 lg:h-96 rounded-lg object-cover object-center"
                    src={val.img}
                  />
                </div>
                <div className="pt-6">
                  <h5 className="mb-2 text-lg font-bold">{val.name}</h5>
                  <p className="mb-4 text-[#404A3D] ">{val.job}</p>
                  <ul className="mx-auto flex list-inside justify-center ">
                    <a
                      href="#!"
                      type="button"
                      className=" m-1 h-9 w-9 rounded-full bg-white text-[#EDDD5E] hover:text-black transition duration-300 ease-in-out hover:bg-[#e7d649] hover:bg-opacity-80  focus:ring ring-[#5b8c51] shadow-xl hover:-translate-y-1"
                    >
                      <FaFacebookF className="mx-auto h-full w-3" />
                    </a>
                    <a
                      href="#!"
                      type="button"
                      className="m-1 h-9 w-9 rounded-full bg-white text-[#EDDD5E] hover:text-black transition duration-300 ease-in-out hover:bg-[#e7d649] hover:bg-opacity-80  focus:ring ring-[#5b8c51] shadow-xl hover:-translate-y-1"
                    >
                      <FaInstagram className="mx-auto h-full w-1/2" />
                    </a>
                    <a
                      href="#!"
                      type="button"
                      className="m-1 h-9 w-9 rounded-full bg-white text-[#EDDD5E] hover:text-black transition duration-300 ease-in-out hover:bg-[#e7d649] hover:bg-opacity-80  focus:ring ring-[#5b8c51] shadow-xl hover:-translate-y-1"
                    >
                      <FaTwitter className="mx-auto h-full w-1/2 " />
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OurTeam;

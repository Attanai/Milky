import React from "react";
import {
  FaLocationDot,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { TbMailFilled } from "react-icons/tb";

function Footer() {
  const office = [
    {
      id: 1,
      title: "Our Office",
      location: "123 Street, New York, USA",
      phone: "+012 345 67890",
      mail: "info@example.com",
    },
  ];

  const link = [
    {
      id: 1,
      name: "About US",
    },
    {
      id: 2,
      name: "Contact Us",
    },
    {
      id: 3,
      name: "Our Service",
    },
    {
      id: 4,
      name: "Terms & Condition",
    },
    {
      id: 5,
      name: "Support",
    },
  ];

  const hours = [
    {
      id: 1,
      day: "Monday - Friday",
      time: "09:00 am - 07:00 pm",
    },
    {
      id: 2,
      day: "Saturday",
      time: "09:00 am - 07:00 pm",
    },
    {
      id: 3,
      day: "Sunday",
      time: "Closed",
    },
  ];
  return (
    <>
      <footer className="bg-[#404A3D] reveal">
        <div className="mx-auto mt-10 w-full h-full ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 py-6 lg:py-8 justify-center text-left mx-16 lg:mx-24">
            {/* Our Office */}
            {office?.map((val) => (
              <div className="flex flex-col flex-wrap  " key={val.id}>
                <h2 className="mb-6 text-2xl font-bold text-white ">
                  {val.title}
                </h2>
                <ul className="text-[#B0B9AE]  font-medium">
                  <li className="mb-4">
                    <p className="inline-flex">
                      <FaLocationDot className="mr-2 text-xl " />
                      {val.location}
                    </p>
                  </li>
                  <li className="mb-4">
                    <p className="inline-flex">
                      <FaPhoneAlt className="mr-2 text-xl " />
                      {val.phone}
                    </p>
                  </li>
                  <li className="mb-4">
                    <p className="inline-flex">
                      <TbMailFilled className="mr-2 text-xl " />
                      {val.mail}
                    </p>
                  </li>
                  <li className="mb-4 flex justify-left">
                    <a
                      href="#!"
                      type="button"
                      className="m-1 h-9 w-9 rounded-full bg-[#EDDD5E] text-[#404A3D] hover:text-black transition duration-150 ease-in-out hover:bg-[#e7d649] hover:bg-opacity-80  focus:ring ring-[#5b8c51]"
                    >
                      <FaFacebookF className="mx-auto h-full w-3 " />
                    </a>
                    <a
                      href="#!"
                      type="button"
                      className="m-1 h-9 w-9 rounded-full bg-[#EDDD5E] text-[#404A3D] hover:text-black transition duration-150 ease-in-out hover:bg-[#e7d649] hover:bg-opacity-80  focus:ring ring-[#5b8c51]"
                    >
                      <FaInstagram className="mx-auto h-full w-1/2" />
                    </a>
                    <a
                      href="#!"
                      type="button"
                      className="m-1 h-9 w-9 rounded-full bg-[#EDDD5E] text-[#404A3D] hover:text-black transition duration-150 ease-in-out hover:bg-[#e7d649] hover:bg-opacity-80  focus:ring ring-[#5b8c51]"
                    >
                      <FaTwitter className="mx-auto h-full w-1/2 " />
                    </a>
                    <a
                      href="#!"
                      type="button"
                      className="m-1 h-9 w-9 rounded-full bg-[#EDDD5E] text-[#404A3D] hover:text-black transition duration-150 ease-in-out hover:bg-[#e7d649] hover:bg-opacity-80  focus:ring ring-[#5b8c51]"
                    >
                      <FaYoutube className="mx-auto h-full w-1/2 " />
                    </a>
                  </li>
                </ul>
              </div>
            ))}

            {/* Quick Links */}
            <div className="flex flex-col flex-wrap  ">
              <h2 className="mb-6 text-2xl font-bold text-white ">
                Quick Link
              </h2>
              <ul className="text-[#B0B9AE]  font-medium">
                {link?.map((val) => (
                  <li className="mb-4" key={val.id}>
                    <a href="#" className="inline-flex hover:text-white  ">
                      <MdNavigateNext className="m-auto text-xl " />
                      <p className="transition  hover:translate-x-1 hover:duration-200">
                        {val.name}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Hours */}
            <div className="flex flex-col flex-wrap ">
              <h2 className="mb-6 text-2xl font-bold text-white ">
                Business Hours
              </h2>
              <ul className="text-[#B0B9AE]  font-medium">
                {hours?.map((val) => (
                  <li className="mb-4" key={val.id}>
                    <p className="">{val.day}</p>
                    <p className="text-white font-bold text-lg">{val.time}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col flex-wrap  ">
              <h2 className="mb-6 text-2xl font-bold text-white ">
                Newsletter
              </h2>
              <ul className="text-[#B0B9AE]  font-medium">
                <li className="mb-4">
                  <p className="">
                    Dolor amet sit justo amet elitr clita ipsum elitr est.
                  </p>
                  <label
                    for="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only "
                  >
                    Search
                  </label>
                  <div className="relative">
                    <input
                      type="search"
                      id="default-search"
                      className="my-4 block w-full p-4 pl-7 bg-[#404A3D] font-medium text-{#777} border border-gray-300 rounded-lg focus:ring-4 focus:ring-offset-1 focus:ring-[#5b8c51] focus:border-[#5b8c51]"
                      placeholder="Your email"
                      required
                    />
                    <button
                      type="submit"
                      className="text-[#404A3D] absolute right-2.5 bottom-2.5 bg-[#EDDD5E] hover:bg-[#e7d649] focus:ring-4 focus:outline-none focus:ring-[#5b8c51] rounded-lg font-medium px-4 py-2 "
                    >
                      SingUp
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-6 bg-[#EDDD5E] ">
            <span className="text-md text-gray-500  text-center">
              © 2023{" "}
              <a href="/" className="font-medium text-[#5b8c51]">
                Milky
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

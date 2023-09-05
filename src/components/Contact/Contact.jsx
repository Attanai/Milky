import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import Map from "./Map";
import 'animate.css';
function Contact() {
  const contact = [
    {
      id: 1,
      icon: <FaLocationDot/>,
      name: "Our Office",
      info: "123 Street, New York, USA",     
    },
    {
      id: 2,
      icon: <FaPhoneAlt/>,
      name: "Call Us",
      info: "+012 345 67890",     
    },
    {
      id: 3,
      icon: <TbMailFilled/>,
      name: "Mail Us",
      info: "info@example.com",     
    },
  ]
  return (
    <>
      <div className="flex justify-center items-center w-full h-72 bg-cover bg-center bg-[url('https://cdn.pixabay.com/photo/2016/11/29/13/21/cow-1869792_1280.jpg')] bg-gray-500 bg-blend-multiply animate__animated animate__fadeIn">
        <h1 className="p-28 text-center font-bold  text-white text-6xl animate__animated animate__fadeInDown">
          Contact
        </h1>
      </div>

      <div className="p-8 ">
        <div className="mx-auto my-4 max-w-[450px] animate__animated animate__fadeInUp ">
          <p className="bg-white mb-4 px-4 text-center font-semibold uppercase text-[#5b8c51] text-2xl inline-block relative  before:content-[''] before:block before:border-b-[2px] before:absolute before:w-72  before:-z-10 before:top-2 before:-left-[3.25rem] before:border-solid before:border-[#5b8c51]  after:block after:border-b-2 after:absolute after:w-96  after:-z-10 after:top-5 after:-left-[6.25rem] after:border-solid after:border-[#5b8c51]">
            Contact Us
          </p>
          <h1 className="mb-4 text-center text-4xl font-bold leading-[3rem]">
            If You Have Query, Please Contact Us
          </h1>
        </div>

        <div className="md:px-12 lg:px-24 py-10 ">
          <div className=" grid lg:grid-cols-2 gap-10">
            <div className="animate__animated animate__fadeInUp animate__delay-05 animate__fast">
              <h1 className="mb-6 text-left text-2xl font-semibold">
                Need a functional contact form?
              </h1>
              <p className="mb-4 text-left text-lg text-[#777]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
                vel quod impedit quidem dolore cupiditate voluptas accusamus
                consequuntur voluptates molestias.
              </p>

              {/* form */}
              <div>
                <div className="mb-4 grid lg:grid-cols-2 gap-2">
                  {/* Your Name */}
                  <div className="relative">
                    <input
                      type="text"
                      id="Your Name"
                      className="block rounded-lg px-4 pb-2.5 pt-5 w-full text-lg text-[#777] bg-white  border-2 border-[#5b8c51] appearance-none   focus:outline-none  focus:border-[#777] peer focus:ring-4 focus:ring-[#5b8c51]/30"
                      placeholder=" "
                    />
                    <label
                      for="Your Name"
                      className="pl-4 absolute text-lg text-[#777]  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2 peer-focus:opacity-80 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 focus:ring-2 focus:ring-blue-500"
                    >
                      Your Name
                    </label>
                  </div>
                  {/* Your Email */}
                  <div className="relative">
                    <input
                      type="email"
                      id="Your Email"
                      className="block rounded-lg px-4 pb-2.5 pt-5 w-full text-lg text-[#777] bg-white  border-2 border-[#5b8c51] appearance-none   focus:outline-none  focus:border-[#777] peer focus:ring-4 focus:ring-[#5b8c51]/30"
                      placeholder=" "
                    />
                    <label
                      for="Your Email"
                      className="pl-4 absolute text-lg text-[#777]  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2 peer-focus:opacity-80 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 focus:ring-2 focus:ring-blue-500"
                    >
                      Your Email
                    </label>
                  </div>
                </div>
                {/* Your Subject */}
                <div className="mb-4 relative">
                  <input
                    type="text"
                    id="Your Subject"
                    className="block rounded-lg px-4 pb-2.5 pt-5 w-full text-lg text-[#777] bg-white  border-2 border-[#5b8c51] appearance-none   focus:outline-none  focus:border-[#777] peer focus:ring-4 focus:ring-[#5b8c51]/30"
                    placeholder=" "
                  />
                  <label
                    for="Your Subject"
                    className="pl-4 absolute text-lg text-[#777]  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2 peer-focus:opacity-80 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 focus:ring-2 focus:ring-blue-500"
                  >
                    Your Subject
                  </label>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    type="text"
                    id="Message"
                    rows="6"
                    className="min-h-[4rem] block rounded-lg px-4 pb-2.5 pt-5 w-full text-lg text-[#777] bg-white  border-2 border-[#5b8c51] appearance-none   focus:outline-none  focus:border-[#777] peer focus:ring-4 focus:ring-[#5b8c51]/30"
                    placeholder=" "
                  />
                  <label
                    for="Message"
                    className="block pl-4 absolute text-lg text-[#777]  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2 peer-focus:opacity-80 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 focus:ring-2 focus:ring-blue-500"
                  >
                    Message
                  </label>
                </div>

                <button className="flex justify-start mt-6 px-12 py-4 bg-[#EDDD5E] hover:bg-opacity-80 rounded-full font-bold  text-[#5b8c51]">
                  Send Message
                </button>
              </div>
            </div>

            <div className="bg-white animate__animated animate__fadeInUp animate__delay-1s animate__fast">
              <div>
                <h1 className="mb-6 text-left text-2xl font-semibold">
                  Contact Details
                </h1>
                <div className="grid grid-cols-1 ">
                  {contact?.map(val => (
                  <div className="flex border-b pb-3 mb-3 text-left" key={val.id}>
                    <div className="bg-[#EDDD5E] rounded-full w-12 h-12  ">
                      <div className="flex justify-center items-center h-full text-[#777]">{val.icon}</div>
                      {/* <FaLocationDot className="mx-auto h-full w-4 text-[#777]"/> */}
                    </div>
                    <div className="ms-5">
                      <h1 className="text-lg font-medium">{val.name}</h1>
                      <p className="text-lg text-[#777]">{val.info}</p>
                    </div>
                  </div>
                  ))}
                  <Map/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

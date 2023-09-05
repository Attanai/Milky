import React from "react";
import AboutUs from "./AboutUs";
import OurTeam from "./OurTeam";

function About() {
  return (
    <>
      <div className="flex justify-center items-center w-full h-72 bg-cover bg-center bg-[url('https://cdn.pixabay.com/photo/2016/11/29/13/21/cow-1869792_1280.jpg')] bg-gray-500 bg-blend-multiply animate__animated animate__fadeIn">
        <h1 className="text-center font-bold  text-white text-6xl animate__animated animate__fadeInDown">
          About Us
        </h1>
      </div>
      <AboutUs />
      <OurTeam />
    </>
  );
}

export default About;

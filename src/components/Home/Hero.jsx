import React from "react";

function Hero() {
  return (
    <>
      <div className="h-[600px] flex justify-center items-center bg-cover bg-center bg-no-repeat bg-[url('https://images.pexels.com/photos/841303/pexels-photo-841303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-gray-500 bg-blend-multiply">
        <div className=" text-white ">
          <p className="mb-6 text-3xl md:text-5xl animate__animated animate__fadeIn animate__slow">Welcome to our dairy farm</p>
          <h1 className="mb-8 text-5xl font-bold md:text-7xl text-white animate__animated animate__fadeIn animate__slower">
            The Farm of Dairy Products
          </h1>
          <button className=" my-3 px-7 py-3 bg-[#EDDD5E] hover:bg-[#e7d649] rounded-full font-bold text-[#5b8c51] animate__animated animate__fadeIn animate__slower">
            Explore More
          </button>
        </div>
      </div>

    </>
  );
}

export default Hero;

import React from "react";
import { BsLink, BsCart } from "react-icons/bs";
function OurProduct() {
  const prod = [
    {
      id: 1,
      name: "Pure Milk",
      img: "https://images.unsplash.com/photo-1632200823229-376320621350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fFB1cmUlMjBNaWxrfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      priceOld: 29,
      priceNew: 19,
    },
    {
      id: 2,
      name: "Fresh Meat",
      img: "https://images.unsplash.com/photo-1448907503123-67254d59ca4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlc2glMjBtZWF0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      priceOld: 29,
      priceNew: 19,
    },
    {
      id: 3,
      name: "Dairy Products",
      img: "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFpcnklMjBwcm9kdWN0c3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      priceOld: 29,
      priceNew: 19,
    },
    {
      id: 4,
      name: "Organic Food",
      img: "https://images.unsplash.com/photo-1534533983688-c7b8e13fd3b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b3JnYW5pYyUyMGZvb2RzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      priceOld: 29,
      priceNew: 19,
    },
  ];

  return (
    <>
      <div className="p-8 ">
        <div className="mx-auto my-4 max-w-[500px] revealUp ">
          <p className="bg-white mb-4 px-4 text-center font-semibold uppercase text-[#5b8c51] text-2xl inline-block relative  before:content-[''] before:block before:border-b-[2px] before:absolute before:w-72  before:-z-10 before:top-2 before:-left-9 before:border-solid before:border-[#5b8c51]  after:block after:border-b-2 after:absolute after:w-96  after:-z-10 after:top-5 after:-left-[5.5rem] after:border-solid after:border-[#5b8c51]">
            Our Products
          </p>
          <h1 className="mb-4 text-center text-4xl font-bold leading-[3rem]">
            Our Dairy Products For Healthy Living
          </h1>
        </div>

        <div className="mx-4 my-14 px-12 lg:mx-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 revealUp">
          {prod?.map((val) => (
            <div
              className=" bg-white border border-gray-200 rounded-lg shadow h-full "
              key={val.id}
            >
              <div className="container transition duration-300 ease-in-out relative hover:opacity-80">
                <img
                  className="rounded-t-lg w-full object-cover object-center "
                  src={val.img}
                  alt={val.name}
                />
                <div className="overlay-pd ">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                    <button
                      type="button"
                      className="mx-2 px-5 py-5 text-base font-medium text-[#5b8c51] inline-flex items-center bg-[#EDDD5E] hover:bg-[#e7d649] focus:ring-4 focus:outline-none focus:ring-[#5b8c51] rounded-full text-center "
                    >
                      <BsLink />
                    </button>
                    <button
                      type="button"
                      className="mx-2 px-5 py-5 text-base font-medium text-[#5b8c51] inline-flex items-center bg-[#EDDD5E] hover:bg-[#e7d649] focus:ring-4 focus:outline-none focus:ring-[#5b8c51] rounded-full text-center "
                    >
                      <BsCart />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:text-[#5b8c51]">
                    {val.name}
                  </h5>
                </a>

                <span className="text-lg font-medium text-[#5b8c51]  ">
                  ${val.priceNew}
                </span>
                <span className="ml-3 text-lg font-medium text-gray-600 line-through">
                  ${val.priceOld}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OurProduct;

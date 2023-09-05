import React from "react";
import Features from "../Home/Features";
import OurProduct from "./OurProduct";
function Products() {
  return (
    <>
      <div className="flex justify-center items-center w-full h-72 bg-cover bg-center bg-[url('https://cdn.pixabay.com/photo/2016/11/29/13/21/cow-1869792_1280.jpg')] bg-gray-500 bg-blend-multiply animate__animated animate__fadeIn">
        <h1 className="p-28 text-center font-bold  text-white text-6xl animate__animated animate__fadeInDown">
          Products
        </h1>
      </div>
      <OurProduct />
      <Features />
    </>
  );
}

export default Products;

import React from "react";

function AboutUs() {
  const image = [
    {
      id: 1,
      img: "https://cdn.pixabay.com/photo/2018/05/08/18/40/cow-3383624_1280.jpg",
    },
    {
      id: 2,
      img: "https://cdn.pixabay.com/photo/2014/06/04/16/44/calf-362170_1280.jpg",
    },
    {
      id: 3,
      img: "https://cdn.pixabay.com/photo/2019/08/22/09/09/cows-4423003_1280.jpg",
    },
    {
      id: 4,
      img: "https://cdn.pixabay.com/photo/2014/07/15/17/45/cow-394148_1280.jpg",
    },
  ];
  const data = [
    {
      id: 1,
      img: "https://cdn.pixabay.com/photo/2015/05/21/08/05/cow-776730_1280.jpg",
      title: "We Sell Best Dairy Products",
      description:
        "Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
    },
    {
      id: 2,
      img: "https://cdn.pixabay.com/photo/2019/08/24/13/36/banteng-4427640_640.jpg",
      title: "We Deliver Fresh Mild Worldwide",
      description:
        "Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
    },
  ];

  return (
    <>
      <div className="p-8 grid grid-cols-1 gap-2 lg:grid-cols-2 md:items-center reveal ">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-2  ">
          {image?.map((e) => (
            <div key={e.id}>
              <img
                className="rounded-lg h-full object-cover"
                src={e.img}
                alt="Cow"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 lg:px-12  text-lg">
          <p className=" mb-4 text-left font-semibold uppercase text-[#5b8c51] text-2xl relative  before:content-[''] before:block before:border-b-2 before:absolute before:w-10  before:-z-10 before:top-2 before:left-36 before:border-solid before:border-[#5b8c51]  after:block after:border-b-2 after:absolute after:w-20  after:-z-10 after:top-5 after:left-36 after:border-solid after:border-[#5b8c51]">
            About Us
          </p>
          <h1 className="mb-4 text-left text-4xl font-bold leading-[3rem] lg:max-w-[550px]">
            Know About Our Dairy Farm & Our History
          </h1>
          <p className="mb-4 text-left text-gray-600 ">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <div className="pt-2 mb-5 md:grid grid-cols-2 gap-6">
            <div className="mb-10 text-left text-gray-600">
              <img
                className=" mb-4 w-16"
                src="https://cdn-icons-png.flaticon.com/128/2706/2706907.png"
                alt="Dedicated Services"
              />
              <h5 className="mb-3 font-bold">Dedicated Services</h5>
              <span>
                Clita erat ipsum et lorem et sit, sed stet lorem sit clita
              </span>
            </div>
            <div className="mb-10 text-left text-gray-600">
              <img
                className=" mb-4 w-16"
                src="https://cdn-icons-png.flaticon.com/128/2174/2174629.png"
                alt="Organic Products"
              />
              <h5 className="mb-3 font-bold">Organic Products</h5>
              <span>
                Clita erat ipsum et lorem et sit, sed stet lorem sit clita
              </span>
            </div>
          </div>
          <button className="flex justify-start my-5 px-7 py-3 bg-[#EDDD5E] hover:bg-[#e7d649] rounded-full font-bold  text-[#5b8c51]">
            Explore More
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2  gap-2 md:gap-y-9 p-24 bg-gray-600 bg-blend-multiply bg-cover bg-center bg-[url('https://pixy.org/download/4685551/')]">
        {data?.map((val) => (
          <div
            className="grid md:grid-cols-2 items-center rounded-lg shadow reveal"
            key={val.id}
          >
            <img
              className="object-cover w-full md:m-auto rounded-t-md h-96 "
              src={val.img}
              alt="Cow"
            />

            <div className="flex flex-col justify-between p-6 leading-normal text-left">
              <h5 className="mb-3 text-4xl font-bold tracking-tight text-white">
                {val.title}
              </h5>
              <p className="mb-3 font-normal text-xl text-white ">
                {val.description}
              </p>
              <button className="flex justify-start w-fit my-5 px-5 py-3 bg-[#EDDD5E] hover:bg-[#e7d649] rounded-full  font-bold  text-[#5b8c51]">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AboutUs;

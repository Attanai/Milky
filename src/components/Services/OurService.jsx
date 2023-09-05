import React from "react";
function OurService() {
  const data = [
    {
      id: 1,
      title: "Best Animal Selection",
      desc:
        "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
      img: "https://images.unsplash.com/photo-1595702339907-76fe4d25a3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGNvd3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      title: "Best Animal Selection",
      desc:
        "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
      img: "https://images.unsplash.com/photo-1557090641-738f111d6428?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGNvd3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      title: "Best Animal Selection",
      desc:
        "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
      img: "https://images.unsplash.com/photo-1545468259-3061e564cf56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGNvd3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <>
      <div className="p-8">
        <div className="mx-auto my-4 max-w-[450px] revealUp">
          <p className="bg-white mb-4 px-4 text-center font-semibold uppercase text-[#5b8c51] text-2xl inline-block relative  before:content-[''] before:block before:border-b-[2px] before:absolute before:w-64  before:-z-10 before:top-2 before:-left-7 before:border-solid before:border-[#5b8c51]  after:block after:border-b-2 after:absolute after:w-80  after:-z-10 after:top-5 after:-left-16 after:border-solid after:border-[#5b8c51]">
            Our Services
          </p>
          <h1 className="mb-4 text-center text-4xl font-bold leading-[3rem]">
            Services That We Offer For Entrepreneurs
          </h1>
        </div>

        <div className="mt-40 mb-14 lg:mx-10 grid grid-cols-1 gap-x-5 gap-y-32 md:grid-cols-2 lg:grid-cols-3 text-left ">
          {data?.map((val) => (
            <div className="relative revealUp" key={val.id}>
              <div>
                <img
                  className="z-10 absolute left-8 -top-24 rounded-full w-28 h-28 ring-8 ring-gray-300 object-cover"
                  src={val.img}
                  alt="Best Animal Selection"
                />
              </div>
              <div
                style={{
                  backgroundImage: `url(${val.img})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  objectFit: "cover",
                }}
                className="p-5 w-full text-white  bg-slate-400 bg-blend-multiply  border border-gray-200 rounded-lg shadow  transition duration-200 ease-out hover:bg-gray-600"
              >
                <div className="p-5 ">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                    {val.title}
                  </h5>

                  <p className="mb-3 font-normal  ">{val.desc}</p>
                  <a href="#">
                    <button
                      type="button"
                      className="shadow-md shadow-[#565656] bg-[#EDDD5E]  hover:bg-[#e7d649]  focus:ring-4 focus:outline-none focus:ring-[#5b8c51]  rounded-full p-4  my-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                    >
                      <svg
                        className="w-4 h-4 text-[#5b8c51] hover:text-[#5b8c51] "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 12 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m7 9 4-4-4-4M1 9l4-4-4-4"
                        />
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OurService;

import React from "react";

function Gallery() {
  const gallery = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1623353803081-3462c26d7b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvdyUyMGZhcm1pbmd8ZW58MHwxfDB8fHwy&auto=format&fit=crop&w=500&q=60",
    },
  ];
  const gallery2 = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y293JTIwZmFybWluZ3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1520325143471-6969ad29c351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y293JTIwZmFybWluZ3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  const gallery3 = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1484729191033-ab703f3eac3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y293JTIwZmFybWluZ3xlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1616517278632-60c8e088d19e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1622984897831-839bcde8e434?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvdyUyMGZhcm1pbmd8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=500&q=60",
    },
  ];
  const gallery4 = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1596531517519-ca022f37008c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNvdyUyMGZhcm1pbmd8ZW58MHwxfDB8fHwy&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1660077018619-687b91bdd342?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGNvdyUyMGZhcm1pbmd8ZW58MHwxfDB8fHwy&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <>
      <div className="mx-auto my-4 max-w-[400px] revealUp">
        <p className="bg-white mb-4 px-4 text-center font-semibold uppercase text-[#5b8c51] text-2xl inline-block relative  before:content-[''] before:block before:border-b-[2px] before:absolute before:w-56  before:-z-10 before:top-2 before:-left-11 before:border-solid before:border-[#5b8c51]  after:block after:border-b-2 after:absolute after:w-72  after:-z-10 after:top-5 after:-left-[5rem] after:border-solid after:border-[#5b8c51]">
          Gallery
        </p>
        <h1 className="mb-4 text-center text-4xl font-bold leading-[3rem]">
          Explore Our Dairy Farm Gallery
        </h1>
      </div>

      <div className="px-16 py-8 lg:px-24 grid grid-cols-2 md:grid-cols-4 gap-4 revealUp">
        {/* col1 */}
        <div className="grid gap-4 ">
          {gallery?.map((val) => (
            <img
              key={val.id}
              className="h-full max-w-full rounded-lg object-cover"
              src={val.img}
              alt="Gallery-Cow"
            />
          ))}
        </div>

        {/* col2 */}
        <div className="grid gap-4 ">
          {gallery2?.map((val) => (
            <img
              key={val.id}
              className="h-full max-w-full rounded-lg object-cover"
              src={val.img}
              alt="Gallery-Cow"
            />
          ))}
        </div>

        {/* col3 */}
        <div className="grid gap-4 ">
          {gallery3?.map((val) => (
            <img
              key={val.id}
              className="h-full max-w-full rounded-lg object-cover"
              src={val.img}
              alt="Gallery-Cow"
            />
          ))}
        </div>

        {/* col4 */}
        <div className="grid gap-4 ">
          {gallery4?.map((val) => (
            <img
              key={val.id}
              className="h-full max-w-full rounded-lg object-cover"
              src={val.img}
              alt="Gallery-Cow"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallery;

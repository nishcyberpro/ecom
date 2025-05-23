import React from "react";

const Banner1 = () => {
  return (
    <div
      className="bg-gray-200 w-full h-[400px] rounded-md max-sm:mt-14"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dprwdppgz/image/upload/v1744298957/cld-sample-4.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-start justify-center h-full text-center p-8 w-full gap-2 ">
        <p className="px-2 py-1 rounded-md bg-green-200 text-blue-800 font-bold text-sm mb-4 shadow-sm">
          Weekend Discount
        </p>
        <h2 className="text-xl font-bold text-white text-shadow-lg mb-4 text-start md:text-4xl lg:text-5xl w-1/2  ">
          Get the best quality products at the lowest prices
        </h2>
        <p className="text-white text-sm mb-4 text-start md:text-lg lg:text-2xl xl:text-3xl text-shadow-lg">
          Shop now and save big on your grocery bill!
        </p>
        <div className="mt-8 gap-2">
          <button className="bg-red-500 text-white px-4 py-2 rounded-md text-sm text-shadow-lg">
            Shop Now
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded-md ml-2 text-sm">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner1;

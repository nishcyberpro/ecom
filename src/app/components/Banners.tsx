import React from "react";
import { BsArrowRight } from "react-icons/bs";

export const BannerFeatured = ({
  backgroundimage,
}: {
  backgroundimage: string;
}) => {
  return (
    <div
      className="w-1/3 h-full bg-amber-700 max-sm:hidden"
      style={{
        backgroundImage: `url('${backgroundimage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-start justify-center h-full text-center p-8 w-full lg:w-2/3 gap-2 text-white ">
        <p className="text-sm text-[clamp(0.5rem,2vw,0.85rem)] text-shadow-lg">
          Only This Week
        </p>
        <h3 className="text-bold  text-start text-[clamp(0.875rem,2vw,1.5rem)] text-shadow-lg">
          Quality Eggs at an affordable price
        </h3>
        <p className="text-shadow-lg">Eat one every day</p>
        <button className="flex border-1 border-white shadow-xl items-center gap-2 cursor-pointer hover:text-white hover:bg-amber-800 hover:border-1 hover:border-white bg-white px-4 py-2 rounded-md text-sm text-amber-700 font-bold">
          Shop Now <BsArrowRight />
        </button>
      </div>
    </div>
  );
};
export const BannerLatest = () => {
  return (
    <div className="w-1/3 h-full bg-amber-700">
      <div className="flex flex-col items-start justify-center h-full text-center p-8 w-2/3 gap-2 text-white">
        <p className="text-sm">Only This Week</p>
        <h3 className="text-bold text-2xl text-start">
          Quality Eggs at an affordable price
        </h3>
        <p>Eat one every day</p>
        <button className="flex  items-center gap-2 bg-white px-4 py-2 rounded-md text-sm text-amber-700 font-bold">
          Shop Now <BsArrowRight />
        </button>
      </div>
    </div>
  );
};
export const BannerFeaturedRow = ({
  backgroundimage,
}: {
  backgroundimage: string;
}) => {
  return (
    <div
      className=" h-full bg-amber-700 max-sm:hidden"
      style={{
        backgroundImage: `url('${backgroundimage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-start justify-start h-full text-center p-8 w-full  gap-2 text-white">
        <p className="text-sm text-[clamp(0.5rem,2vw,0.85rem)]">
          Only This Week
        </p>
        <h3 className="text-bold  text-start text-[clamp(0.875rem,2vw,1.5rem)]">
          Quality Eggs at an affordable price
        </h3>
        <p>Eat one every day</p>
        <button className="flex  items-center gap-2 cursor-pointer hover:bg-amber-700 hover:text-white hover:border-1 hover:border-white bg-white px-4 py-2 rounded-md text-sm text-amber-700 font-bold">
          Shop Now <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

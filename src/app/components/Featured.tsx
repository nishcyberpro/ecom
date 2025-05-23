"use client";
import React, { useRef } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { ProductFeatured } from "./ProductCards";

const Featured = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -466, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 466, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full py-2">
      <div className="w-full flex items-center justify-between">
        <h3 className="font-bold">Featured</h3>
        <button className="font-bold text-[12px] flex gap-2 bg-white rounded-2xl px-2 py-1 shadow-sm items-center">
          View All
          <BsArrowRight />
        </button>
      </div>
      {/* Slider */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
        >
          <BsArrowLeft size={20} />
        </button>
        {/* Slider Content */}
        <div
          ref={sliderRef}
          className="flex items-center gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          <ProductFeatured />
          <ProductFeatured />
          <ProductFeatured />
          <ProductFeatured />
          <ProductFeatured />
          <ProductFeatured />
          <ProductFeatured />
          <ProductFeatured />
        </div>
        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
        >
          <BsArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Featured;

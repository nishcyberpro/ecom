import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { BannerFeatured } from "./Banners";
import { ProductCardOne } from "./ProductCards";
import { products } from "../data/products";
const imgUrls = [
  "https://res.cloudinary.com/dprwdppgz/image/upload/v1744303801/17_aoiaau.jpg",
  "https://res.cloudinary.com/dprwdppgz/image/upload/v1744303801/20_s13vyc.jpg",
  "https://res.cloudinary.com/dprwdppgz/image/upload/v1744303801/18_ryrcav.jpg",
  "https://res.cloudinary.com/dprwdppgz/image/upload/v1744303801/19_ep9x2j.jpg",
  "https://res.cloudinary.com/dprwdppgz/image/upload/v1744303801/19_ep9x2j.jpg",
  "https://res.cloudinary.com/dprwdppgz/image/upload/v1744303801/19_ep9x2j.jpg",
  "https://res.cloudinary.com/dprwdppgz/image/upload/v1744303801/19_ep9x2j.jpg",
];
const Newarrivals = ({ category }: { category: string }) => {
  return (
    <div className="flex flex-col gap-2 w-full  py-2">
      <div className="w-full flex items-center justify-between ">
        <h3 className="font-bold">{category}</h3>
        <button className="font-bold text-[12px] flex gap-2 bg-white rounded-2xl px-2 py-1 shadow-sm items-center">
          View All
          <BsArrowRight />
        </button>
      </div>
      {/* products grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 overflow-hidden items-center justify-center   ">
        {products.slice(0, 6).map((product, index) => (
          <div className={index > 4 ? "md:hidden" : ""} key={product.productId}>
            <ProductCardOne key={index} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newarrivals;

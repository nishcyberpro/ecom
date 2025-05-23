import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { ProductCardOne } from "./ProductCards";
import Banner1 from "./Banner1";
import { BannerFeatured, BannerFeaturedRow, BannerLatest } from "./Banners";
import Link from "next/link";
import { bestseller, products } from "../data/products";
const fullimageurl = [
  "https://res.cloudinary.com/dprwdppgz/image/upload/v1744304776/29_iqa2ai.jpg",
  "https://res.cloudinary.com/dprwdppgz/image/upload/v1744304776/28_pfnxlf.jpg",
  "https://res.cloudinary.com/dprwdppgz/image/upload/v1744304775/27_dsub1q.jpg",
  "https://res.cloudinary.com/dprwdppgz/image/upload/v1744304774/26_ti5phy.jpg",
  "https://res.cloudinary.com/dprwdppgz/image/upload/v1744304772/25_zkzwcs.jpg",
  "https://res.cloudinary.com/dprwdppgz/image/upload/v1744304771/24_fvexaz.jpg",
  "https://res.cloudinary.com/dprwdppgz/image/upload/v1744304770/23_xkevwa.jpg",
  "https://res.cloudinary.com/dprwdppgz/image/upload/v1744304770/21_k9sbpd.jpg",
];
const BestSeller = () => {
  return (
    <div className="flex flex-col gap-2 w-full py-2">
      <div className="w-full flex items-center justify-between ">
        <h3 className="font-bold">Best Sellers</h3>
        <button className="font-bold text-[12px] flex gap-2 bg-white rounded-2xl px-2 py-1 shadow-sm items-center">
          <Link href={"/filter"}>View All</Link>
          <BsArrowRight />
        </button>
      </div>
      {/* products grid */}
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 overflow-hidden items-center justify-center  ">
        <ProductCardOne product={bestseller[0]} />
        <ProductCardOne product={bestseller[1]} />
        <BannerFeaturedRow backgroundimage="https://res.cloudinary.com/dprwdppgz/image/upload/v1744305220/3_gnijcz.jpg" />
        <ProductCardOne product={bestseller[2]} />
        <ProductCardOne product={bestseller[3]} />
        <ProductCardOne product={bestseller[4]} />
        <ProductCardOne product={bestseller[5]} />
        <BannerFeaturedRow backgroundimage="https://res.cloudinary.com/dprwdppgz/image/upload/v1744305220/2_bbbhte.jpg" />
        <ProductCardOne product={bestseller[6]} />
        <ProductCardOne product={bestseller[7]} />
      </div>
    </div>
  );
};

export default BestSeller;

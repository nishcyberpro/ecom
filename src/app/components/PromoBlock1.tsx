import React from "react";
import { BiArrowBack, BiArrowFromRight } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { BannerFeatured } from "./Banners";

const PromoBlock1 = () => {
  return (
    <div className="flex items-center justify-center w-full gap-4  max-sm:flex-col max-sm:gap-2 ">
      <BannerFeatured backgroundimage="https://res.cloudinary.com/dprwdppgz/image/upload/v1744298945/samples/food/fish-vegetables.jpg" />
      <BannerFeatured backgroundimage="https://res.cloudinary.com/dprwdppgz/image/upload/v1744298945/samples/food/pot-mussels.jpg" />
      <BannerFeatured backgroundimage="https://res.cloudinary.com/dprwdppgz/image/upload/v1744298944/samples/food/dessert.jpg" />
    </div>
  );
};

export default PromoBlock1;

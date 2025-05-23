"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { SolidButton } from "./Buttons";
import { Product, useCartStore } from "../store/cartStore";
import toast, { Toaster } from "react-hot-toast";
import { BiHeart } from "react-icons/bi";
import Link from "next/link";

export const ProductCardOne = ({ product }: { product: Product }) => {
  const { addToCart } = useCartStore();
  const [showPlusOne, setShowPlusOne] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, 1);

    // Show toast notification
    toast.success("Item added to cart!");

    // Trigger +1 animation
    setShowPlusOne(true);
    setTimeout(() => setShowPlusOne(false), 1000); // Hide after 1 second
  };
  if (!product) return <>loading</>;
  return (
    <div className="w-full p-4 space-y-2 border-gray-100 border-1 rounded-md">
      {/* Toast Container */}

      {/* Image */}
      <div className="relative group cursor-pointer">
        <Link href={"/product/" + product.name}>
          <img
            src={product.image && product.image}
            className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </Link>
        <div className="absolute top-1 left-1 bg-red-700 rounded-3xl px-2 text-white opacity-90">
          75%
        </div>
      </div>

      {/* Product Name */}
      <p>{product.name}</p>
      <div className="ratings flex items-center justify-start gap-1">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>

      {/* Price */}
      <div className="flex gap-2 items-center justify-start">
        <p className="font-bold text-2xl md:text-xl max-sm:text-sm text-red-800">
          {product.price}
        </p>
        <p className="font-bold text-xl md:text-sm max-sm:text-xs line-through">
          Rs.500/-
        </p>
      </div>

      {/* Add to cart button */}
      <div className="relative">
        <SolidButton btnText="Add to Cart" onClick={handleAddToCart} />

        {showPlusOne && (
          <div className="absolute left-4/5 max-sm:text-sm text-md transform -translate-x-1/2 -top-4 text-primary font-bold animate-fadeUp w-full align-center">
            Item added to cart!
          </div>
        )}
      </div>
    </div>
  );
};
export const ProductFeatured = () => {
  return (
    <div className=" flex flex-row p-4 space-x-2 border-gray-100 border-1 rounded-md gap-8">
      {/* Image */}
      <div className="relative ">
        <img
          src="data:image/webp;base64,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"
          className="h-full  min-w-[200px] object-cover"
        />
        <div className="absolute top-1 left-1  bg-red-700 rounded-3xl px-2 text-white opacity-90">
          75%
        </div>
        <div className="absolute right-1 top-1  rounded-3xl px-2 text-white opacity-90">
          <BiHeart size={30} />
        </div>
      </div>
      <div className="flex flex-col gap-2 ">
        {/* Product Name */}
        <p>100 percent apple juisce-64</p>
        <div className="ratings flex items-center justify-start gap-1">
          <FaStar className="bg-red-500" />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        {/* Price */}
        <div className="flex gap-2 items-center justify-start">
          <p className="font-bold text-xl text-red-500">Rs.500/-</p>
          <p className="font-bold text-sm line-through">Rs.500/-</p>
        </div>
        {/* Add to cart button */}
        <button className="bg-white  text-primary border-primary border-1 cursor-pointer hover:text-white hover:bg-primary rounded-md px-4 py-2 font-bold text-sm w-full">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

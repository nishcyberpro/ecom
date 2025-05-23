"use client";
import { Inter } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { LuMapPinCheck } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { OutlineButton, SolidButton } from "./Buttons";
import { useCartStore } from "../store/cartStore";

const Navbar1 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const { items, removeFromCart, clearCart } = useCartStore();

  const leftMenu = [
    { name: "About Us", link: "/" },
    { name: "My Account", link: "/products" },
    { name: "Wishlist", link: "/about" },
  ];

  const rightMenu = [
    { name: "English", link: "/", icon: <IoIosArrowDown /> },
    { name: "USD", link: "/products", icon: <IoIosArrowDown /> },
    { name: "Order Tracking", link: "/about" },
  ];

  return (
    <div className="relative flex flex-col w-screen items-center justify-center gap-2">
      <div className="flex items-center justify-between w-full max-w-[1400px] border-b border-[#E5E7EB] bg-white px-2 py-2">
        {/* Desktop Left Menu */}
        <div className="hidden sm:flex items-center justify-center gap-4 text-[14px]">
          <ul className="flex items-center gap-6">
            {leftMenu.map((item, index) => (
              <li key={index} className="hover:cursor-pointer">
                {item.name}
              </li>
            ))}
          </ul>
          <div className="flex items-center pl-2 border-l-[1px] border-[#6B7280]">
            <p className="font-medium text-[11px] text-[#6B7280]">
              We deliver to you every day from{" "}
              <span className="font-bold text-red-600">7:30 to 23:00</span>
            </p>
          </div>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="sm:hidden flex items-center justify-between w-full">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl focus:outline-none"
          >
            <GiHamburgerMenu />
          </button>
          <div>
            <ul className="flex gap-2 items-center">
              <li>
                <CgProfile size={30} />
              </li>
              <Link href={"/login"}>
                <li>
                  <p className="font-thin">Sign In</p>
                  <p>Account</p>
                </li>
              </Link>
              {/* <li className="relative">
                <CiShoppingCart size={30} />
              </li> */}
              <li>
                <GoHeart size={30} />
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Right Menu */}
        <div className="hidden sm:flex items-center justify-center gap-4 text-[14px] font-thin text-[#6B7280]">
          <ul className="flex items-center gap-6">
            {rightMenu.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-1 hover:cursor-pointer"
              >
                {item.name} {item.icon}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full bg-white z-10 p-4 shadow-md sm:hidden">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="mb-4 text-2xl focus:outline-none"
          >
            ✕
          </button>

          <ul className="flex flex-col gap-4">
            {leftMenu.map((item, index) => (
              <li key={index} className="hover:cursor-pointer">
                {item.name}
              </li>
            ))}
            {rightMenu.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 hover:cursor-pointer"
              >
                {item.name} {item.icon}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex w-full max-w-[1400px] h-[41px] items-center justify-between px-2 gap-2 max-sm:flex-col">
        <div className="flex items-center justify-center gap-2 max-sm:justify-between ">
          <Link href={"/"}>
            <Image src={"/logo.png"} alt="logo" width={150} height={41} />
          </Link>
          <div className="hidden h-full">
            <LuMapPinCheck size={35} />
          </div>
          <div className="flex max-sm:hidden  min-w-[120px] flex-col items-center">
            <p className="font-thin">Deliver to</p>
            <p className="font-bold">all Nepal</p>
          </div>
        </div>
        <div className="w-full relative ">
          <input
            type="text"
            className="w-full shadow-sm bg-[#F3F4F6] px-2 py-2 rounded-md focus:outline-none font-thin text-[18px] "
            placeholder="Search for products"
          />
          <div className="absolute right-2 top-2">
            <CiSearch size={25} />
          </div>
        </div>
        <div className="max-sm:hidden">
          <ul className="flex gap-2 items-center">
            <li>
              <CgProfile size={30} />
            </li>
            <Link
              href={"/login"}
              className="cursor-pointer hover:text-gray-500"
            >
              <li>
                <p className="font-thin">Sign In</p>
                <p>Account</p>
              </li>
            </Link>
            <li className="relative ">
              <button
                onClick={() => setCheckoutOpen(!checkoutOpen)}
                className="cursor-pointer"
              >
                <CiShoppingCart size={30} className="max-sm:hidden" />
              </button>

              {checkoutOpen && (
                <div className=" absolute top-16 right-0  w-100 bg-white rounded-sm shadow-sm  z-20 p-4 transform  translate-y-[-10px] animate-fadeIn ">
                  <p className="text-center">
                    Your cart {items.length === 0 ? "is empty" : "items"}
                  </p>
                  <div className="flex flex-col items-center justify-between px-2 py-2 border-t border-primary overflow-y-auto max-h-[25vh]">
                    {items.map((item) => (
                      <div
                        className="flex gap-2 items-center justify-between w-full"
                        key={item.productId}
                      >
                        {" "}
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-10 h-10 object-cover rounded"
                        />
                        <h5 className="font-thin max-w-[50px]">{item.name}</h5>
                        <p className="font-thin">x {item.quantity}</p>
                        <p className="font-thin">Rs. {item.price}/-</p>
                        <button
                          className="text-red-500 cursor-pointer"
                          onClick={() => removeFromCart(item.productId)}
                        >
                          X
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-2 py-2">
                    <a href="/cart">
                      {" "}
                      <SolidButton btnText="Checkout" />
                    </a>

                    <OutlineButton btnText="Clear" onClick={clearCart} />
                  </div>
                </div>
              )}
            </li>
            <li>
              <GoHeart size={30} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;

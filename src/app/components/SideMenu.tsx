"use client";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoCloudyNight } from "react-icons/io5";
const sideMenuItems = [
  { name: "All Categories", link: "/" },
  { name: "Printed Cushion covers", link: "/" },
  { name: "Custom Cushions", link: "/" },
  { name: "Cutom Mug", link: "/" },
  { name: "Photo Frame", link: "/" },
  { name: "Snacks", link: "/" },
  { name: "Beverages", link: "/" },
  { name: "Frozen Foods", link: "/" },
  { name: "Household Items", link: "/" },
  { name: "Personal Care", link: "/" },
  { name: "Baby Care", link: "/" },
  { name: "Pet Care", link: "/" },
];
const SideMenu = () => {
  return (
    <div className="flex w-[250px] max-sm:hidden">
      <div className=" w-full ">
        <ul>
          {sideMenuItems.map((item, index) => (
            <li
              key={index}
              className={`flex items-center text-[14px] font-thin text-[#6B7280] border-gray-50 shadow-sm border-b-${
                index === sideMenuItems.length - 1 ? "1" : "0"
              } hover:cursor-pointer px-2 py-2 border-1 hover:bg-[#fc7c7c] hover:text-[#6B7280]transition duration-300 ease-in-out ${
                index === 0 ? "rounded-t-md " : ""
              } ${index === sideMenuItems.length - 1 ? "rounded-b-md" : ""}`}
            >
              <div
                className="flex items-center justify-between w-full   "
                onMouseOver={() => {
                  console.log("hover");
                }}
              >
                <div className="flex items-center gap-2">
                  {<IoCloudyNight />}
                  <p>{item.name}</p>
                </div>

                <IoIosArrowForward className="text-[14px] text-[#6B7280]" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;

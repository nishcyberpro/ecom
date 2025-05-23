"use client";
import React, { useState } from "react";
import { FiHome, FiFilter, FiUser, FiX, FiShoppingCart } from "react-icons/fi";
import { TbCategory } from "react-icons/tb";

const categories = [
  {
    name: "Electronics",
    img: "https://res.cloudinary.com/dprwdppgz/image/upload/v1744304770/21_k9sbpd.jpg",
  },
  {
    name: "Fashion",
    img: "https://res.cloudinary.com/dprwdppgz/image/upload/v1744304770/21_k9sbpd.jpg",
  },
  {
    name: "Home & Garden",
    img: "https://res.cloudinary.com/dprwdppgz/image/upload/v1744304770/21_k9sbpd.jpg",
  },
  {
    name: "Sports",
    img: "https://res.cloudinary.com/dprwdppgz/image/upload/v1744304770/21_k9sbpd.jpg",
  },
  {
    name: "Beauty",
    img: "https://res.cloudinary.com/dprwdppgz/image/upload/v1744304770/21_k9sbpd.jpg",
  },
  {
    name: "Toys",
    img: "https://res.cloudinary.com/dprwdppgz/image/upload/v1744304770/21_k9sbpd.jpg",
  },
];

const MobileMenu = ({ filter }: { filter: boolean }) => {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <>
      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-primary to-indigo-600 py-2 sm:hidden z-50 shadow-xl rounded-t-xl">
        <div className="flex justify-around text-white">
          <a href="/" className="flex flex-col items-center">
            <FiHome size={24} />
            <span className="text-xs">Home</span>
          </a>
          <button
            onClick={() => setShowCategories(true)}
            className="flex flex-col items-center focus:outline-none"
          >
            <TbCategory size={24} />
            <span className="text-xs">Categories</span>
          </button>
          {filter && (
            <a href="/filters" className="flex flex-col items-center">
              <FiFilter size={24} />
              <span className="text-xs">Filters</span>
            </a>
          )}
          <a href="/cart" className="flex flex-col items-center">
            <FiShoppingCart size={24} />
            <span className="text-xs">Cart</span>
          </a>{" "}
          <a href="/account" className="flex flex-col items-center">
            <FiUser size={24} />
            <span className="text-xs">Account</span>
          </a>
        </div>
      </div>

      {/* Slide-up Categories Drawer */}
      {showCategories && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setShowCategories(false)}
          />

          {/* Slide-Up Panel */}
          <div className="fixed inset-x-0 bottom-0 h-2/3 z-50 rounded-t-4xl bg-white backdrop-blur-sm border-t border-white/30 shadow-lg animate-slideUp">
            <div className="p-5 h-full overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-primary">
                  Browse Categories
                </h2>
                <button
                  onClick={() => setShowCategories(false)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <FiX size={24} />
                </button>
              </div>

              {/* Category Grid */}
              <div className="grid grid-cols-3 gap-5">
                {categories.map((cat, idx) => (
                  <div
                    key={idx}
                    className=" p-3 flex flex-col items-center justify-center  hover:shadow-lg transition-all border border-transparent hover:border-indigo-400"
                  >
                    <div className="w-16 h-16 rounded-full overflow-hidden border-0  shadow-md mb-2">
                      <img
                        src={cat.img}
                        alt={cat.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm font-semibold text-gray-700 text-center">
                      {cat.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Animation */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0%);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.35s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default MobileMenu;

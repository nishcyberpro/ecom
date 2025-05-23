"use client";
import React, { useState } from "react";
import {
  FaPlus,
  FaBox,
  FaChartBar,
  FaUsers,
  FaChevronDown,
  FaChevronUp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Navbar1 from "../components/Navbar1";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility

  return (
    <div className="flex flex-col gap-2">
      <Navbar1 />

      {/* Hamburger Menu for Mobile */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="absolute top-[20px] left-4 z-50 bg-gray-800 text-white p-2 rounded-md md:hidden"
      >
        {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      <div className="flex min-h-screen mt-4 max-w-[1400px] jcontent-center mx-auto">
        {/* Sidebar */}
        <aside
          className={`fixed max-sm:top-[100px] top-0 left-0 h-screen bg-white text-black flex flex-col shadow-lg transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:relative md:translate-x-0 w-64`}
        >
          <div className="p-4 text-lg font-bold border-b border-gray-700">
            Dashboard
          </div>
          <nav className="flex-1 p-4 space-y-4">
            <a
              href="/dashboard/add-category"
              className="flex items-center gap-3 p-2 rounded hover:bg-gray-700 hover:text-white"
            >
              <FaPlus />
              <span>Add Category</span>
            </a>
            {/* Add Product with Submenu */}
            <div>
              <button
                onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                className="flex items-center justify-between w-full gap-3 p-2 rounded hover:bg-gray-700 hover:text-white"
              >
                <div className="flex items-center gap-3">
                  <FaBox />
                  <span>Add Product</span>
                </div>
                {isSubmenuOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {isSubmenuOpen && (
                <div className="ml-6 mt-2 space-y-2">
                  <a
                    href="/dashboard/add-product/simple"
                    className="block text-sm text-gray-600 hover:text-gray-800"
                  >
                    Simple Product
                  </a>
                  <a
                    href="/dashboard/add-product/variable"
                    className="block text-sm text-gray-600 hover:text-gray-800"
                  >
                    Variable Product
                  </a>
                  <a
                    href="/dashboard/add-product/digital"
                    className="block text-sm text-gray-600 hover:text-gray-800"
                  >
                    Digital Product
                  </a>
                </div>
              )}
            </div>
            <a
              href="/dashboard/analytics"
              className="flex items-center gap-3 p-2 rounded hover:bg-gray-700 hover:text-white"
            >
              <FaChartBar />
              <span>Analytics</span>
            </a>
            <a
              href="/dashboard/users"
              className="flex items-center gap-3 p-2 rounded hover:bg-gray-700 hover:text-white"
            >
              <FaUsers />
              <span>Manage Users</span>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white p-2">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;

"use client";
import React, { useState } from "react";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const LoginRegister = () => {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  return (
    <div className="flex flex-col gap-8  bg-gray-50">
      <Navbar1 />

      <div className="max-w-[500px] mx-auto mt-10 p-6 bg-white shadow rounded-lg mb-10">
        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setActiveTab("login")}
            className={`px-4 py-2 font-semibold focus:outline-none ${
              activeTab === "login"
                ? "border-b-2 border-amber-700 text-amber-700"
                : "text-gray-600"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab("register")}
            className={`px-4 py-2 font-semibold focus:outline-none ${
              activeTab === "register"
                ? "border-b-2 border-amber-700 text-amber-700"
                : "text-gray-600"
            }`}
          >
            Register
          </button>
        </div>
        {/* Form */}
        {activeTab === "login" ? (
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <button type="submit" className="btn">
              Login
            </button>
          </form>
        ) : (
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-amber-700 text-white py-2 rounded hover:bg-amber-800 transition"
            >
              Register
            </button>
          </form>
        )}
        {/* Social Login */}
        <div className="my-6 text-center text-gray-500">or connect with</div>
        <div className="flex justify-center gap-4">
          <button className="flex items-center gap-2 border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 transition">
            <FcGoogle size={24} />
            <span>Google</span>
          </button>
          <button className="flex items-center gap-2 border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 transition">
            <FaFacebookF size={24} className="text-blue-600" />
            <span>Facebook</span>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LoginRegister;

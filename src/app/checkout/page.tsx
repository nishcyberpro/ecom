"use client";
import React, { useState } from "react";
import Navbar1 from "../components/Navbar1";

const CheckOut = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulate login state

  return (
    <div className="flex flex-col gap-4">
      <Navbar1 />

      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Checkout</h2>

            {/* Email */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              />
            </div>

            {/* Warranty Options */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Protect Your Product
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Extend your warranty for longer protection.{" "}
                <a
                  href="#"
                  className="text-primary font-medium hover:underline"
                >
                  Learn More
                </a>
              </p>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-700">
                    Add 12 additional months for $175, 24 total months of
                    coverage
                  </span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-700">
                    Add 24 additional months for $230, 39 total months of
                    coverage
                  </span>
                </label>
              </div>
            </div>

            {/* Shipping Details */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Shipping</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="zip"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    id="zip"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
              <select
                id="payment"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              >
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="cod">Cash on Delivery</option>
              </select>
            </div>

            {/* Place Order Button */}
            <button
              type="submit"
              className="btn bg-primary text-white w-full py-2 rounded-md hover:bg-primary-dark"
            >
              Place Order
            </button>
          </div>

          {/* Right Section: Cart Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Cart Summary</h3>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span>1 Bike+ Basics Package</span>
                <span>$2,495.00</span>
              </li>
              <li className="flex justify-between">
                <span>1 Peloton Membership</span>
                <span>$39.00</span>
              </li>
            </ul>
            <hr className="my-4" />
            <div className="flex justify-between">
              <span>Subtotal (2):</span>
              <span>$2,534.00</span>
            </div>
            <div className="flex justify-between">
              <span>Est. Tax:</span>
              <span>$0.00</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>$2,534.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;

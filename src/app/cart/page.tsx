"use client";
import React, { useState } from "react";
import { OutlineButton, SolidButton } from "../components/Buttons";
import Navbar1 from "../components/Navbar1";
import Container from "../containers/Container";
import { useCartStore } from "../store/cartStore";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";

const Cart = () => {
  const { items, addToCart, removeFromCart, clearCart } = useCartStore();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Navbar1 />
      <Container widthClass="max-w-[1400px] mt-16 px-4">
        <h1 className="text-3xl font-bold text-primary mb-6">Shopping Cart</h1>
        <div className="flex mx-auto  gap-4 py-6 max-sm:flex-col">
          <div className="w-full lg:w-3/4 bg-white rounded-lg p-4 ">
            {items.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="bg-white shadow rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4 font-bold">
                    <h3>Product</h3>
                    <h3>Price</h3>
                    <h3>Quantity</h3>
                    <h3>Total Price</h3>
                  </div>
                  <div className="flex flex-col divide-y divide-gray-300">
                    {items.map((item) => (
                      <div
                        key={item.productId}
                        className="flex items-center py-4 justify-between"
                      >
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-24 h-24 object-cover rounded"
                          />{" "}
                          <h2 className="text-xl font-semibold text-gray-800">
                            {item.name}
                          </h2>
                        </div>

                        <p className="text-gray-600">
                          ${item.price.toFixed(2)}
                        </p>
                        <div className="flex items-center mt-2">
                          <button
                            onClick={() => addToCart(item, -1)}
                            className="px-2 py-1 bg-gray-200 text-gray-700 rounded"
                          >
                            -
                          </button>
                          <span className="px-3">{item.quantity}</span>
                          <button
                            onClick={() => addToCart(item, 1)}
                            className="px-2 py-1 bg-gray-200 text-gray-700 rounded"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeFromCart(item.productId)}
                            className="px-2 ml-2 py-1 bg-gray-200 text-red-500 rounded"
                          >
                            X
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="text-lg font-bold text-primary">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-6">
                    <h2 className="text-2xl font-bold text-gray-800">Total:</h2>
                    <h2 className="text-2xl font-bold text-primary">
                      ${total.toFixed(2)}
                    </h2>
                  </div>
                </div>
                <div className="flex gap-2 w-full mt">
                  <OutlineButton btnText="Clear" onClick={clearCart} />
                </div>
              </div>
            )}
          </div>
          <div className="w-1/4 max-sm:w-full rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-bold mb-4">Calculate Shipping</h2>
            <input
              type="text"
              placeholder="City"
              className="rounded-lg shadow-md p-2 mb-4 w-full bg-gray-50 focus:outline-none"
            />
            <input
              type="text"
              placeholder="State"
              className="rounded-lg shadow-md p-2 mb-4 w-full bg-gray-50 focus:outline-none"
            />
            <div className="flex flex-col w-full items-start justify-center gap-2 mb-4 p-4 rounded-lg shadow-md  ">
              <h2>Cart Total</h2>
              <div className="flex items-center justify-between w-full">
                <p>Cart Subtotal</p>
                <p>Rs.450</p>
              </div>
              <div className="flex items-center justify-between w-full">
                <p>Cart Subtotal</p>
                <p>Rs.450</p>
              </div>
              <div className="flex items-center justify-between w-full">
                <p>Cart Subtotal</p>
                <p>Rs.450</p>
              </div>
              <div className="w-full">
                <Link href="/checkout"><SolidButton btnText="Proceed to Checkout"  /></Link>
                
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;

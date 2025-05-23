"use client";
import React, { useState } from "react";

const Filters = () => {
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");

  const applyFilters = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your filter logic here
    console.log({ minPrice, maxPrice, category, rating });
  };

  return (
    <form
      onSubmit={applyFilters}
      className="p-4 bg-white shadow rounded-lg space-y-6 "
    >
      <h2 className="text-lg font-semibold">Filter Products</h2>
      {/* Price Range */}
      <div>
        <h3 className="text-md font-semibold mb-2">Price Range</h3>
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={minPrice}
            onChange={(e) =>
              setMinPrice(e.target.value === "" ? "" : Number(e.target.value))
            }
            placeholder="Min"
            className="border border-gray-300 shadow-sm p-2 rounded-md focus:outline-none w-full"
          />
          <span className="text-gray-500">-</span>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) =>
              setMaxPrice(e.target.value === "" ? "" : Number(e.target.value))
            }
            placeholder="Max"
            className="border border-gray-300 shadow-sm p-2 rounded-md focus:outline-none w-full"
          />
        </div>
      </div>
      {/* Category */}
      <div>
        <h3 className="text-md font-semibold mb-2">Category</h3>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 shadow-sm p-2 rounded-md focus:outline-none w-full"
        >
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home">Home &amp; Garden</option>
          <option value="sports">Sports</option>
        </select>
      </div>
      {/* Rating */}
      <div>
        <h3 className="text-md font-semibold mb-2">Rating</h3>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="border border-gray-300 shadow-sm p-2 rounded-md focus:outline-none w-full"
        >
          <option value="">All Ratings</option>
          <option value="4">4 stars &amp; up</option>
          <option value="3">3 stars &amp; up</option>
          <option value="2">2 stars &amp; up</option>
          <option value="1">1 star &amp; up</option>
        </select>
      </div>
      {/* Apply Button */}
      <button
        type="submit"
        className="w-full bg-amber-700 text-white py-2 rounded-md font-bold hover:bg-amber-800 transition"
      >
        Apply Filters
      </button>
    </form>
  );
};

export default Filters;

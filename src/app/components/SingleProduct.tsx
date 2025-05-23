"use client";
import React, { useState } from "react";
import { FcRating } from "react-icons/fc";
import { FiHeart, FiShare2 } from "react-icons/fi";
import { OutlineButton, SolidButton } from "./Buttons";
import { products } from "../data/products";
import { useCartStore } from "../store/cartStore";
import { Input, Modal } from "antd";
import toast from "react-hot-toast";

const images = [
  "https://res.cloudinary.com/dlexgdp4i/image/upload/v1659875622/d2ojm3r123ezijr29mwq.jpg",
  "https://res.cloudinary.com/dlexgdp4i/image/upload/v1659875622/d2ojm3r123ezijr29mwq.jpg",
  "https://res.cloudinary.com/dlexgdp4i/image/upload/v1659875622/d2ojm3r123ezijr29mwq.jpg",
  "https://res.cloudinary.com/dlexgdp4i/image/upload/v1659875622/d2ojm3r123ezijr29mwq.jpg",
];

const SingleProduct = ({ title }: { title: string }) => {
  const [activeImage, setActiveImage] = useState(images[0]);
  const [isZoomed, setIsZoomed] = useState(false);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const sizes = ["S", "M", "L", "XL"];

  console.log(title);
  const product = products.filter(
    (product) => product.name === decodeURIComponent(title)
  );
  const handleQuantityChange = (value: number) => {
    // Ensure quantity is at least 1
    setQuantity(value);
    products[0].quantity = value < 1 ? 1 : value;
  };
  if (product.length === 0) {
    return <div>Product not found</div>;
  }
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">
        {decodeURIComponent(product[0].name)}
      </h1>

      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/2">
          <div className="relative">
            <img
              src={product[0].image}
              alt="Product"
              className="w-full h-auto cursor-zoom-in"
              onClick={() => setIsZoomed(true)}
            />
          </div>
          <div className="flex mt-4 space-x-2">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`w-16 h-16 object-cover border ${
                  activeImage === img ? "border-primary" : "border-gray-300"
                } cursor-pointer`}
                onClick={() => setActiveImage(img)}
              />
            ))}
          </div>
        </div>
        {/* Product Details */}
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h2 className="text-xl font-semibold mb-2">Product Name</h2>
          <p className="mb-4 text-lg font-bold text-amber-700">$99.99</p>
          {/* Ratings */}
          <div className="flex items-center gap-1 mb-4">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <FcRating key={index} size={24} />
              ))}
            <span className="text-gray-600 text-sm">(300 reviews)</span>
          </div>
          <p className="mb-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
            orci eget eros faucibus tincidunt. Sed ac nibh sed ligula fermentum
            accumsan.
          </p>
          {/* Variations: Size */}
          <div className="mb-4">
            <div className="mb-2 font-semibold">Size:</div>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`px-3 py-1 border rounded-md transition ${
                    selectedSize === size
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          {/* Variations: Quantity */}
          <div className="mb-4">
            <div className="mb-2 font-semibold">Quantity:</div>
            <div className="flex items-center">
              <button
                onClick={() => handleQuantityChange(quantity - 1)}
                className="px-3 py-1 border border-gray-300"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => handleQuantityChange(Number(e.target.value))}
                className="w-16 text-center border-t border-b border-gray-300"
                min="1"
              />
              <button
                onClick={() => handleQuantityChange(quantity + 1)}
                className="px-3 py-1 border border-gray-300"
              >
                +
              </button>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-4">
            <SolidButton btnText="Buy Now" onClick={showModal} />
            <OutlineButton
              btnText="Add to Cart"
              onClick={() => {
                addToCart(product[0], quantity);
                toast.success("Item added to cart!");
              }}
            />
          </div>
          {/* Wishlist and Share */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-gray-700 hover:text-amber-700 transition">
              <FiHeart size={20} /> Add to Wishlist
            </button>
            <button className="flex items-center gap-2 text-gray-700 hover:text-amber-700 transition">
              <FiShare2 size={20} /> Share
            </button>
          </div>
        </div>
      </div>

      {/* Modal Zoom */}
      {isZoomed && (
        <div
          onClick={() => setIsZoomed(false)}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
        >
          <div className="relative">
            <img
              src={activeImage}
              alt="Zoomed Product"
              className="max-w-full max-h-full"
            />
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-2 right-2 text-white text-3xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
      <Modal
        title="Enter your delivery information."
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="flex flex-col space-x-1">
          <div className="flex gap-4 ">
            <p>{product[0].name}</p>
            <p>Quantity:{quantity}</p>
            <p>Size:</p>
          </div>
          <Input type="text" placeholder="Name" />.
          <Input type="text" placeholder="Your address" />
          <Input type="text" placeholder="Phone No." />
        </div>
      </Modal>
    </div>
  );
};

export default SingleProduct;

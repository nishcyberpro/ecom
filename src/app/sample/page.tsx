"use client";

import { useCartStore } from "../store/cartStore";

export default function CartExample() {
  const { items, addToCart, removeFromCart, updateQuantity, clearCart } =
    useCartStore();

  const handleAdd = () => {
    addToCart({
      productId: "p1",
      name: "Cool Shoes",
      price: 49.99,
      quantity: 1,
      image: "https://via.placeholder.com/150",
    });
  };
  const handleAddAgain = () => {
    addToCart({
      productId: "p2",
      name: "clothes",
      price: 69.99,
      quantity: 1,
      image: "https://via.placeholder.com/150",
    });
  };

  return (
    <div className="p-4 space-y-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleAdd}
      >
        Add Sample Product
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleAdd}
      >
        Add Sample Product
      </button>

      {items.map((item) => (
        <div key={item.productId} className="border p-2 rounded shadow">
          <h2 className="text-lg font-bold">{item.name}</h2>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <div className="flex gap-2 mt-2">
            <button
              className="bg-green-500 text-white px-2 py-1 rounded"
              onClick={() => updateQuantity(item.productId, item.quantity + 1)}
            >
              +
            </button>
            <button
              className="bg-yellow-500 text-white px-2 py-1 rounded"
              onClick={() => updateQuantity(item.productId, item.quantity - 1)}
            >
              -
            </button>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => removeFromCart(item.productId)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {items.length > 0 && (
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded mt-4"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      )}
    </div>
  );
}

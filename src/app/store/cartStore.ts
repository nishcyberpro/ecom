// store/cartStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Product = {
  productId: string;
  name: string;
  price: number;
  image: string;
};

type CartState = {
  items: (Product & { quantity: number })[]; // Add quantity dynamically here
  addToCart: (product: Product, quantity: number) => void; // Pass quantity as a parameter
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (product, quantity) => {
        const existing = get().items.find(
          (p) => p.productId === product.productId
        );
        if (existing) {
          set({
            items: get().items.map((p) =>
              p.productId === product.productId
                ? { ...p, quantity: Math.max(1, p.quantity + quantity) } // Ensure quantity is not less than 0
                : p
            ),
          });
        } else {
          set({ items: [...get().items, { ...product, quantity }] }); // Add product with quantity
        }
      },
      removeFromCart: (productId) => {
        set({ items: get().items.filter((p) => p.productId !== productId) });
      },
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage", // localStorage key
    }
  )
);

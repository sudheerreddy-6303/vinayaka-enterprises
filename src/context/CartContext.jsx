import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "vinayak_cart";

function priceToNumber(price) {
  // "₹299.00" -> 299
  const n = parseFloat(String(price).replace(/[^0-9.]/g, ""));
  return isNaN(n) ? 0 : n;
}

function loadInitial() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadInitial); // { name, price, priceValue, img, qty }

  // keep the cart saved so it survives page refreshes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore storage errors */
    }
  }, [items]);

  const addToCart = (product) => {
    setItems((prev) => {
      const idx = prev.findIndex((x) => x.name === product.name);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + 1 };
        return copy;
      }
      return [
        ...prev,
        {
          name: product.name,
          price: product.price,
          priceValue: priceToNumber(product.price),
          img: product.img || "",
          qty: 1,
        },
      ];
    });
  };

  const removeItem = (name) =>
    setItems((prev) => prev.filter((x) => x.name !== name));

  const setQty = (name, qty) =>
    setItems((prev) =>
      prev.map((x) => (x.name === name ? { ...x, qty: Math.max(1, qty) } : x))
    );

  const clearCart = () => setItems([]);

  const count = items.reduce((s, x) => s + x.qty, 0);
  const total = items.reduce((s, x) => s + x.priceValue * x.qty, 0);

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeItem, setQty, clearCart, count, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

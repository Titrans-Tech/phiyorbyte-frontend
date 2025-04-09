import { createContext, useContext, useState, useEffect } from "react";
import { addCart } from "@/service/cart";
import { useAuth } from "@/context/authContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    // Load cart from localStorage on initial load
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
      setCartCount(JSON.parse(savedCart).length);
    }
  }, []);

  const addToCart = (product, quantity = 1) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }

    // Update localStorage
    const updatedCart =
      existingItemIndex >= 0
        ? cart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
          )
        : [...cart, { ...product, quantity }];

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartCount(updatedCart.length);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartCount(updatedCart.length);
  };

  const updateQuantity = (productId, quantity) => {
    const updatedCart = cart.map((item) => (item.id === productId ? { ...item, quantity } : item));
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]);
    setCartCount(0);
    localStorage.removeItem("cart");
  };

  const syncCartWithAPI = async () => {
    if (!isAuthenticated) return;

    try {
      // Get the current local cart
      const localCart = JSON.parse(localStorage.getItem("cart") || "[]");

      // Sync each item to the API
      for (const item of localCart) {
        const bodyData = {
          user_id: JSON.parse(localStorage.getItem("user_data"))?.id,
          quantity: item.quantity,
        };
        await addCart(item.id, bodyData);
      }

      // Clear local storage after successful sync
      clearCart();
    } catch (error) {
      console.error("Error syncing cart with API:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        syncCartWithAPI,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

import { viewProductOrders } from "@/service/user";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/authContext";
import { useCart } from "@/context/cartContext";

export const useFetchCart = () => {
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(null);
  const { isAuthenticated } = useAuth();
  const { cart: localCart, syncCartWithAPI } = useCart();

  const getCartOrder = async () => {
    if (isAuthenticated) {
      try {
        setLoading(true);
        const res = await viewProductOrders();
        const response = await res.data;
        if (response) {
          setLoading(false);
          setCart(response?.cart_items?.data);
          setTotalAmount(response?.total_amount);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    } else {
      // For unauthenticated users, use local storage cart
      setCart(localCart);
      setTotalAmount(localCart.reduce((total, item) => total + item.amount * item.quantity, 0));
    }
  };

  useEffect(() => {
    getCartOrder();

    if (isAuthenticated && localCart.length > 0) {
      syncCartWithAPI();
    }
  }, [isAuthenticated, localCart]);

  return { cart, totalAmount, loading, getCartOrder };
};

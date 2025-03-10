import { viewProductOrders } from "@/service/user";
import { useEffect, useState } from "react";

export const useFetchCart = () => {
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(null);

  const getCartOrder = async () => {
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
  };

  useEffect(() => {
    getCartOrder();
  }, []);

  return { cart, totalAmount, loading, getCartOrder };
};

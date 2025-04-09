/* eslint-disable @next/next/no-img-element */
import { deleteCart } from "@/service/cart";
import { getErrorMessage, WithCommas } from "@/utils";
import { useAuth } from "@/context/authContext";
import { useCart } from "@/context/cartContext";
import Image from "next/image";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

export const ProductCartCard = ({ fav, getCartOrder }) => {
  const [loading, setLoading] = useState(false);
  const { isAuthenticated } = useAuth();
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrement = async () => {
    if (isAuthenticated) {
      try {
        setLoading(true);
        const res = await deleteCart(fav?.id);
        const response = await res.data;
        if (response) {
          getCartOrder();
        }
      } catch (error) {
        console.log(getErrorMessage(error));
      } finally {
        setLoading(false);
      }
    } else {
      // For unauthenticated users, update local storage
      updateQuantity(fav.id, fav.quantity + 1);
    }
  };

  const handleDecrement = async () => {
    if (fav.quantity <= 1) return;

    if (isAuthenticated) {
      try {
        setLoading(true);
        const res = await deleteCart(fav?.id);
        const response = await res.data;
        if (response) {
          getCartOrder();
        }
      } catch (error) {
        console.log(getErrorMessage(error));
      } finally {
        setLoading(false);
      }
    } else {
      // For unauthenticated users, update local storage
      updateQuantity(fav.id, fav.quantity - 1);
    }
  };

  const handleDelete = async () => {
    if (isAuthenticated) {
      try {
        setLoading(true);
        const res = await deleteCart(fav?.id);
        const response = await res.data;
        if (response) {
          getCartOrder();
        }
      } catch (error) {
        console.log(getErrorMessage(error));
      } finally {
        setLoading(false);
      }
    } else {
      // For unauthenticated users, remove from local storage
      removeFromCart(fav.id);
    }
  };

  return (
    <div className="border-b py-1 flex items-center justify-between">
      <div className="flex items-start gap-2">
        <img src={fav?.images1[0]} alt="" className="w-[70px]" />
        {/* <Image src={`/assets/category/${fav.img}`} width={70} height={70} alt="category-img" /> */}
        <div>
          <h3 className="font-bold text-base">{fav.product_name}</h3>
          <p className="text-sm font-normal">Size: {fav?.product_size}</p>
          <p className="text-sm font-normal">Color: {fav?.product_colors} </p>
          <h2 className="font-bold text-lg">₦{WithCommas(fav?.amount)}</h2>
        </div>
      </div>
      <div className="flex items-end gap-10 justify-end flex-col">
        <RiDeleteBin6Fill
          onClick={handleDelete}
          color="red"
          cursor="pointer"
          fontSize={20}
          className={loading ? "opacity-50" : ""}
        />
        <div className="bg-[#F0F0F0] flex items-center justify-around w-[80px] py-1 rounded-full">
          <button
            disabled={fav.quantity <= 1 || loading}
            onClick={handleDecrement}
            className={loading ? "opacity-50" : ""}
          >
            <FaMinus />
          </button>
          <span>{fav.quantity}</span>
          <button onClick={handleIncrement} className={loading ? "opacity-50" : ""}>
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

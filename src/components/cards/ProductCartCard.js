/* eslint-disable @next/next/no-img-element */
import { deleteCart } from "@/service/cart";
import { getErrorMessage } from "@/utils";
import Image from "next/image";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

export const ProductCartCard = ({ fav, getCartOrder }) => {
  const [items, setItems] = useState(1);
  const [loading, setLoading] = useState(false);

  console.log(fav, "the favourites");

  const incrementCart = () => {
    setItems((prevItems) => prevItems + 1);
  };

  const decrementCart = () => {
    setItems((prevItems) => prevItems - 1);
  };

  const deleteCartItems = async () => {
    try {
      setLoading(true);
      const res = await deleteCart(fav?.user_id);
      const response = await res.data;
      if (response) {
        setLoading(false);
        getCartOrder();
      }
    } catch (error) {
      setLoading(false);
      console.log(getErrorMessage(error));
    }
  };

  return (
    <div className="border-b py-1 flex items-center justify-between">
      <div className="flex items-start gap-2">
        <img src={fav?.images1} alt="" className="w-[70px]" />
        {/* <Image src={`/assets/category/${fav.img}`} width={70} height={70} alt="category-img" /> */}
        <div>
          <h3 className="font-bold text-base">{fav.product_name}</h3>
          <p className="text-sm font-normal">Size: {fav?.product_size}</p>
          <p className="text-sm font-normal">Color: {fav?.product_colors} </p>
          <h2 className="font-bold text-lg">₦{fav?.amount}</h2>
        </div>
      </div>
      <div className="flex items-end gap-10 justify-end flex-col">
        <RiDeleteBin6Fill onClick={deleteCartItems} color="red" cursor="pointer" fontSize={20} />
        <div className="bg-[#F0F0F0] flex items-center justify-around w-[80px] py-1 rounded-full px- ">
          <button disabled={items === 1} onClick={decrementCart}>
            <FaMinus />
          </button>
          <span>{items}</span>
          <button onClick={incrementCart}>
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

import Image from "next/image";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

export const ProductCartCard = ({ fav }) => {
  const [items, setItems] = useState(1);

  const incrementCart = () => {
    setItems((prevItems) => prevItems + 1);
  };

  const decrementCart = () => {
    setItems((prevItems) => prevItems - 1);
  };

  return (
    <div className="border-b py-1 flex items-center justify-between">
      <div className="flex items-start gap-2">
        <Image src={`/assets/category/${fav.img}`} width={70} height={70} alt="category-img" />
        <div>
          <h3 className="font-bold text-base">{fav.name}</h3>
          <p className="text-sm font-normal">Size: Large</p>
          <p className="text-sm font-normal">Color: {fav.color} </p>
          <h2 className="font-bold text-lg">{fav.price}</h2>
        </div>
      </div>
      <div className="flex items-end gap-10 justify-end flex-col">
        <RiDeleteBin6Fill color="red" cursor="pointer" fontSize={20} />
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
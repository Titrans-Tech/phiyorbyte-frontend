import { FiTag } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";

export const CartSummary = () => {
  return (
    <section className="border w-full space-y-3 py-3 px-3 my-5 max-w-lg rounded-md ">
      <h3 className="text-lg font-bold">Order Summary</h3>
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-[#00000099] font-normal">Subtotal</h3>
          <p className="font-bold text-lg text-black">$565</p>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-[#00000099] font-normal">Discount (-20%)</h3>
          <p className="font-bold text-lg text-[#FF3333]">$5</p>
        </div>
        <div className="flex items-center border-b pb-2 justify-between">
          <h3 className="text-[#00000099] font-normal">Delivery Fee</h3>
          <p className="font-bold text-lg text-black">$65</p>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-[#00000099] font-normal">Total</h3>
          <p className="font-bold text-lg text-black">$467</p>
        </div>
      </section>
      <section className="flex !mb-5 items-center gap-2 ">
        <div className="flex  w-full items-center gap-2 h-10 bg-[#F0F0F0] px-4 rounded-full">
          <FiTag color="#00000066" fontSize={18} />
          <input
            type="text"
            placeholder="Add promo code"
            className="h-full w-full border-0 outline-none bg-transparent"
          />
        </div>
        <button className="py-2 text-sm px-4 bg-[#000000] text-white flex items-center justify-center rounded-full">
          Apply
        </button>
      </section>
      <button className="py-3  gap-2 font-medium  w-full text-sm px-4 bg-[#000000] text-white flex items-center justify-center rounded-full">
        <span> Go to Checkout</span>
        <GoArrowRight fontSize={18} fontWeight={600} />
      </button>
    </section>
  );
};

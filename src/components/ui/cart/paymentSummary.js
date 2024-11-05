import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { GoTag } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

export const PaymentSummary = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <section className=" border rounded-md py-3 px-3 border-[#0000001A]">
      <div className="border-b ">
        <div className="flex items-center justify-between py-2">
          <h3 className="font-bold text-lg text-black">3. Payment Information</h3>
          <IoIosArrowDown
            onClick={() => setIsOpen(!isOpen)}
            className="text-lg text-black cursor-pointer"
          />
        </div>
      </div>
      {isOpen && (
        <div>
          <div className="flex my-2 items-baseline gap-2">
            <input
              className="w-4 h-4 accent-black "
              type="radio"
              id="paymentMethod"
              name="paymentMethod"
            />
            <div>
              <h3 className="text-base font-medium text-black">Pay with card</h3>
              <p className="text-sm font-normal text-[#00000099]">
                Choose our Pick-Up Station delivery method for a convenient and secure way to
                collect your order at a location near you. Skip the wait and get your package at
                your own convenience!
              </p>
            </div>
          </div>
          <div className="flex my-2 items-baseline gap-2">
            <input
              className="w-4 h-4 accent-black"
              type="radio"
              id="paymentMethod"
              name="paymentMethod"
            />
            <div>
              <h3 className="text-base font-medium text-black">Pay with bank transfer or USSD</h3>
              <p className="text-sm font-normal text-[#00000099]">
                Choose our Pick-Up Station delivery method for a convenient and secure way to
                collect your order at a location near you. Skip the wait and get your package at
                your own convenience!
              </p>
            </div>
          </div>
          <section className="my-2">
            <h3 className="font-bold text-2xl text-black">Order Summary</h3>
            <div className="flex my-2 items-center justify-between">
              <p className="text-lg font-normal text-[#00000099]">Subtotal</p>
              <h3 className="font-bold text-xl text-black">$500</h3>
            </div>
            <div className="flex my-2 items-center justify-between">
              <p className="text-lg font-normal text-[#00000099]">Discount (-20%)</p>
              <h3 className="font-bold text-xl text-red-500">-$5</h3>
            </div>
            <div className="flex my-2 items-center justify-between border-b pb-1">
              <p className="text-lg font-normal text-[#00000099]">Delivery Fee</p>
              <h3 className="font-bold text-xl text-black">$15</h3>
            </div>
            <div className="flex my-2 items-center justify-between py-1">
              <p className="text-lg font-normal text-[#00000099]">Total</p>
              <h3 className="font-bold text-xl text-black">$500</h3>
            </div>
          </section>
          <div className="flex items-center gap-2 justify-between">
            <div className="w-full h-10 flex  items-center gap-1 px-2 bg-[#F0F0F0] rounded-full ">
              <GoTag fontSize={18} className="mt-1" />
              <input
                type="text"
                placeholder="Add Promo code"
                className="h-full text-sm placeholder:text-sm outline-none px-2 border-0 bg-transparent"
              />
            </div>
            <button className="flex items-center justify-center px-4 h-10 rounded-full bg-black text-white">
              Apply
            </button>
          </div>
          <button className="mt-6 w-full gap-2 hover:bg-[#333333] transition-all disabled:cursor-not-allowed flex items-center justify-center h-10 rounded-full bg-black text-white">
            <span className="text-base font-medium">Confirm Orders</span>
            <GoArrowRight fontSize={20} />
          </button>
        </div>
      )}
    </section>
  );
};

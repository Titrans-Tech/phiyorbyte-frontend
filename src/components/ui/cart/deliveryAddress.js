import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const DeliveryAddress = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section>
      <div className="border-b ">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg text-black py-2">2. Delivery details</h3>
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
              id="deliveryMethod"
              name="deliveryMethod"
            />
            <div>
              <h3 className="text-base font-medium text-black">Pick-up station</h3>
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
              id="deliveryMethod"
              name="deliveryMethod"
            />
            <div>
              <h3 className="text-base font-medium text-black">Door Delivery</h3>
              <p className="text-sm font-normal text-[#00000099]">
                Opt for Doorstep Delivery for the ultimate convenience. Have your order delivered
                straight to your door, hassle-free and right when you need it!
              </p>
            </div>
          </div>
          <div className="border rounded grid grid-cols-2 gap-2 py-2 px-2">
            {Array.from({ length: 4 }).map((dta, dtaIndex) => (
              <CheckoutItems key={dtaIndex} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export const CheckoutItems = () => {
  return (
    <div className="flex items-center gap-2">
      <Image src={`/assets/category/women1.png`} width={56} height={56} alt="category-img" />
      <div>
        <h3 className="text-sm font-bold text-black">Gradient Graphic T-shirt</h3>
        <p className="text-[10px] font-normal text-black">
          Size: <span className="text-[#00000099]">Large</span>
        </p>
        <p className="text-[10px] font-normal text-black">
          Color: <span className="text-[#00000099]">White</span>
        </p>
      </div>
    </div>
  );
};

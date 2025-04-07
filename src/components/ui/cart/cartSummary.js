import { BtnLoading } from "@/components/button/btnLoading";
import { addCouponApplication } from "@/service/cart";
import { getStoredId, WithCommas } from "@/utils";
import { useRouter } from "next/router";
import { useState } from "react";
import { FiTag } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";
import { useAuth } from "@/context/authContext";
import { useCart } from "@/context/cartContext";

export const CartSummary = ({ summary }) => {
  const { isAuthenticated } = useAuth();
  const { cart } = useCart();
  const router = useRouter();
  const [couponCode, setCouponCode] = useState("");
  const [loading, setLoading] = useState(false);

  const user_details = JSON.parse(getStoredId("user_data"));

  const handlePostCouponCode = async (e) => {
    e.preventDefault();
    const body = {
      coupon_code: couponCode,
      user_id: user_details.id,
    };
    try {
      setLoading(true);
      const res = await addCouponApplication(body);
      const response = await res.data;
      if (response) {
        setLoading(false);
        setCouponCode("");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleCheckout = () => {
    if (isAuthenticated) {
      router.push("/cart/checkout");
    } else {
      router.push(`/login?cart=${true}`);
    }
  };

  // Calculate total amount based on authentication status
  const totalAmount = isAuthenticated
    ? summary
    : cart.reduce((total, item) => total + item.amount * item.quantity, 0);

  return (
    <section className="border w-full space-y-3 py-3 px-3 my-5 max-w-lg rounded-md ">
      <h3 className="text-lg font-bold">Order Summary</h3>
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-[#00000099] font-normal">Subtotal</h3>
          <p className="font-bold text-lg text-black">₦{WithCommas(totalAmount)}</p>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-[#00000099] font-normal">Discount (-20%)</h3>
          <p className="font-bold text-lg text-[#FF3333]">₦0</p>
        </div>
        <div className="flex items-center border-b pb-2 justify-between">
          <h3 className="text-[#00000099] font-normal">Delivery Fee</h3>
          <p className="font-bold text-lg text-black">₦0</p>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-[#00000099] font-normal">Total</h3>
          <p className="font-bold text-lg text-black">₦{WithCommas(totalAmount)}</p>
        </div>
      </section>
      <form onSubmit={handlePostCouponCode} className="flex !mb-5 items-center gap-2 ">
        <div className="flex  w-full items-center gap-2 h-10 bg-[#F0F0F0] px-4 rounded-full">
          <FiTag color="#00000066" fontSize={18} />
          <input
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            type="text"
            required
            placeholder="Add promo code"
            className="h-full w-full border-0 outline-none bg-transparent"
          />
        </div>
        <button className="py-2 text-sm px-4 bg-[#000000] text-white flex items-center justify-center rounded-full">
          {loading ? <BtnLoading /> : "Apply"}
        </button>
      </form>
      <button
        onClick={handleCheckout}
        className="py-3  gap-2 font-medium  w-full text-sm px-4 bg-[#000000] text-white flex items-center justify-center rounded-full"
      >
        {isAuthenticated ? "Proceed to Checkout" : "Login to Checkout"}
      </button>
    </section>
  );
};

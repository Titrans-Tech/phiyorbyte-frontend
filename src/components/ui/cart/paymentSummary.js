import Alerts from "@/components/alert";
import { BtnLoading } from "@/components/button/btnLoading";
import { SuccessModal } from "@/components/successModal";
import { addCouponApplication, addToCheckout } from "@/service/cart";
import { getErrorMessage, getStoredId, WithCommas } from "@/utils";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { GoTag } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

export const PaymentSummary = ({ cart, address }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [user, setUser] = useState(null);
  const [state, setState] = useState("initial");
  const [err, setErr] = useState({
    isErr: false,
    errMsg: "",
  });
  const [couponCode, setCouponCode] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setUser(JSON.parse(getStoredId("user_data")));
    // setUser(JSON.parse(getStoredId("user_data"));
  }, []);

  const handlePostCouponCode = async (e) => {
    e.preventDefault();
    const body = {
      coupon_code: couponCode,
      user_id: user.id,
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

  const handleCheckout = async () => {
    const body = {
      amount: cart,
      pick_station: "Doorpost",
      delivery_address: address.delivery_address,
      delivery_phone: address.delivery_phone,
      delivery_state: address.delivery_state,
      delivery_city: address.delivery_city,
      email: address.email,
      phone: address.phone,
    };
    try {
      setState("loading");
      const res = await addToCheckout(body);
      const response = await res.data;
      if (response) {
        setState("success");
      }
    } catch (error) {
      setState("failed");
      setErr({
        isErr: true,
        errMsg: getErrorMessage(error),
      });
    }
  };

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
              <h3 className="font-bold text-xl text-black">₦{WithCommas(cart)}</h3>
            </div>
            <div className="flex my-2 items-center justify-between">
              <p className="text-lg font-normal text-[#00000099]">Discount (-20%)</p>
              <h3 className="font-bold text-xl text-red-500">-₦0</h3>
            </div>
            <div className="flex my-2 items-center justify-between border-b pb-1">
              <p className="text-lg font-normal text-[#00000099]">Delivery Fee</p>
              <h3 className="font-bold text-xl text-black">₦0</h3>
            </div>
            <div className="flex my-2 items-center justify-between py-1">
              <p className="text-lg font-normal text-[#00000099]">Total</p>
              <h3 className="font-bold text-xl text-black">₦{WithCommas(cart)}</h3>
            </div>
          </section>
          <form onSubmit={handlePostCouponCode} className="flex items-center gap-2 justify-between">
            <div className="w-full h-10 flex  items-center gap-1 px-2 bg-[#F0F0F0] rounded-full ">
              <GoTag fontSize={18} className="mt-1" />
              <input
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                type="text"
                required
                placeholder="Add Promo code"
                className="h-full w-full text-sm placeholder:text-sm outline-none px-2 border-0 bg-transparent"
              />
            </div>
            <button className="flex items-center justify-center px-4 h-10 rounded-full bg-black text-white">
              {loading ? <BtnLoading /> : "Apply"}
            </button>
          </form>
          <button
            onClick={handleCheckout}
            className="mt-6 w-full gap-2 hover:bg-[#333333] transition-all disabled:cursor-not-allowed flex items-center justify-center h-10 rounded-full bg-black text-white"
          >
            {state === "loading" ? (
              <BtnLoading />
            ) : (
              <>
                <span className="text-base font-medium">Confirm Orders</span>
                <GoArrowRight fontSize={20} />
              </>
            )}
          </button>
          <Alerts
            show={err.isErr}
            message={err.errMsg}
            close={() => setErr({ ...err, isErr: false })}
          />
        </div>
      )}

      {state === "success" && (
        <SuccessModal
          isOpen={state === "success"}
          message="Product successfully checkout"
          onClick={() => router.push("/cart")}
        />
      )}
    </section>
  );
};

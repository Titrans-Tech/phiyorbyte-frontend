import Image from "next/image";
import { FaCopy } from "react-icons/fa";

export const CouponUi = () => {
  const coupon = [
    { bonus: "25%", status: "NOT_REDEEMED", redeemStatus: "Ended" },
    { bonus: "15%", status: "REDEEMED", redeemStatus: "Available" },
    { bonus: "12%", status: "REDEEMED", redeemStatus: "Ended" },
    { bonus: "8%", status: "REDEEMED", redeemStatus: "Expired" },
  ];
  return (
    <section>
      <p>
        This exclusive ticket gives you access to fantastic rewards like discounts, free shipping,
        or bonus points on your next purchase. <strong>Just for you!</strong>
      </p>
      <div className="border p-4 rounded-md mt-5">
        {coupon.map((item, itemIndex) => (
          <CouponCard item={item} key={itemIndex} />
        ))}
      </div>
    </section>
  );
};

export const CouponCard = ({ item }) => {
  return (
    <div className="md:flex my-4 items-center border-b pb-2 justify-between">
      <div className="flex items-start gap-3">
        <Image height={50} width={100} className="" src="/assets/voucher.png" alt="" />
        <div>
          <h3 className="text-sm font-bold">{item.bonus} Discount on all sales</h3>
          <div className="flex items-center gap-2">
            <p className="text-xs text-[#00000099] mb-1  font-normal">
              <span className="font-normal text-black">Coupon Code:</span> #20252020
            </p>
            <FaCopy color="#666666" className="cursor-pointer" fontSize={12} />
          </div>
          <p className="text-xs text-[#00000099] mb-1 font-normal">
            <span className="font-normal text-black">Issued Date:</span> 13th June, 2024
          </p>
          <p className="text-xs text-[#00000099] mb-1 font-normal">
            <span className=" font-normal text-black">Expiring Date:</span> 30th June, 2024
          </p>
        </div>
      </div>
      <p
        className={`
            font-medium md:text-left text-right text-base ${
              item.redeemStatus === "Available"
                ? "text-[#01AB31]"
                : item.redeemStatus === "Ended"
                ? "text-[#666666]"
                : item.redeemStatus === "Expired"
                ? "text-[#FF3333]"
                : ""
            }
            `}
      >
        {item?.redeemStatus}
      </p>
    </div>
  );
};

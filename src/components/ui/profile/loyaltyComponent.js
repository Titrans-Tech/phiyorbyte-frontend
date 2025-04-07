import Image from "next/image";

export const LoyaltyBonuses = () => {
  const bonus = [
    { bonus: "25%", status: "NOT_REDEEMED", redeemStatus: null },
    { bonus: "15%", status: "REDEEMED", redeemStatus: "Available" },
    { bonus: "12%", status: "REDEEMED", redeemStatus: "Ended" },
    { bonus: "8%", status: "REDEEMED", redeemStatus: "Expired" },
  ];
  return (
    <section>
      <p>
        This exclusive ticket gives you access to fantastic rewards like discounts, free shipping,
        or bonus points on your next purchase.Thank you for being a valued customer
      </p>
      <div className="border p-4 rounded-md mt-5">
        {bonus.map((item, itemIndex) => (
          <LoyaltyCard item={item} key={itemIndex} />
        ))}
      </div>
    </section>
  );
};

export const LoyaltyCard = ({ item }) => {
  return (
    <div className="flex my-4 items-center border-b pb-2 justify-between">
      <div className="md:flex space-y-3 items-center gap-3">
        <Image height={50} width={100} className="" src="/assets/loyal-card.png" alt="" />
        <div>
          <h3 className="text-sm font-semibold">{item.bonus} off on next purchase</h3>
          <p className="text-sm font-normal">
            <span className="font-medium">Issued Date:</span> 13th June, 2024
          </p>
          <p className="text-medium font-normal">
            <span className=" font-medium">Expiring Date:</span> 30th June, 2024
          </p>
        </div>
      </div>
      {item.status === "REDEEMED" ? (
        <p
          className={`
            font-medium text-base ${
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
      ) : (
        <button className="h-10 rounded-full font-medium text-xs md:text-base bg-black text-white px-4 md:px-8">
          Redeem Now
        </button>
      )}
    </div>
  );
};

import { WithCommas } from "@/utils";
import moment from "moment";
import Image from "next/image";

export const OrderHistoryUi = ({ orders }) => {
  return (
    <section className="md:border p-4 rounded-md mt-5">
      {orders.map((item, itemIndex) => (
        <OrderHistoryCard item={item} key={itemIndex} />
      ))}
    </section>
  );
};

export const OrderHistoryCard = ({ item }) => {
  return (
    <div className="flex my-4 items-center border-b pb-2 justify-between">
      <div className="flex items-start gap-3">
        <Image height={50} width={100} className="" src={item?.images1[0]} alt="" />
        <div className="space-y-2">
          <h3 className="text-base font-bold">{item.product_name}</h3>
          <p className="text-xs font-normal">
            <span className="font-medium">Amount:</span> {WithCommas(item?.amount)}
          </p>

          <p className="text-xs font-normal">
            <span className=" font-medium">Order ID:</span> {item?.order_no}
          </p>
          <p className="text-xs font-normal">
            <span className=" font-medium">No of Items:</span> {item?.quantity} Item
          </p>
          <p className="text-xs font-normal">
            <span className=" font-medium">Date:</span>{" "}
            {moment(item?.created_at).format("DD MMM, YYYY")}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-10">
        <p
          className={`
            font-medium text-base ${
              item.status === "pending"
                ? "text-[#FFC633]"
                : item.status === "success"
                ? "text-[#01AB31]"
                : item.redeemStatus === "Cancelled"
                ? "text-[#FF3333]"
                : ""
            }
            `}
        >
          {item?.status}
        </p>

        {/* <button className="h-10 rounded-full font-medium text-base bg-black text-white px-6">
          {item.status === "Ongoing"
            ? "Track Order"
            : item.status === "Delivered"
            ? "Reorder"
            : item.status === "Cancelled"
            ? "Reorder"
            : "ww"}
        </button> */}
      </div>
    </div>
  );
};

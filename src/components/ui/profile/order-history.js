import { useFetchOrders } from "@/pages/profile/_component/useUser";
import Image from "next/image";

export const OrderHistoryUi = ({ orders }) => {
  // console.log(order, "the order");
  // const orders = [
  //   { name: "Gradient Graphic T-shirt", img: "men1.png", status: "Ongoing", redeemStatus: null },
  //   { name: "CHECKERED SHIRT", status: "Cancelled", img: "women1.png", redeemStatus: "Available" },
  //   { name: "SKINNY FIT JEANS", status: "Delivered", img: "men2.png", redeemStatus: "Ended" },
  // ];
  return (
    <section className="border p-4 rounded-md mt-5">
      {orders.map((item, itemIndex) => (
        <OrderHistoryCard item={item} key={itemIndex} />
      ))}
    </section>
  );
};

export const OrderHistoryCard = ({ item }) => {
  return (
    <div className="flex my-4 items-center border-b pb-2 justify-between">
      <div className="flex items-center gap-3">
        <Image height={50} width={100} className="" src={`/assets/category/${item.img}`} alt="" />
        <div>
          <h3 className="text-base font-bold">{item.name}</h3>
          <p className="text-xs font-normal">
            <span className="font-medium">Size:</span> Large
          </p>
          <p className="text-xs font-normal">
            <span className=" font-medium">Color:</span> White
          </p>
          <p className="text-xs font-normal">
            <span className=" font-medium">Order ID:</span> 1234567890
          </p>
          <p className="text-xs font-normal">
            <span className=" font-medium">No of Items:</span> 1 Item
          </p>
          <p className="text-xs font-normal">
            <span className=" font-medium">Date:</span> 30th June, 2024
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-10">
        <p
          className={`
            font-medium text-base ${
              item.status === "Ongoing"
                ? "text-[#FFC633]"
                : item.status === "Delivered"
                ? "text-[#01AB31]"
                : item.redeemStatus === "Cancelled"
                ? "text-[#FF3333]"
                : ""
            }
            `}
        >
          {item?.status}
        </p>

        <button className="h-10 rounded-full font-medium text-base bg-black text-white px-6">
          {item.status === "Ongoing"
            ? "Track Order"
            : item.status === "Delivered"
            ? "Reorder"
            : item.status === "Cancelled"
            ? "Reorder"
            : ""}
        </button>
      </div>
    </div>
  );
};

import Image from "next/image";

export const EmptyComponent = ({ title, description }) => {
  return (
    <div className="flex mt-5 items-center justify-center flex-col">
      <Image src="/assets/no-empty-img.png" alt="cart-empty" width={200} height={200} />
      <h3 className="text-xl font-bold text-black">{title}</h3>
      <p className=" font-normal text-sm text-gray-500">{description}</p>
    </div>
  );
};

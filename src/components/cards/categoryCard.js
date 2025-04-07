import { WithCommas } from "@/utils";
import Image from "next/image";
import Link from "next/link";

export const CategoryCard = ({ data, link, isDisabled }) => {
  const image = data?.images1 ? data?.images1?.[0] : "/assets/placeholder-img.png";

  return (
    <div className="relative w-full  group hover:shadow-[0px_0px_14px_4px_#00000014] p-2  rounded-md">
      <div className="flex w-full  h-[200px] overflow-hidden  bg-[white]  items-center justify-center">
        <Image
          src={image}
          width={200}
          height={200}
          alt="category-img"
          className="object-cover w-full"
        />
      </div>
      <section className="mt-2">
        <h3 className="text-base font-medium text-black">{data?.brand_name || "Special Brand"}</h3>

        <div className="flex items-center justify-start gap-2">
          <p className="font-bold text-lg">₦{WithCommas(data?.purchase_price) || 0}</p>
          {data?.amount && (
            <>
              <p className="font-bold text-lg line-through text-[#00000066]">
                ₦{WithCommas(data.amount) || 0}
              </p>

              <div className="bg-[#FF33331A] hidden md:block text-xs font-medium py- px-1 rounded-full">
                -{data?.discount || 0.0}%
              </div>
            </>
          )}
        </div>
        <div className="bg-[#FF33331A] block md:hidden text-xs w-fit  font-medium py- px-1 rounded-full">
          -{data?.discount || 0.0}%
        </div>
      </section>
      <button className=" w-4/5 py-2 left-5 md:hidden group-hover:block  absolute top-[150px] bg-black text-white rounded-full font-medium text-sm">
        {isDisabled ? "Add to Cart" : <Link href={`${link}/${data?.ref_no}`}>Add to Cart</Link>}
      </button>
    </div>
  );
};

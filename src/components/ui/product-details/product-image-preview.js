import Image from "next/image";
import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
export const ProductImagePreview = ({ product }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="flex md:flex-row flex-col-reverse items-start gap-4">
      <div className="space-y-2 flex w-full md:w-auto items-center justify-start gap-2 md:block ">
        {product?.images1?.map((arr, index) => (
          <div
            role="button"
            onClick={() => setCurrent(index)}
            key={index}
            className="w-[70px] h-[70px]   flex items-center gap- justify-center overflow-hidden rounded-md border border-black bg-[whitesmoke] "
          >
            <Image
              src={arr}
              className="object-cover w-full h-full"
              alt="product-images"
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
      <div className="w-full bg-[whitesmoke] h-[50vh] overflow-hidden rounded-md">
        <img src={product?.images1?.[current]} className="h-full object-cover w-full" alt="" />
      </div>
    </div>
  );
};

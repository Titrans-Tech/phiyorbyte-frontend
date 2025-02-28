import Image from "next/image";
import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
export const ProductImagePreview = ({ product }) => {
  console.log(product, "THE PRODUCT");
  const [current, setCurrent] = useState(0);

  return (
    <div className="flex items-center gap-4">
      <div className="space-y-3">
        {product?.images1?.map((arr, index) => (
          <div
            role="button"
            onClick={() => setCurrent(index)}
            key={index}
            className="w-[70px]  h-[70px] flex items-center justify-center overflow-hidden rounded-md border border-black bg-[whitesmoke] "
          >
            <Image src={arr} alt="product-images" width={100} height={100} />
          </div>
        ))}
      </div>
      <div className="w-full bg-[whitesmoke] h-[50vh] overflow-hidden rounded-md">
        <img src={product?.images1?.[current]} className="h-full object-cover w-full" alt="" />
      </div>
    </div>
  );
};

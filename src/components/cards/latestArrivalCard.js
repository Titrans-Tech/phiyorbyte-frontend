import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export const LatestArrivalCard = ({ data }) => {
  return (
    <section className="w-fit">
      <Image
        src={`/assets/category${data.img}`}
        width={200}
        height={200}
        alt=""
        className="w- md:w-200"
      />
      <div className="flex items-center px-2 py-1 justify-between">
        <div>
          <h3 className="text-[#191919] capitalize font-medium text-sm ">{data.name} </h3>
          <p className="font-medium text-xs text-[#797979]">Explore Now!</p>
        </div>
        <Link href="/product">
          <FaArrowRightLong fontSize={14} color="#797979" />
        </Link>
      </div>
    </section>
  );
};

// /women1.png

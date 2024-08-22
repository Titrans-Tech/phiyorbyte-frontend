import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export const LatestArrivalCard = ({ data }) => {
  return (
    <section>
      <Image src={`/assets/category${data.img}`} width={200} height={200} alt="" img />
      <div className="flex items-center px-2 py-1 justify-between">
        <div>
          <h3 className="text-[#191919] capitalize font-medium text-sm ">{data.name} </h3>
          <p className="font-medium text-xs text-[#797979]">Explore Now!</p>
        </div>
        <FaArrowRightLong fontSize={14} color="#797979" />
      </div>
    </section>
  );
};

// /women1.png

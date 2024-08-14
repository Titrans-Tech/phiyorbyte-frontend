import Image from "next/image";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

export const CategoryCard = ({ data }) => {
  return (
    <div>
      <Image src={`/assets/category${data.img}`} width={200} height={200} alt="category-img" />
      <section className="mt-2">
        <h3 className="text-base font-medium text-black">{data.name}</h3>
        <div className="flex items-center gap-1">
          <Rating
            initialRating={data.rating}
            emptySymbol={<FaRegStar color="#FFC633" />}
            fullSymbol={<FaStar color="#FFC633" />}
            start={0}
            stop={5}
            step={1}
          />
          <p className="font-normal text-sm -mt-1">{data.rating}/5</p>
        </div>
        <div className="flex items-center justify-start gap-2">
          <p className="font-bold text-lg">${data.price}</p>
          {data.initialPrice && (
            <>
              <p className="font-bold text-lg line-through text-[#00000066]">
                ${data.initialPrice}
              </p>
              <div className="bg-[#FF33331A] text-xs font-medium py- px-1 rounded-full">
                -{data.per}%
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

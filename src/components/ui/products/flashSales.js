import { ComponentTitle } from "@/components/typography/ComponentTitle";

import { ComponentLoading } from "@/components/button/componentLoading";
import { CategoryCard } from "@/components/cards/categoryCard";
import { useFetchMenProducts } from "@/hooks/useCategoryApi";
import { useEffect, useState } from "react";

export const FlashSales = () => {
  const { product, loading } = useFetchMenProducts();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Get the end time from localStorage or set a new one
    const getEndTime = () => {
      const storedEndTime = localStorage.getItem("flashSaleEndTime");
      if (storedEndTime) {
        return new Date(storedEndTime);
      }
      // Set end time to 5 days from now
      const endTime = new Date();
      endTime.setDate(endTime.getDate() + 5);
      localStorage.setItem("flashSaleEndTime", endTime.toISOString());
      return endTime;
    };

    const endTime = getEndTime();

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = endTime - now;

      if (difference <= 0) {
        // Reset the timer for another 5 days
        const newEndTime = new Date();
        newEndTime.setDate(newEndTime.getDate() + 5);
        localStorage.setItem("flashSaleEndTime", newEndTime.toISOString());
        return {
          days: 5,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    // Update time left immediately
    setTimeLeft(calculateTimeLeft());

    // Update time left every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between">
        <ComponentTitle title="Flash Sales" />
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#00000099]">Ending in:</span>
          <div className="flex items-center gap-1">
            <span className="bg-black text-white px-2 py-1 rounded">
              {timeLeft.days.toString().padStart(2, "0")}
            </span>
            <span className="text-black">:</span>
            <span className="bg-black text-white px-2 py-1 rounded">
              {timeLeft.hours.toString().padStart(2, "0")}
            </span>
            <span className="text-black">:</span>
            <span className="bg-black text-white px-2 py-1 rounded">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </span>
            <span className="text-black">:</span>
            <span className="bg-black text-white px-2 py-1 rounded">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      {loading ? (
        <ComponentLoading />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {product?.map((product) => (
            <CategoryCard link="/product" key={product.id} data={product} />
          ))}
        </div>
      )}
    </div>
  );
};

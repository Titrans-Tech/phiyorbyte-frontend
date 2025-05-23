/* eslint-disable @next/next/no-img-element */
import { CustomWrapper } from "@/components/layout/customWrapper";
import { Lato } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const lato = Lato({ subsets: ["latin"], weight: ["100", "300", "400", "700", "900"] });
export const Hero = () => {
  const [current, setCurrent] = useState(0);
  const imgCarousel = [
    {
      title: "Classic Comfort",
      description: (
        <>
          Bold Styles, <br /> Every Season.
        </>
      ),
      bg: "#B36B9D",
      fontColor: "#fff",
      imgSize: "600",
      color: "#002400",
      label: "Cool, colorful, and comfy tops",
      img: "https://ik.imagekit.io/hydekcjmz/phiyorbyte/best-friends-couple-stylish-girls-posing-white%201.png?updatedAt=1723259249428",
    },

    {
      title: "Bold Basics",
      description: (
        <>
          Elevate Your <br /> Everyday Look.
        </>
      ),
      bg: "#7B904B",
      fontColor: "#002400",
      color: "#000",
      imgSize: "650",
      label: "Effortless style in every piece.",
      img: "https://ik.imagekit.io/hydekcjmz/phiyorbyte/image%2015%20(1).png?updatedAt=1723259325115",
    },
    {
      title: "Trendy Essentials",
      description: (
        <>
          Transform Your <br /> Daily Wardrobe
        </>
      ),
      bg: "#002400",
      color: "#fff",
      fontColor: "#7A7A7A",
      imgSize: "600",
      label: "Discover chic essentials that effortlessly enhance your style",
      img: "https://ik.imagekit.io/hydekcjmz/phiyorbyte/image%2016.png?updatedAt=1723259324464",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex === imgCarousel.length - 1 ? 0 : prevIndex + 1));
    }, [5000]);

    return () => clearInterval(interval);
  }, [imgCarousel.length]);

  const prevImg = () => {
    setCurrent((prevIndex) => (prevIndex === imgCarousel.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <section style={{ background: imgCarousel[current]?.bg }} className="w-full overflow-hidden ">
      <CustomWrapper>
        <section>
          <MdOutlineKeyboardArrowLeft
            onClick={prevImg}
            className="hidden cursor-pointer md:block absolute -left-2 top-[50%]"
            color={imgCarousel[current]?.fontColor}
            fontSize={100}
          />
          <MdOutlineKeyboardArrowRight
            color={imgCarousel[current]?.fontColor}
            fontSize={100}
            onClick={prevImg}
            className="hidden cursor-pointer md:block  absolute right-10 top-[50%]"
          />
        </section>
        <section className="px-5 md:px-12 md:flex items-center justify-center py-3">
          <div className="z-30">
            <h4
              style={{ color: imgCarousel[current].color }}
              className=" my-3 font-semibold text-sm md:text-xl font-[Montserrat]"
            >
              {imgCarousel[current]?.title}
            </h4>
            <h1
              className={`font-black w-full  md:leading-[60px] text-white text-3xl md:text-[60px] ${lato.className}`}
            >
              {imgCarousel[current]?.description}
            </h1>
            <p
              style={{ color: imgCarousel[current].color }}
              className="my-3 max-w-sm font-normal text-xl italic"
            >
              {imgCarousel[current]?.label}
            </p>
            <Link href="/product" className="py-2 px-12 bg-white rounded text-[#002400] font-bold ">
              Shop Now
            </Link>
          </div>
          <div className="relative md:-left-20 top-6 ">
            <img
              src={imgCarousel[current]?.img}
              className="w[600px]"
              style={{ width: `${imgCarousel[current].imgSize}px` }}
              alt=""
            />
          </div>
        </section>
      </CustomWrapper>
    </section>
  );
};

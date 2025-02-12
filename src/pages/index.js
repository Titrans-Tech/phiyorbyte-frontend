/* eslint-disable @next/next/no-img-element */
import { Inter } from "next/font/google";
import { CustomLayout } from "@/components/layout";
import { CustomWrapper } from "@/components/layout/customWrapper";
import { Hero } from "@/components/ui/auth/hero";
import Slider from "react-slick";
import { CategoryCard } from "@/components/cards/categoryCard";
import { faqs, flashCategory, menCategory, newArrivalCategory, womenCategory } from "@/utils/data";
import { LatestArrivalCard } from "@/components/cards/latestArrivalCard";
import { TestimonyCard } from "@/components/cards/testimonyCard";
import { useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FaqAccordion } from "@/components/cards/accordion";
import { Footer } from "@/components/ui/footer";
import { useFetchMenProducts, useFetchWomenProducts } from "@/hooks/useCategoryApi";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  let sliderRef = useRef(null);
  const { product, error, loading } = useFetchMenProducts();
  const { product: womenProduct } = useFetchWomenProducts();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const img = [
    "/versaceSponsor.png",
    "/zaraSponsor.png",
    "/pradaSponsor.png",
    "/calvinSponsor.png",
  ];

  const services = [
    {
      img: "/assets/icon-service.png",
      offerTitle: "High Quality",
      description: "crafted from top materials",
    },
    {
      img: "/assets/icon-service2.png",
      offerTitle: "Warrany Protection",
      description: "Over 2 years",
    },
    {
      img: "/assets/icon-service3.png",
      offerTitle: "Free Shipping",
      description: "Order over 150 $",
    },
    {
      img: "/assets/icon-service4.png",
      offerTitle: "24 / 7 Support",
      description: "Dedicated support",
    },
  ];

  return (
    <main>
      <CustomLayout>
        <main>
          <Hero />
          <div className="py-5 px-3 bg-black">
            <CustomWrapper>
              <div className="flex items-center justify-between">
                {img.map((img, imgIndex) => (
                  <img
                    src={`/assets${img}`}
                    className="w-[50px] md:w-[100px]"
                    key={imgIndex}
                    alt=""
                  />
                ))}
              </div>
            </CustomWrapper>
          </div>
          <section className="bg-white ">
            <CustomWrapper>
              <div className="flex px-5 py-6 items-center justify-center flex-col">
                <h3 className="font-semibold text-[#002400] text-4xl font-mono">Featured ‘24</h3>
                <div>
                  - Casual - Formal - Underwear - Sportswear - Dresses - Gowns - Skirts - Swimwear
                  and Lingerie
                </div>
              </div>

              <div className="hidden md:flex my-5 justify-center items-center">
                <img
                  src="https://ik.imagekit.io/hydekcjmz/phiyorbyte/Rectangle%2091.png?updatedAt=1723262450553"
                  alt=""
                  width={200}
                  className="relative left-20 z-0"
                />
                <img
                  src="https://ik.imagekit.io/hydekcjmz/phiyorbyte/Rectangle%2090.png?updatedAt=1723262450365"
                  alt=""
                  width={250}
                  className="relative left-10 z-10"
                />
                <img
                  src="https://ik.imagekit.io/hydekcjmz/phiyorbyte/Rectangle%2087.png?updatedAt=1723262452314"
                  alt=""
                  className="relative left- z-20"
                  width={300}
                />
                <img
                  src="https://ik.imagekit.io/hydekcjmz/phiyorbyte/Rectangle%2088.png?updatedAt=1723262452521"
                  alt=""
                  className="relative -left-10 z-10"
                  width={250}
                />
                <img
                  src="https://ik.imagekit.io/hydekcjmz/phiyorbyte/Rectangle%2089.png?updatedAt=1723262511724"
                  alt=""
                  className="relative -left-20 z-0"
                  width={200}
                />
              </div>
            </CustomWrapper>
          </section>
          <section
            style={{ boxShadow: " 0px 20px 52.29px 0px #4444440A" }}
            className="w-full mt-10 py-4 px-4 bg-[#BACF8C]"
          >
            <CustomWrapper>
              <div className="flex gap-4 flex-wrap items-center justify-center space-y-3 md:justify-between">
                {services.map((service, serviceIndex) => (
                  <div className="flex flex-col md:flex-row  items-center gap-2" key={serviceIndex}>
                    <img className="w-10" src={service.img} alt="" />
                    <div className="text-center">
                      <h3 className="text-[#002400] font-medium text-lg">{service.offerTitle}</h3>
                      <p className="text-base font-normal">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CustomWrapper>
          </section>
          <section className="w-full bg-white py-12 ">
            <CustomWrapper>
              <h3 className="text-4xl text-center font-normal font-mono">Categories For Men</h3>
              <section className="flex flex-wrap  gap-12 mt-10 justify-center grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] items-center  ">
                {product?.map((cat, catIndex) => (
                  <CategoryCard data={cat} key={catIndex} />
                ))}
              </section>
              <div className="flex items-center mt-9 justify-center">
                <button className="max-w-xl font-medium text-base py-2 px-8 border rounded-full">
                  View All
                </button>
              </div>
            </CustomWrapper>
          </section>
          <section className="py-4">
            <section className="w-full px-5 py-5 bg-[#F40000]">
              <CustomWrapper>
                <section className="flex  items-center justify-center gap-12">
                  <div className="hidden md:flex items-center gap-2">
                    <div className="bg-white w-5 h-5 rounded-full"></div>
                    <div className="bg-white w-10 h-10 rounded-full"></div>
                    <div className="bg-white w-14 h-14 rounded-full"></div>
                  </div>
                  <h3 className="text-3xl md:text-5xl flex-col md:flex-row flex items-center  md:gap-4  font-bold text-white">
                    Flash Sales{" "}
                    <span className="text-white  font-bold text-xl">
                      Time Left: 10h : 50m : 20s
                    </span>
                  </h3>
                  <div className="hidden md:flex items-center gap-2">
                    <div className="bg-white w-14 h-14 rounded-full"></div>
                    <div className="bg-white w-10 h-10 rounded-full"></div>
                    <div className="bg-white w-5 h-5 rounded-full"></div>
                  </div>
                </section>
              </CustomWrapper>
            </section>
            <CustomWrapper>
              <>
                <section className="flex flex-wrap gap-12 mt-10 justify-center grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] items-center  ">
                  {flashCategory.map((cat, catIndex) => (
                    <CategoryCard isDisabled={true} data={cat} key={catIndex} />
                  ))}
                </section>
                <div className="flex items-center mt-9 justify-center">
                  <button className="max-w-xl font-medium text-base py-2 px-8 border rounded-full">
                    View All
                  </button>
                </div>
              </>
            </CustomWrapper>
          </section>
          <div className="w-full py-12 bg-[#F0E0ED]">
            <CustomWrapper>
              <h3 className="font-bold text-4xl text-center">BROWSE BY DRESS STYLE</h3>
              <section className="mt-8 space-y-2 ">
                <div className="flex  gap-5 items-center justify-center">
                  <div className="max-w-xs relative h-[10vh] md:h-[25vh] overflow-hidden w-full py-2 px-6 rounded bg-white">
                    <h3 className="font-bold absolute text-2xl">Casual</h3>
                    <img
                      src="/assets/category/style1.png"
                      className="absolut ml-11 -mt-5 top-2 z-0"
                      alt=""
                    />
                  </div>
                  <div className="max-w-xl h-[10vh] md:h-[25vh]  relative overflow-hidden w-full py-2 px-6 rounded bg-white">
                    <h3 className="font-bold absolute text-2xl">Fomal</h3>
                    <img
                      src="/assets/category/style2.png"
                      className="absolut ml-11 -mt-5 top-2 z-0"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex gap-5 items-center justify-center">
                  <div className="max-w-xl relative overflow-hidden max-w h-[10vh] md:h-[25vh]  w-full py-2 px-6 rounded bg-white">
                    <h3 className="font-bold text-2xl">Party</h3>
                    <img
                      src="/assets/category/style3.png"
                      className="absolut ml-20 -mt-12 top-2 z-0"
                      alt=""
                    />
                  </div>
                  <div className="max-w-xs relative overflow-hidden h-[10vh] md:h-[25vh]  w-full py-2 px-6 rounded bg-white">
                    <h3 className="font-bold text-2xl">Gym</h3>
                    <img
                      src="/assets/category/style4.png"
                      className="absolut ml-14 -mt-8 top-2 z-0"
                      alt=""
                    />
                  </div>
                </div>
              </section>
            </CustomWrapper>
          </div>
          <section className="w-full bg-white py-12 ">
            <CustomWrapper>
              <h3 className="text-4xl text-center font-normal font-mono">Categories For Women</h3>
              <section className="flex flex-wrap gap-12 mt-10 justify-center grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] items-center  ">
                {womenProduct?.map((cat, catIndex) => (
                  <CategoryCard data={cat} key={catIndex} />
                ))}
              </section>
              <div className="flex items-center mt-9 justify-center">
                <button className="max-w-xl font-medium text-base py-2 px-8 border rounded-full">
                  View All
                </button>
              </div>
            </CustomWrapper>
          </section>
          <section className="w-full relative bg-[#F0F0F0] px-5 md:px-10 py-12">
            <CustomWrapper>
              <h3 className="tracking-widest text-center text-4xl">latest arrivals</h3>
              <div className="flex flex-wrap gap-12 mt-10 justify-center items-center  ">
                {newArrivalCategory.map((data, dataIndex) => (
                  <LatestArrivalCard data={data} key={dataIndex} />
                ))}
              </div>
            </CustomWrapper>
          </section>
          <section className="w-full relative bg-white py-7">
            <CustomWrapper>
              <div
                style={{
                  backgroundImage: `url( "https://ik.imagekit.io/hydekcjmz/phiyorbyte/group-friends-posing-together-outdoors%201.png?updatedAt=1724231547054")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                className="bg-black relative w-full overflow-hidden py-12 flex items-center px-12 rounded min-h-[400px]"
              >
                <div
                  style={{ background: "rgba(116, 121, 90, 0.6)" }}
                  className="min-h-[400px] left-0 absolute z-20 bg-[transparent] w-full"
                ></div>

                <section className="max-w-xl relative z-50">
                  <h3 className="text-3xl font-bold text-white">
                    WE MADE YOUR EVERYDAY FASHION BETTER!
                  </h3>
                  <p className="font-normal text-lg text-white">
                    Discover effortlessly stylish pieces designed to elevate your daily wardrobe.
                    Experience comfort and versatility in every outfit!
                  </p>
                  <button className="py-2 px-6 bg-white rounded-lg text-sm font-semibold mt-5">
                    Shop Now
                  </button>
                </section>
              </div>
            </CustomWrapper>
          </section>
          <section className="w-full bg-white px-5 py-5">
            <CustomWrapper>
              <div className="flex items-center justify-center flex-col">
                <h3 className="text-3xl font-medium text-center md:text-left tracking-widest ">
                  Stay Connected & Inspired
                </h3>
                <p className="text-base font-normal max-w-lg text-center">
                  Discover the latest trends and exclusive offers. Follow us for daily style tips
                  and behind-the-scenes looks!
                </p>
              </div>
              <div className="mt-8">
                <img
                  src="https://ik.imagekit.io/hydekcjmz/phiyorbyte/image.png?updatedAt=1724234150824"
                  alt=""
                />
              </div>
            </CustomWrapper>
          </section>
          <section className="w-full bg-white px-5 md:px-10 py-8">
            <CustomWrapper>
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-4xl">OUR HAPPY CUSTOMERS</h3>

                <div className="flex items-end justify-end gap-5">
                  <FaArrowLeftLong fontSize={18} color="#000" />
                  <FaArrowRightLong fontSize={18} color="#000" />
                </div>
              </div>
              <div className="mt-6">
                <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
                  {Array.from({ length: 5 }).map((dataIndex) => (
                    <TestimonyCard key={dataIndex} />
                  ))}
                </Slider>
              </div>
            </CustomWrapper>
          </section>
          <section className="bg-[#F0F0F0] px-5 md:px-10 py-12 mb-20">
            <CustomWrapper>
              <section>
                <h3 className="text-3xl font-medium tracking-widest text-center">
                  Frequently Asked Questions
                </h3>
                <section className="md:grid gap-8 mt-8 grid-cols-[repeat(auto-fill,_minmax(500px,_1fr))]">
                  {faqs.map((faq, faqIndex) => (
                    <FaqAccordion faq={faq} key={faqIndex} />
                  ))}
                </section>
              </section>
            </CustomWrapper>
          </section>
          <Footer />
        </main>
      </CustomLayout>
    </main>
  );
}

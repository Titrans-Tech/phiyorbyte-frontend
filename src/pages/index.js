/* eslint-disable @next/next/no-img-element */
import { Inter } from "next/font/google";
import { CustomLayout } from "@/components/layout";
import { CustomWrapper } from "@/components/layout/customWrapper";
import { Hero } from "@/components/ui/auth/hero";
import Image from "next/image";
import { CategoryCard } from "@/components/cards/categoryCard";
import { flashCategory, menCategory, womenCategory } from "@/utils/data";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
                  <img src={`/assets${img}`} className="w-[100px]" key={imgIndex} alt="" />
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

              <div className="flex my-5 justify-center items-center">
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
              <div className="flex items-center justify-between">
                {services.map((service, serviceIndex) => (
                  <div className="flex items-center gap-2" key={serviceIndex}>
                    <img className="w-10" src={service.img} alt="" />
                    <div>
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
              <section className="flex gap-12 mt-10 justify-center grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] items-center  ">
                {menCategory.map((cat, catIndex) => (
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
            <section className="w-full py-5 bg-[#F40000]">
              <CustomWrapper>
                <section className="flex items-center justify-center gap-12">
                  <div className="flex items-center gap-2">
                    <div className="bg-white w-5 h-5 rounded-full"></div>
                    <div className="bg-white w-10 h-10 rounded-full"></div>
                    <div className="bg-white w-14 h-14 rounded-full"></div>
                  </div>
                  <h3 className="text-5xl flex items-center  gap-4  font-bold text-white">
                    Flash Sales{" "}
                    <span className="text-white  font-bold text-xl">
                      Time Left: 10h : 50m : 20s
                    </span>
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="bg-white w-14 h-14 rounded-full"></div>
                    <div className="bg-white w-10 h-10 rounded-full"></div>
                    <div className="bg-white w-5 h-5 rounded-full"></div>
                  </div>
                </section>
              </CustomWrapper>
            </section>
            <CustomWrapper>
              <>
                <section className="flex gap-12 mt-10 justify-center grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] items-center  ">
                  {flashCategory.map((cat, catIndex) => (
                    <CategoryCard data={cat} key={catIndex} />
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
                  <div className="max-w-xs h-[25vh] w-full py-2 px-6 rounded bg-white">
                    <h3 className="font-bold text-2xl">Casual</h3>
                  </div>
                  <div className="max-w-xl h-[25vh] w-full py-2 px-6 rounded bg-white">
                    <h3 className="font-bold text-2xl">Fomal</h3>
                  </div>
                </div>
                <div className="flex gap-5 items-center justify-center">
                  <div className="max-w-xl max-w h-[25vh] w-full py-2 px-6 rounded bg-white">
                    <h3 className="font-bold text-2xl">Party</h3>
                  </div>
                  <div className="max-w-xs h-[25vh] w-full py-2 px-6 rounded bg-white">
                    <h3 className="font-bold text-2xl">Gym</h3>
                  </div>
                </div>
              </section>
            </CustomWrapper>
          </div>
          <section className="w-full bg-white py-12 ">
            <CustomWrapper>
              <h3 className="text-4xl text-center font-normal font-mono">Categories For Women</h3>
              <section className="flex gap-12 mt-10 justify-center grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] items-center  ">
                {womenCategory.map((cat, catIndex) => (
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
        </main>
      </CustomLayout>
    </main>
  );
}

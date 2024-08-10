/* eslint-disable @next/next/no-img-element */
import { Inter } from "next/font/google";
import { CustomLayout } from "@/components/layout";
import { CustomWrapper } from "@/components/layout/customWrapper";
import { Hero } from "@/components/ui/auth/hero";
import Image from "next/image";

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
        </main>
      </CustomLayout>
    </main>
  );
}

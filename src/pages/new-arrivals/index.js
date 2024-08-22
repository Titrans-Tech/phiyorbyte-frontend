import { Inter } from "next/font/google";
import { CustomLayout } from "@/components/layout";
import { CustomWrapper } from "@/components/layout/customWrapper";
import { Breadcrumb } from "@/components/breadcrumb";
import { ComponentTitle } from "@/components/typography/ComponentTitle";
import { Footer } from "@/components/ui/footer";
import { CategoryCard } from "@/components/cards/categoryCard";
import { menCategory, newArivalData } from "@/utils/data";

const inter = Inter({ subsets: ["latin"] });

export default function NewArrivals() {
  return (
    <main>
      <CustomLayout>
        <main>
          <CustomWrapper>
            <Breadcrumb url="New Arrival" />
            <section className="my-3 flex items-center justify-between">
              <ComponentTitle title="New Arrivals" />
              <div className="">
                <p className="text-base text-[#00000099]">
                  {" "}
                  Showing 1-10 of 100 Products Sort by:{" "}
                  <button className=" text-black font-medium">Newest In</button>
                </p>
              </div>
            </section>
            <section className="flex flex-wrap gap-12 mt-10 mb-20 justify-center grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] items-center  ">
              {newArivalData.map((cat, catIndex) => (
                <CategoryCard data={cat} key={catIndex} />
              ))}
            </section>
          </CustomWrapper>
          <Footer />
        </main>
      </CustomLayout>
    </main>
  );
}

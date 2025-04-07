import { Inter } from "next/font/google";
import { CustomLayout } from "@/components/layout";
import { CustomWrapper } from "@/components/layout/customWrapper";
import { Breadcrumb } from "@/components/breadcrumb";
import { ComponentTitle } from "@/components/typography/ComponentTitle";
import { CategoryCard } from "@/components/cards/categoryCard";
import { Footer } from "@/components/ui/footer";

import { useFetchMenProducts } from "@/hooks/useCategoryApi";
import { ComponentLoading } from "@/components/button/componentLoading";

const inter = Inter({ subsets: ["latin"] });

export default function MenComponent() {
  const { product, loading } = useFetchMenProducts();

  return (
    <main>
      <CustomLayout>
        <main className="mt-4">
          <CustomWrapper>
            <Breadcrumb url="Men" />
            <section className="my-3 px-5 flex items-center flex-wrap justify-between">
              <ComponentTitle title="Men" />
              <div className="">
                <p className="text-base text-[#00000099]">
                  {" "}
                  Showing 1-10 of 100 Products Sort by:{" "}
                  <button className=" text-black font-medium">Newest In</button>
                </p>
              </div>
            </section>
            {loading ? (
              <ComponentLoading />
            ) : (
              <section className="grid  gap-12 px-4 my-10 md:justify-center grid-cols-2 md:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] items-center  ">
                {product?.map((cat, catIndex) => (
                  <CategoryCard link="/product" data={cat} key={catIndex} />
                ))}
              </section>
            )}
          </CustomWrapper>
          <Footer />
        </main>
      </CustomLayout>
    </main>
  );
}

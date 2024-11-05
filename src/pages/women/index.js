import { Inter } from "next/font/google";
import { CustomLayout } from "@/components/layout";
import { CustomWrapper } from "@/components/layout/customWrapper";
import { Breadcrumb } from "@/components/breadcrumb";
import { ComponentTitle } from "@/components/typography/ComponentTitle";
import { CategoryCard } from "@/components/cards/categoryCard";
import { Footer } from "@/components/ui/footer";
import { newArivalData } from "@/utils/data";
import { useFetchWomenProducts } from "@/hooks/useCategoryApi";
import { ComponentLoading } from "@/components/button/componentLoading";

const inter = Inter({ subsets: ["latin"] });

export default function WomenComponent() {
  const { product, error, loading } = useFetchWomenProducts();

  console.log(product, "the product");
  return (
    <main>
      <CustomLayout>
        <main className="mt-4">
          <CustomWrapper>
            <Breadcrumb url="Women" />
            <section className="my-3 flex items-center justify-between">
              <ComponentTitle title="Women" />
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
              <section className="flex flex-wrap gap-12 mt-10 mb-20 justify-center grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] items-center  ">
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

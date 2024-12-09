import { Breadcrumb } from "@/components/breadcrumb";
import { ComponentLoading } from "@/components/button/componentLoading";
import { CategoryCard } from "@/components/cards/categoryCard";
import { EmptyComponent } from "@/components/emptyComponent";
import { FilterComponent } from "@/components/filter";
import { CustomLayout } from "@/components/layout";
import { CustomWrapper } from "@/components/layout/customWrapper";
import { Pagination } from "@/components/pagination";
import { ComponentTitle } from "@/components/typography/ComponentTitle";
import { Footer } from "@/components/ui/footer";
import { useFetchPoductByCategory } from "@/components/ui/profile/_component/useUser";
import { newArivalData } from "@/utils/data";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MenCategories = () => {
  const { product, getProduct, loading } = useFetchPoductByCategory();

  const router = useRouter();
  const data = { recordId: [1, 2, 3], totalPages: 3 };
  const [page, setPage] = useState(0);

  const query = router.query;

  const handleNextPage = (pages) => {
    setPage(pages);
  };

  useEffect(() => {
    if (router.isReady) {
      getProduct(query.id);
    }
  }, [router.isReady, query.id]);

  console.log(product, "the uery");

  return (
    <section>
      <CustomLayout>
        <CustomWrapper>
          <div className="mt-4">
            <Breadcrumb url={router.query.id} />
          </div>
          <section className="flex md:grid grid-cols-[23fr_60fr] mb-14">
            <section className="my-6 hidden lg:block w-full ">
              <FilterComponent />
            </section>
            <section className="w-full ">
              <section className="my-3 flex  px-5 items-center justify-between">
                <ComponentTitle title={router.query.id} />
                {product?.length > 0 && (
                  <div className="">
                    <p className="text-base text-[#00000099]">
                      {" "}
                      Showing 1-10 of 100 Products Sort by:{" "}
                      <button className=" text-black font-medium">Newest In</button>
                    </p>
                  </div>
                )}
              </section>
              <section>
                {loading ? (
                  <ComponentLoading />
                ) : product?.length > 0 ? (
                  <section className="flex border-b pb-3 flex-wrap gap-12 mt-10 mb-20 justify-center grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] items-center  ">
                    {product.map((cat, catIndex) => (
                      <CategoryCard link={`/men/${query.id}`} data={cat} key={catIndex} />
                    ))}
                  </section>
                ) : (
                  <div className="mt-12">
                    <EmptyComponent title="No Item in this category" />
                  </div>
                )}
              </section>

              {product?.length > 0 && (
                <div className="my-12  ">
                  <Pagination
                    totalPages={data?.totalPages}
                    forcePage={page}
                    paginate={handleNextPage}
                  />
                </div>
              )}
            </section>
          </section>
        </CustomWrapper>
        <Footer />
      </CustomLayout>
    </section>
  );
};

export default MenCategories;

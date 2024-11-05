import { Breadcrumb } from "@/components/breadcrumb";
import { CategoryCard } from "@/components/cards/categoryCard";
import { FilterComponent } from "@/components/filter";
import { CustomLayout } from "@/components/layout";
import { CustomWrapper } from "@/components/layout/customWrapper";
import { Pagination } from "@/components/pagination";
import { ComponentTitle } from "@/components/typography/ComponentTitle";
import { Footer } from "@/components/ui/footer";
import { newArivalData } from "@/utils/data";
import { useRouter } from "next/router";
import { useState } from "react";

const WomenCategories = () => {
  const router = useRouter();
  const data = { recordId: [1, 2, 3], totalPages: 3 };
  const query = router.query;
  const [page, setPage] = useState(0);

  const handleNextPage = (pages) => {
    setPage(pages);
  };

  return (
    <section>
      <CustomLayout>
        <CustomWrapper>
          <div className="mt-4">
            <Breadcrumb url={router.query.id} />
          </div>
          <section className="flex mb-14">
            <section className="my-6 w-full">
              <FilterComponent />
            </section>
            <section>
              <section className="my-3 flex items-center justify-between">
                <ComponentTitle title={router.query.id} />
                <div className="">
                  <p className="text-base text-[#00000099]">
                    {" "}
                    Showing 1-10 of 100 Products Sort by:{" "}
                    <button className=" text-black font-medium">Newest In</button>
                  </p>
                </div>
              </section>
              <section className="flex pb-3 border-b flex-wrap gap-12 mt-10 mb-20 justify-center grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] items-center  ">
                {newArivalData.map((cat, catIndex) => (
                  <CategoryCard link={`/women/${query.id}`} data={cat} key={catIndex} />
                ))}
              </section>
              <div className="my-12">
                <Pagination
                  totalPages={data?.totalPages}
                  forcePage={page}
                  paginate={handleNextPage}
                />
              </div>
            </section>
          </section>
        </CustomWrapper>
        <Footer />
      </CustomLayout>
    </section>
  );
};

export default WomenCategories;
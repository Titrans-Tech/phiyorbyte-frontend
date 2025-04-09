import { Breadcrumb } from "@/components/breadcrumb";
import { ComponentLoading } from "@/components/button/componentLoading";
import { EmptyComponent } from "@/components/emptyComponent";
import { CustomLayout } from "@/components/layout";
import { CustomWrapper } from "@/components/layout/customWrapper";
import { ComponentTitle } from "@/components/typography/ComponentTitle";
import { Footer } from "@/components/ui/footer";
import { useGetFavourite } from "@/hooks/useCategoryApi";
import { WithCommas } from "@/utils";
import { favData } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Favourites = () => {
  const { isLoading, favourites } = useGetFavourite();

  return (
    <section>
      <CustomLayout>
        <CustomWrapper>
          <Breadcrumb url="Favourites" />

          <div className="mt-5 px-1 md:px-5">
            <section className="mb-20 mt-5">
              <ComponentTitle title="Favourites" />
              {isLoading ? (
                <ComponentLoading />
              ) : (
                <>
                  {favourites?.data?.length > 0 ? (
                    <div className="border space-y-3 py-3 px-3 my-5 max-w-lg rounded-md ">
                      {favourites?.data?.map((fav, favIndex) => (
                        <Link
                          href={`/product/${fav?.ref_no}`}
                          key={favIndex}
                          className="border-b py-1 "
                        >
                          <div className="flex items-start gap-2">
                            <Image
                              src={fav?.images1[0]}
                              width={70}
                              height={70}
                              alt="category-img"
                            />
                            <div>
                              <h3 className="font-bold text-base">{fav.brand_name}</h3>
                              <p className="text-sm font-normal">Size: {fav.product_size}</p>
                              <p className="text-sm font-normal">Color: {fav.product_colors} </p>
                              <h2 className="font-bold text-lg">₦{WithCommas(fav.amount)}</h2>
                            </div>
                            <RiDeleteBin6Fill color="red" cursor="pointer" fontSize={20} />
                          </div>
                          {/* <RiDeleteBin6Fill color="red" cursor="pointer" fontSize={20} /> */}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <>
                      <EmptyComponent
                        title="No Favourites"
                        description="Add favourite item as you shop"
                      />
                      <div className="flex items-center justify-center mt-4">
                        <button className="py-2 px-6 bg-black rounded-full text-white ">
                          <Link href="/new-arrivals">Continue shopping</Link>
                        </button>
                      </div>
                    </>
                  )}
                </>
              )}
            </section>
          </div>
        </CustomWrapper>
        <Footer />
      </CustomLayout>
    </section>
  );
};

export default Favourites;

import { BreadCrumb, Breadcrumb } from "@/components/breadcrumb";
import { ComponentLoading } from "@/components/button/componentLoading";
import { CustomLayout } from "@/components/layout";
import { CustomWrapper } from "@/components/layout/customWrapper";
import { ProductImagePreview } from "@/components/ui/product-details/product-image-preview";
import { ProductItemsDetails } from "@/components/ui/product-details/product-item-details";
import { useFetchProductDetails } from "@/hooks/useCategoryApi";
import { useRouter } from "next/router";
import { useState } from "react";
import { Footer } from "../footer";

const ProductDetails = () => {
  const router = useRouter();
  const query = router.query;

  const tabs = ["Product Details", "Rating & Reviews"];
  const [current, setCurrent] = useState(0);
  const { loading, product } = useFetchProductDetails(query?.id);

  return (
    <section>
      <CustomLayout>
        <CustomWrapper>
          <div className="mt-5">
            {/* <Breadcrumb url={router.query.id} /> */}
            <BreadCrumb product={product} />
            {loading ? (
              <ComponentLoading />
            ) : (
              <>
                <section className="px-5 md:grid grid-cols-2 gap-9 items-start mt-8">
                  <ProductImagePreview product={product} />
                  <ProductItemsDetails product={product} />
                </section>
                <div className="px-5 ">
                  <div className="mt-8 mb-5 flex items-center justify-around border-b">
                    {tabs.map((tab, tabIndex) => (
                      <div
                        role="button"
                        onClick={() => setCurrent(tabIndex)}
                        className={`border-b pb-1  font-medium text-lg ${
                          current === tabIndex
                            ? "border-black border-b-2 text-black"
                            : "border-gray-400 text-[#00000099]"
                        }  w-full text-center `}
                        key={tabIndex}
                      >
                        {tab}
                      </div>
                    ))}
                  </div>
                  <div className="md:grid grid-cols-2 gap-8 pb-14">
                    <div>
                      <div className="border-b pb-3 my-2">
                        <h4 className="text-base font-bold text-black">Description</h4>
                        <p className="text-black font-normal">{product?.body}</p>
                      </div>
                      <div className="border-b pb-3 my-2">
                        <h4 className="text-base font-bold text-black">About this item</h4>
                        <ul className="list-disc">
                          <li className="text-black font-normal">
                            Product Category : {product?.categoryname}
                          </li>
                          <li className="text-black font-normal">Quantity: {product?.quantity}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </CustomWrapper>
        <Footer />
      </CustomLayout>
    </section>
  );
};

export default ProductDetails;

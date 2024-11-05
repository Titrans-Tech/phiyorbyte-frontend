import { Breadcrumb } from "@/components/breadcrumb";
import { ComponentLoading } from "@/components/button/componentLoading";
import { CustomLayout } from "@/components/layout";
import { CustomWrapper } from "@/components/layout/customWrapper";
import { ProductImagePreview } from "@/components/ui/product-details/product-image-preview";
import { ProductItemsDetails } from "@/components/ui/product-details/product-item-details";
import { useFetchProductDetails } from "@/hooks/useCategoryApi";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Footer } from "../footer";
import { addCart } from "@/service/cart";

const ProductDetails = () => {
  const router = useRouter();
  const tabs = ["Product Details", "Rating & Reviews"];
  const [current, setCurrent] = useState(0);
  const { loading, product, getProductsDetails } = useFetchProductDetails();

  const query = router.query;

  useEffect(() => {
    if (router.isReady) {
      getProductsDetails(query?.id);
    }
  }, [router.isReady]);

  return (
    <section>
      <CustomLayout>
        <CustomWrapper>
          <div className="mt-5">
            <Breadcrumb url={router.query.id} />
            {loading ? (
              <ComponentLoading />
            ) : (
              <>
                <section className="px-5 md:grid grid-cols-2 gap-9 items-start mt-8">
                  <ProductImagePreview product={product} />
                  <ProductItemsDetails product={product} />
                </section>
                <div className="px-5">
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
                  <div className="md:grid grid-cols-2 gap-8">
                    <div>
                      <div className="border-b pb-3 my-2">
                        <h4 className="text-base font-bold text-black">Description</h4>
                        <p className="text-black font-normal">
                          One life graphic T-shirt is provide the fit and comfort you expect with
                          stylish vintage cali-themed prints. Check out each of the graphic
                          collections available from Hanes.
                        </p>
                      </div>
                      <div className="border-b pb-3 my-2">
                        <h4 className="text-base font-bold text-black">About this item</h4>
                        <ul className="list-disc">
                          <li className="text-black font-normal">
                            Soft, lightweight 100% cotton jersey
                          </li>
                          <li className="text-black font-normal">
                            Either tagless or with easily removed tearaway tag for comfort.
                          </li>
                          <li className="text-black font-normal">
                            Machine wash cold with like colors, inside out if decorated
                          </li>
                          <li className="text-black font-normal">
                            Cool iron if needed. Do not iron decoration
                          </li>
                        </ul>
                      </div>
                      <div className="border-b pb-3 my-2">
                        <h4 className="text-base font-bold text-black">Key features</h4>
                        <ul className="list-disc">
                          <li className="text-black font-normal">Comfortable</li>
                          <li className="text-black font-normal">&quot;Spill it&quot; tee shirt</li>
                          <li className="text-black font-normal">Graphics</li>
                          <li className="text-black font-normal">Nice</li>
                        </ul>
                      </div>
                    </div>
                    <div className="border-b pb-3 my-2">
                      <h4 className="text-base font-bold text-black">Key features</h4>
                      <ul className="list-disc">
                        <li className="text-black font-normal">SKU: FA203MW05GE12NAFAMZ</li>
                        <li className="text-black font-normal">Product Line: City Collection</li>
                        <li className="text-black font-normal">Production Country: Nigeria</li>
                        <li className="text-black font-normal">Size (L x W x H cm): 12x5</li>
                        <li className="text-black font-normal">Weight (kg): 1</li>
                        <li className="text-black font-normal">Certifications: Eco Friendly</li>
                        <li className="text-black font-normal">Main Material: Cotton</li>
                        <li>
                          Care Label: Do not over scrub, Use gently and do not hot iron the
                          graphics.
                        </li>
                      </ul>
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

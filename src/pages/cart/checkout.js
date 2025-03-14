import { Breadcrumb } from "@/components/breadcrumb";
import { CustomLayout } from "@/components/layout";
import { CustomWrapper } from "@/components/layout/customWrapper";
import { CustomerAddress } from "@/components/ui/cart/customerAddress";
import { Footer } from "@/components/ui/footer";
import { DeliveryAddress } from "../../components/ui/cart/deliveryAddress";
import { PaymentSummary } from "../../components/ui/cart/paymentSummary";
import { useRouter } from "next/router";
import { useFetchCart } from "@/hooks/useFetchCart";
import { BtnLoading } from "@/components/button/btnLoading";
import { useState } from "react";

const CartCheckout = () => {
  const router = useRouter();
  const { cart, loading, totalAmount } = useFetchCart();
  const [savedAddress, setSavedAddress] = useState(null);

  console.log(savedAddress, "THE ADDRESS");

  return (
    <section>
      <CustomLayout>
        <CustomWrapper>
          <Breadcrumb url="Cart/ checkout" />
          {loading ? (
            <div className="min-h-[70vh] flex items-center justify-center ">
              <BtnLoading />
            </div>
          ) : (
            <main className="mb-20">
              <div className="mt-5 grid md:grid-cols-2 items-start  gap-5">
                <div className=" border rounded-md py-3 px-3 border-[#0000001A]">
                  <CustomerAddress updateAddress={(address) => setSavedAddress(address)} />
                  {/* <DeliveryAddress cart={cart} /> */}
                  {/* <p
                    onClick={() => router.push("/cart")}
                    role="button"
                    className="text-lg border-b-2 border-black w-fit mx-auto my-4 flex items-center justify-center font-bold text-black"
                  >
                    Modify cart
                  </p> */}
                </div>
                <PaymentSummary address={savedAddress} cart={totalAmount} />
              </div>
            </main>
          )}
        </CustomWrapper>
        <Footer />
      </CustomLayout>
    </section>
  );
};

export default CartCheckout;

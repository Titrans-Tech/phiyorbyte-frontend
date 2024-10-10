import { Breadcrumb } from "@/components/breadcrumb";
import { CustomLayout } from "@/components/layout";
import { CustomWrapper } from "@/components/layout/customWrapper";
import { CustomerAddress } from "@/components/ui/cart/customerAddress";
import { Footer } from "@/components/ui/footer";
import { DeliveryAddress } from "../../components/ui/cart/deliveryAddress";
import { PaymentSummary } from "../../components/ui/cart/paymentSummary";
import { useRouter } from "next/router";

const CartCheckout = () => {
  const router = useRouter();
  return (
    <section>
      <CustomLayout>
        <CustomWrapper>
          <Breadcrumb url="Cart/ checkout" />
          <main className="mb-20">
            <div
              style={{
                gridTemplateColumns: "2fr 1fr",
              }}
              className="mt-5 grid items-start  gap-5"
            >
              <div className=" border rounded-md py-3 px-3 border-[#0000001A]">
                <CustomerAddress />
                <DeliveryAddress />
                <p
                  onClick={() => router.push("/cart")}
                  role="button"
                  className="text-lg border-b-2 border-black w-fit mx-auto my-4 flex items-center justify-center font-bold text-black"
                >
                  Modify cart
                </p>
              </div>
              <PaymentSummary />
            </div>
          </main>
        </CustomWrapper>
        <Footer />
      </CustomLayout>
    </section>
  );
};

export default CartCheckout;

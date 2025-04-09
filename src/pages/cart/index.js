import { BreadCrumb, Breadcrumb } from "@/components/breadcrumb";
import { ComponentLoading } from "@/components/button/componentLoading";
import { ProductCartCard } from "@/components/cards/ProductCartCard";
import { EmptyComponent } from "@/components/emptyComponent";
import { CustomLayout } from "@/components/layout";
import { CustomWrapper } from "@/components/layout/customWrapper";
import { ComponentTitle } from "@/components/typography/ComponentTitle";
import { CartSummary } from "@/components/ui/cart/cartSummary";
import { Footer } from "@/components/ui/footer";
import { useAuth } from "@/context/authContext";
import { useFetchCart } from "@/hooks/useFetchCart";
import { viewProductOrders } from "@/service/user";
import { favData } from "@/utils/data";
import { useEffect, useState } from "react";

const Cart = () => {
  const { cart, loading, totalAmount, getCartOrder } = useFetchCart();

  const { isAuthenticated } = useAuth();

  return (
    <section>
      <CustomLayout>
        <CustomWrapper>
          <BreadCrumb />
          <main className="mb-20 px-5 ">
            <section className="mt-5">
              <ComponentTitle title="Your Cart" />
            </section>
            {loading ? (
              <ComponentLoading />
            ) : cart?.length > 0 ? (
              <div className="md:grid grid-cols-2 gap-3 items-start">
                <div className="border space-y-3 py-3 px-3 my-5 max-w-lg rounded-md ">
                  {cart?.map((fav, favIndex) => (
                    <ProductCartCard getCartOrder={getCartOrder} key={favIndex} fav={fav} />
                  ))}
                </div>
                <CartSummary summary={totalAmount} />
              </div>
            ) : (
              <>
                <EmptyComponent
                  title="Empty Cart"
                  description="Add to cart and checkout your favourite products"
                />
              </>
            )}
          </main>
        </CustomWrapper>
        <Footer />
      </CustomLayout>
    </section>
  );
};

export default Cart;

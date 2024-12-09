import { Breadcrumb } from "@/components/breadcrumb";
import { ComponentLoading } from "@/components/button/componentLoading";
import { ProductCartCard } from "@/components/cards/ProductCartCard";
import { EmptyComponent } from "@/components/emptyComponent";
import { CustomLayout } from "@/components/layout";
import { CustomWrapper } from "@/components/layout/customWrapper";
import { ComponentTitle } from "@/components/typography/ComponentTitle";
import { CartSummary } from "@/components/ui/cart/cartSummary";
import { Footer } from "@/components/ui/footer";
import { viewProductOrders } from "@/service/user";
import { favData } from "@/utils/data";
import { useEffect, useState } from "react";

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const getCartOrder = async () => {
    try {
      setLoading(true);
      const res = await viewProductOrders();
      const response = await res.data;
      if (response) {
        setLoading(false);
        setCart(response?.data);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getCartOrder();
  }, []);

  console.log(cart, "the cart");
  return (
    <section>
      <CustomLayout>
        <CustomWrapper>
          <Breadcrumb url="Cart" />
          <main className="mb-20 px-5 ">
            <section className="mt-5">
              <ComponentTitle title="Your Cart" />
            </section>
            {loading ? (
              <ComponentLoading />
            ) : cart?.length > 0 ? (
              <div className="md:grid grid-cols-2 items-start">
                <div className="border space-y-3 py-3 px-3 my-5 max-w-lg rounded-md ">
                  {cart?.map((fav, favIndex) => (
                    <ProductCartCard getCartOrder={getCartOrder} key={favIndex} fav={fav} />
                  ))}
                </div>
                <CartSummary />
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

import { Breadcrumb } from "@/components/breadcrumb";
import { ProductCartCard } from "@/components/cards/ProductCartCard";
import { CustomLayout } from "@/components/layout";
import { CustomWrapper } from "@/components/layout/customWrapper";
import { ComponentTitle } from "@/components/typography/ComponentTitle";
import { CartSummary } from "@/components/ui/cart/cartSummary";
import { favData } from "@/utils/data";

const Cart = () => {
  return (
    <section>
      <CustomLayout>
        <CustomWrapper>
          <Breadcrumb url="Cart" />
          <section>
            <ComponentTitle title="Your Cart" />
          </section>
          <div className="grid grid-cols-2 items-start">
            <div className="border space-y-3 py-3 px-3 my-5 max-w-lg rounded-md ">
              {favData.map((fav, favIndex) => (
                <ProductCartCard key={favIndex} fav={fav} />
              ))}
            </div>
            <CartSummary />
          </div>
        </CustomWrapper>
      </CustomLayout>
    </section>
  );
};

export default Cart;

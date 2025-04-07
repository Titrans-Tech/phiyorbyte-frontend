import { useAuth } from "@/context/authContext";
import { useCart } from "@/context/cartContext";
import { useRouter } from "next/router";
import { FaShoppingCart } from "react-icons/fa";

export const CartHeader = () => {
  const { isAuthenticated } = useAuth();
  const { cartCount } = useCart();
  const router = useRouter();

  const handleCartClick = () => {
    if (isAuthenticated) {
      router.push("/checkout");
    } else {
      router.push("/cart");
    }
  };

  return (
    <div className="relative cursor-pointer" onClick={handleCartClick}>
      <FaShoppingCart className="text-2xl" />
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {cartCount}
        </span>
      )}
    </div>
  );
};

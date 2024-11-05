import ProductDetails from "@/components/ui/product-details";
import { useRouter } from "next/router";

const WomenProductDetails = () => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return <ProductDetails />;
};

export default WomenProductDetails;

import ProductDetails from "@/components/ui/product-details";
import { useRouter } from "next/router";

const MenProductDetails = () => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return <ProductDetails />;
};

export default MenProductDetails;

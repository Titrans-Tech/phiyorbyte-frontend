import { ComponentTitle } from "@/components/typography/ComponentTitle";
import { useQuery } from "@tanstack/react-query";
import { getBestSellers } from "@/service/products";
import { ComponentLoading } from "@/components/button/componentLoading";
import { CategoryCard } from "@/components/cards/categoryCard";

export const BestSellers = ({ activeCategory, activeGender }) => {
  const { data: bestSellers, isLoading } = useQuery({
    queryKey: ["bestSellers", activeCategory, activeGender],
    queryFn: () => getBestSellers(activeCategory, activeGender),
  });

  return (
    <div>
      <ComponentTitle title="Best Sellers" />
      {isLoading ? (
        <ComponentLoading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {bestSellers?.data?.map((product) => (
            <CategoryCard link="/product" key={product.id} data={product} />
          ))}
        </div>
      )}
    </div>
  );
};

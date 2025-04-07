import { ComponentTitle } from "@/components/typography/ComponentTitle";
import { useQuery } from "@tanstack/react-query";
import { getFeaturedProducts } from "@/service/products";
import { ComponentLoading } from "@/components/button/componentLoading";
import { CategoryCard } from "@/components/cards/categoryCard";
import { getSubCategory } from "@/service/category";

export const FeaturedProducts = ({ activeCategory, activeGender }) => {
  const { data: featuredProducts, isLoading } = useQuery({
    queryKey: ["featuredProducts", activeCategory, activeGender],
    queryFn: () => getSubCategory("casual"),
  });

  return (
    <div>
      <ComponentTitle title="Featured Products" />
      {isLoading ? (
        <ComponentLoading />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {featuredProducts?.data?.map((product) => (
            <CategoryCard link="/product" key={product.id} data={product} />
          ))}
        </div>
      )}
    </div>
  );
};

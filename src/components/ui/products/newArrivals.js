import { ComponentTitle } from "@/components/typography/ComponentTitle";
import { useQuery } from "@tanstack/react-query";
import { getNewArrivals } from "@/service/products";
import { ComponentLoading } from "@/components/button/componentLoading";
import { CategoryCard } from "@/components/cards/categoryCard";
import { getArrivalCategory } from "@/service/category";

export const NewArrivals = ({ activeCategory, activeGender }) => {
  const { data: newArrivals, isLoading } = useQuery({
    queryKey: ["newArrivals", activeCategory, activeGender],
    queryFn: () => getArrivalCategory(activeCategory, activeGender),
  });

  return (
    <div>
      <ComponentTitle title="New Arrivals" />
      {isLoading ? (
        <ComponentLoading />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {newArrivals?.data?.map((product) => (
            <CategoryCard link="/product" key={product.id} data={product} />
          ))}
        </div>
      )}
    </div>
  );
};

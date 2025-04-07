import { CustomLayout } from "@/components/layout";
import { CustomWrapper } from "@/components/layout/customWrapper";
import { ComponentTitle } from "@/components/typography/ComponentTitle";
import { CategoryFilter } from "@/components/ui/products/categoryFilter";
import { FlashSales } from "@/components/ui/products/flashSales";
import { FeaturedProducts } from "@/components/ui/products/featuredProducts";
import { NewArrivals } from "@/components/ui/products/newArrivals";
import { BestSellers } from "@/components/ui/products/bestSellers";
import { Footer } from "@/components/ui/footer";
import { useState } from "react";

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeGender, setActiveGender] = useState("all");

  return (
    <section>
      <CustomLayout>
        <CustomWrapper>
          <main className="mb-20 px-5">
            {/* Hero Section */}
            <section className="mt-5">
              <ComponentTitle title="Our Products" />
              <p className="text-[#00000099] mt-2">
                Discover our wide range of products for men and women
              </p>
            </section>

            {/* Category and Gender Filters */}
            <section className="mt-8">
              <CategoryFilter
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                activeGender={activeGender}
                setActiveGender={setActiveGender}
              />
            </section>

            {/* Flash Sales Section */}
            <section className="mt-10">
              <FlashSales />
            </section>

            {/* Featured Products */}
            <section className="mt-10">
              <FeaturedProducts activeCategory={activeCategory} activeGender={activeGender} />
            </section>

            {/* New Arrivals */}
            <section className="mt-10">
              <NewArrivals activeCategory={activeCategory} activeGender={activeGender} />
            </section>

            {/* Best Sellers */}
            {/* <section className="mt-10">
              <BestSellers activeCategory={activeCategory} activeGender={activeGender} />
            </section> */}
          </main>
        </CustomWrapper>
        <Footer />
      </CustomLayout>
    </section>
  );
};

export default ProductsPage;

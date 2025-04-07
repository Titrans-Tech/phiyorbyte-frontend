import { useState } from "react";

const categories = [
  { id: "all", name: "All" },
  { id: "clothing", name: "Clothing" },
  { id: "shoes", name: "Shoes" },
  { id: "accessories", name: "Accessories" },
  { id: "electronics", name: "Electronics" },
  { id: "beauty", name: "Beauty" },
];

const genders = [
  { id: "all", name: "All" },
  { id: "men", name: "Men" },
  { id: "women", name: "Women" },
  { id: "unisex", name: "Unisex" },
];

export const CategoryFilter = ({
  activeCategory,
  setActiveCategory,
  activeGender,
  setActiveGender,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
      {/* Gender Filter */}
      <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
        {genders.map((gender) => (
          <button
            key={gender.id}
            onClick={() => setActiveGender(gender.id)}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              activeGender === gender.id ? "bg-black text-white" : "bg-[#F0F0F0] text-black"
            }`}
          >
            {gender.name}
          </button>
        ))}
      </div>

      {/* Category Filter */}
      <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              activeCategory === category.id ? "bg-black text-white" : "bg-[#F0F0F0] text-black"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

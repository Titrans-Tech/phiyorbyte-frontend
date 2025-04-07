import { CiSearch } from "react-icons/ci";

export const CustomSearch = () => {
  return (
    <section className="bg-[#F6F6F6] h-10  w-full px-2 gap-2 flex items-center rounded  ">
      <CiSearch />
      <input
        type="search"
        className="border-0 outline-none bg-transparent text-sm w-full placeholder:text-sm "
        placeholder="What are you looking for..."
      />
    </section>
  );
};

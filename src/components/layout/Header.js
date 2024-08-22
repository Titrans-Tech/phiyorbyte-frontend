import Link from "next/link";
import { Logo } from "../icons";
import { CustomWrapper } from "./customWrapper";
import { navData } from "./navData";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/router";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";

export const Header = () => {
  const router = useRouter();
  const isActive = (link) => {
    return router?.pathname?.split("/")[1] == link?.split("?")[0].slice(1);
  };

  return (
    <nav className="  w-full bg-[white] border-b border-[#BEBCBD]">
      <CustomWrapper>
        <div className="px-4 py-3 flex items-center gap-12">
          <Link href="/">
            <Logo size={100} />
          </Link>
          <ul className="flex  items-center justify-center gap-8">
            {navData.map((nav, navIndex) => (
              <li
                className={`text-lg ${
                  isActive(nav.link)
                    ? "text-[#002400] font-semibold "
                    : "text-[#807D7E] font-normal "
                }`}
                key={navIndex}
              >
                <Link href={nav.link}>{nav.name}</Link>
              </li>
            ))}
          </ul>
          <section className="bg-[#F6F6F6] h-10 w-full max-w-xs px-2 gap-2 flex items-center rounded  ">
            <CiSearch />
            <input
              type="search"
              className="border-0 outline-none bg-transparent text-sm w-full placeholder:text-sm"
              placeholder="What are you looking for..."
            />
          </section>
          <section className="flex items-center gap-3">
            <div className="bg-[#F6F6F6] flex h-8 rounded-[8px] px-2 text-lg text-[#807D7E] items-center justify-center">
              <IoMdHeartEmpty />
            </div>
            <div className="bg-[#F6F6F6] flex h-8 rounded-[8px] px-2 text-lg text-[#807D7E] items-center justify-center">
              <LuUser2 />
            </div>
            <div className="bg-[#F6F6F6] flex h-8 rounded-[8px] px-2 text-lg text-[#807D7E] items-center justify-center">
              <FiShoppingCart />
            </div>
          </section>
        </div>
      </CustomWrapper>
    </nav>
  );
};

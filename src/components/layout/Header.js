import Link from "next/link";
import { Logo } from "../icons";
import { CustomWrapper } from "./customWrapper";
import { navData } from "./navData";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/router";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { useEffect, useState } from "react";
import { getStoredId, isDesktop } from "@/utils";
import { MobileHeader } from "./mobileHeader";
import { LuUser } from "react-icons/lu";
import { CustomSearch } from "../customSearch";

export const Header = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const isActive = (link) => {
    return router?.pathname?.split("/")[1] == link?.split("?")[0].slice(1);
  };
  const user_details = getStoredId("user_data");

  useEffect(() => {
    setUser(JSON.parse(user_details));
  }, []);

  useEffect(() => {
    const dropdowns = document.querySelectorAll(".desktop-dropdown");

    if (isDesktop) {
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("group");
      });
    }

    setTimeout(() => {
      dropdowns.forEach((dropdown) => {
        dropdown.classList.add("group");
      });
    }, 50);
  }, [router.pathname]);

  return (
    <nav className="  w-full bg-[white] border-b border-[#BEBCBD]">
      <CustomWrapper>
        <div className="px-4 py-3 w-full hidden lg:flex justify-between items-center ">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Logo size={100} />
            </Link>
            <ul className="flex  items-center justify-center gap-8">
              {navData.map((nav, navIndex) => {
                if (nav.dropdowns && nav.dropdowns.length > 0) {
                  return (
                    <div
                      key={navIndex}
                      className="group relative  h-full flex flex-col justify-center desktop-dropdown"
                    >
                      <li
                        className={`text-lg group relative ${
                          isActive(nav.link)
                            ? "text-[#002400] font-semibold "
                            : "text-[#807D7E] font-normal "
                        }`}
                        key={navIndex}
                      >
                        <Link href={nav.link}>{nav.name}</Link>
                      </li>
                      <div className="wrapper  absolute w-[300px] z-[2100] pt-[10px] -top-2 md:hidden lg:block  md:-left-4 right-0 invisible opacity-0 pointer-events-none translate-y-[30px] transition-opacity group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto">
                        <div className="w-auto rounded bg-white shadow px-2 pt-2 pb-2">
                          <ul className=" gap-[37px] justify-between">
                            {nav.dropdowns.map((d, i) => {
                              return (
                                <li
                                  key={i}
                                  role="button"
                                  className="flex navItems  relative justify-between items-center cursor-pointer px-2 py-2.5 hover:bg-[#F6F8FA] rounded hover:border hover:border-[#E2E4E9] flex-row gap-4"
                                >
                                  <Link href={d.path} className="flex items-center gap-3">
                                    {d.icon}
                                    <span className="block text-[#00000099] text-sm font-semibold capitalize">
                                      {d.title}
                                    </span>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
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
                );
              })}
            </ul>
          </div>
          <div className="flex gap-4  items-center">
            <CustomSearch />
            <section className="flex items-center gap-3">
              <div
                role="button"
                onClick={user?.name ? () => router.push("/favorites") : () => router.push("/login")}
                className="bg-[#F6F6F6] flex h-8 rounded-[8px] px-2 text-lg text-[#807D7E] items-center justify-center"
              >
                <IoMdHeartEmpty />
              </div>
              <div
                role="button"
                onClick={user?.name ? () => router.push("/profile") : () => router.push("/login")}
                className="bg-[#F6F6F6] flex h-8 rounded-[8px] px-2 text-lg text-[#807D7E] items-center justify-center"
              >
                {user?.name ? (
                  <p className="uppercase">{`${user?.name?.charAt(0)}${user?.name?.charAt(1)}`}</p>
                ) : (
                  <LuUser />
                )}
              </div>
              <div
                role="button"
                onClick={() => router.push("/cart")}
                className="bg-[#F6F6F6] flex h-8 rounded-[8px] px-2 text-lg text-[#807D7E] items-center justify-center"
              >
                <FiShoppingCart />
              </div>
            </section>
          </div>
        </div>
      </CustomWrapper>
      <MobileHeader />
    </nav>
  );
};

"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import { IoMdClose, IoMdHeartEmpty } from "react-icons/io";
import { FaBars } from "react-icons/fa6";

import { Logo } from "../icons";
import { navData } from "./navData";
import { LuUser } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { useRouter } from "next/router";
import { getStoredId } from "@/utils";
import { CustomSearch } from "../customSearch";

export const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  const user_details = getStoredId("user_data");

  useEffect(() => {
    setUser(JSON.parse(user_details));
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen]);
  return (
    <header className="py-4 scroll_hide  w-full flex lg:hidden  bg-transparent px-4 lg:px-12 ">
      <>
        <nav className="w-full flex  items-center  justify-between">
          <Link href="/">
            <Logo size={100} />
          </Link>
          <nav className="flex items-center gap-4 lg:hidden ">
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
            <div role="button" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <IoMdClose fontSize={25} />
              ) : (
                <FaBars fontSize={20} role="button" className="block lg:hidden" />
              )}
            </div>
          </nav>
        </nav>
        {menuOpen && (
          <div className="w-full bg-black  py-10 pt-4 px-7 absolute top-[100px] z-50 left-0  min-h-[20vh] overflow-hidden ">
            <div>
              <ul>
                {navData.map((route, routeIndex) => (
                  <li className="text-xl font-bold leading-6 my-4  text-white" key={routeIndex}>
                    <a onClick={() => setMenuOpen(false)} href={route.link}>
                      {route.name}
                    </a>
                  </li>
                ))}
              </ul>
              <CustomSearch />
            </div>
          </div>
        )}
      </>
    </header>
  );
};

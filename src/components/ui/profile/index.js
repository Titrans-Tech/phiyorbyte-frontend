import Link from "next/link";
import { useRouter } from "next/router";

export const ProfileLayout = ({ children }) => {
  const router = useRouter();
  const url = [
    { name: "Profile Details", link: "/profile" },
    { name: "Change Password", link: "/profile/change-password" },
    { name: "Loyalty Bonuses", link: "/profile/loyalty-bonuses" },
    { name: "Order History", link: "/profile/order-history" },
  ];

  const isActive = (link) => {
    const currentPath = router?.pathname || "";

    return (
      currentPath.startsWith(link) &&
      (currentPath === link || currentPath.split("/")[link.split("/").length] === "")
    );
  };

  return (
    <>
      <section
        //   style={{ gridTemplateColumns: "23fr 57fr" }}
        className="md:flex w-full   gap-10  mb-20 items-star mt-10 px-5 md:px-5"
      >
        <div className="md:hidden my-3 flex flex-wrap items-center gap-4">
          {url.map((uri) => (
            <li
              key={uri.link}
              className={`text-sm border px-4 rounded-full list-none ${
                isActive(uri.link)
                  ? "font-medium text-white bg-black"
                  : "font-normal text-[#00000099]"
              }  py-2`}
            >
              <Link href={uri.link}>{uri.name}</Link>
            </li>
          ))}
        </div>
        <div className="border md:flex hidden  relative w-full max-h-[300px] max-w-xs px-3 rounded-lg py-2 border-[#0000001A]">
          <ul className="">
            {url.map((uri) => (
              <li
                key={uri.link}
                className={`text-sm ${
                  isActive(uri.link) ? "font-medium text-black" : "font-normal text-[#00000099]"
                }  py-2`}
              >
                <Link href={uri.link}>{uri.name}</Link>
              </li>
            ))}
            <li className="absolute left-[40%] right-[40%] cursor-pointer bottom-2 text-center text-[#FF3333] text-sm font-medium ">
              Logout
            </li>
          </ul>
        </div>
        <div className="border w-full py-5  px-5 rounded-lg  border-[#0000001A]">{children}</div>
      </section>
    </>
  );
};

export const ProfileHeaderText = ({ text }) => {
  return <h3 className="text-black font-semibold text-lg text-center  ">{text}</h3>;
};

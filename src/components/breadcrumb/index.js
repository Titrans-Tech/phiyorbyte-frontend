import { useRouter } from "next/router";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

export const Breadcrumb = ({ url }) => {
  const router = useRouter();
  const pathSegments = router.asPath.split("/").filter((seg) => seg);

  return (
    <section className="flex px-1 md:px-4 mt-2 items-center gap-2">
      <button onClick={() => router.back()} className="text-base font-normal text-[#00000099]">
        Home
      </button>
      {pathSegments.map((url, urlIndex) => (
        <div className="flex items-center justify-start gap-2" key={urlIndex}>
          <MdKeyboardArrowRight />
          <button
            className={`text-base capitalize font-medium ${
              urlIndex === pathSegments.length - 1 ? "text-[black]" : "text-[#00000099]"
            }`}
          >
            {url}
          </button>
        </div>
      ))}
    </section>
  );
};

export const BreadCrumb = ({ product }) => {
  const router = useRouter();
  const paths = router.pathname.split("/").filter(Boolean);

  return (
    <div className="px-2">
      <ul className="flex space-x-2">
        {paths.map((path, index) => {
          let routeTo = `/${paths.slice(0, index + 1).join("/")}`;
          let isLast = index === paths.length - 1;

          // Format the display name
          let displayName = path;
          if (path === "[id]" && product) {
            displayName = product.brand_name;
          } else {
            displayName = path
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ");
          }

          return isLast ? (
            <li key={path} className="text-gray-800 font-semibold">
              {displayName}
            </li>
          ) : (
            <li key={path}>
              <Link href={routeTo} className="hover:text-[black] capitalize">
                {displayName}
              </Link>{" "}
              /
            </li>
          );
        })}
      </ul>
    </div>
  );
};

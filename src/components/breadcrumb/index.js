import { useRouter } from "next/router";
import { MdKeyboardArrowRight } from "react-icons/md";

export const Breadcrumb = ({ url }) => {
  const router = useRouter();
  const pathSegments = router.asPath.split("/").filter((seg) => seg);

  return (
    <section className="flex px-4 items-center gap-2">
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

import { useRouter } from "next/router";
import { MdKeyboardArrowRight } from "react-icons/md";

export const Breadcrumb = ({ url }) => {
  const router = useRouter();
  const urlPathName = router.pathname.split("/").filter(Boolean);

  return (
    <section className="flex items-center gap-2">
      <button onClick={() => router.back()} className="text-base font-normal text-[#00000099]">
        Home
      </button>
      {urlPathName.map((url, urlIndex) => (
        <div className="flex items-center justify-start gap-2" key={urlIndex}>
          <MdKeyboardArrowRight />
          <button
            className={`text-base capitalize font-medium ${
              urlIndex === urlPathName.length - 1 ? "text-[black]" : "text-[#00000099]"
            }`}
          >
            {url}
          </button>
        </div>
      ))}
    </section>
  );
};

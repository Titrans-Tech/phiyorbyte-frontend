import { useRouter } from "next/router";
import { MdKeyboardArrowRight } from "react-icons/md";

export const Breadcrumb = ({ url }) => {
  const router = useRouter();
  return (
    <section className="flex items-center gap-2">
      <button onClick={() => router.back()} className="text-base font-normal text-[#00000099]">
        Home
      </button>
      <MdKeyboardArrowRight />
      <button className="text-base  font-medium text-[#000]">{url}</button>
    </section>
  );
};

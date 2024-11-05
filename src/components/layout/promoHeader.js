import Link from "next/link";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export const PromoHeader = () => {
  const [view, setView] = useState(true);
  return (
    <>
      {view && (
        <div className="w-full h-12 bg-black flex items-center justify-between px-3 md:px-7">
          <div className="hidden md:flex">Phi</div>
          <p className="text-white font-normal text-sm">
            Sign up and get 20% off to your first order.{" "}
            <span className="font-medium text-white underline">
              <Link href="/signup">Sign Up Now</Link>
            </span>
          </p>
          <IoClose color="white" onClick={() => setView(false)} cursor="pointer" />
        </div>
      )}
    </>
  );
};

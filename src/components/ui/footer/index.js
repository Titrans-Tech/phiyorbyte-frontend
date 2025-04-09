import { Logo } from "@/components/icons";
import { CustomWrapper } from "@/components/layout/customWrapper";
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoTwitter, IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const paymentMethod = [
    "/partner1.png",
    "/partner2.png",
    "/partner3.png",
    "/partner4.png",
    "/partner5.png",
  ];

  return (
    <footer className="bg-[#F0F0F0] w-full relative">
      <CustomWrapper>
        <section className="bg-black relative -top-10 md:rounded-[20px] py-5 px-4 md:px-16 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 ">
          <h3 className="font-bold text-center md:text-left max-w-xl text-2xl md:text-4xl text-white">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h3>
          <div className="w-full max-w-xs">
            <div className="bg-white flex gap-2 px-2 overflow-hidden items-center rounded-full h-10">
              <MdOutlineEmail color="text-[#00000066]" />
              <input
                type="text"
                placeholder="Enter your email address"
                className="placeholder:text-[#00000066] placeholder:text-sm w-full border-0 outline-none "
              />
            </div>
            <button className="bg-white w-full mt-3 rounded-full h-8 font-medium text-base ">
              Subcribe to Newsletter
            </button>
          </div>
        </section>
        <section className="py-4 px-5 md:grid items-start border-b border-[#0000001A] pb-8 grid-cols-4 gap-4">
          <div>
            <Logo size={120} />
            <p className="text-[#00000099] mt-3 font-normal text-sm">
              We have clothes that suits your style and which you’re proud to wear. From women to
              men.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <div className="w-10 h-10 rounded-full flex items-center justify-center border border-[#00000033] bg-white">
                <IoLogoTwitter fontSize={20} />
              </div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center border border-[#00000033] bg-black">
                <FaFacebookF fontSize={20} color="white" />
              </div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center border border-[#00000033] bg-white">
                <IoLogoInstagram fontSize={20} />
              </div>
            </div>
          </div>
          <ul>
            <li className="text-base py-1 font-medium mb-2">COMPANY</li>
            <li className="text-base py-1 font-normal text-[#00000099]">
              <Link href="/about">About </Link>
            </li>
    
          </ul>
          <ul>
            <li className="text-base py-1 font-medium mb-2">HELP</li>
            <li className="text-base py-1 font-normal text-[#00000099]">
              <Link href="/customer-support">Customer Support </Link>
            </li>
            <li className="text-base py-1 font-normal text-[#00000099]">
              <Link href="/delivery-details">Delivery Details </Link>
            </li>
            <li className="text-base py-1 font-normal text-[#00000099]">
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
            </li>
            <li className="text-base py-1 font-normal text-[#00000099]">Privacy Policy</li>
          </ul>
          <ul>
            <li className="text-base py-1 font-medium mb-2">FAQ</li>
            <li className="text-base py-1 font-normal text-[#00000099]">
              <Link href="/faq">Account </Link>
               </li>
            <li className="text-base py-1 font-normal text-[#00000099]">
              <Link href="/faq">Manage Deliveries </Link>
               </li>
            <li className="text-base py-1 font-normal text-[#00000099]">
              <Link href="/faq">Orders</Link>
            </li>
            <li className="text-base py-1 font-normal text-[#00000099]">
              <Link href="/payments">Payments</Link>
            </li>
          </ul>
        </section>
        <section className="py-3 px-5 flex flex-wrap-reverse items-center justify-between">
          <p className="text-sm text-[#00000099]">Phiyorbyte© 2000-2024, All Rights Reserved</p>
          <div className="flex flex-wrap items-center justify-start gap-2">
            {paymentMethod.map((payment) => (
              <Image
                key={payment}
                height={70}
                width={70}
                src={`/assets${payment}`}
                alt="img-method"
              />
            ))}
          </div>
        </section>
      </CustomWrapper>
    </footer>
  );
};

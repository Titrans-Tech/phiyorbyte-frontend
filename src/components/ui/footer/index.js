import { Logo } from "@/components/icons";
import { CustomWrapper } from "@/components/layout/customWrapper";
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoTwitter, IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import Image from "next/image";

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
        <section className="bg-black relative -top-10 rounded-[20px] py-5 px-16 flex grid-cols-2 items-center justify-between ">
          <h3 className="font-bold max-w-xl text-4xl text-white">
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
        <section className="py-4 grid items-start border-b border-[#0000001A] pb-8 grid-cols-4 gap-4">
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
            <li className="text-base py-1 font-normal text-[#00000099]">About </li>
            <li className="text-base py-1 font-normal text-[#00000099]">Features </li>
            <li className="text-base py-1 font-normal text-[#00000099]">Career</li>
          </ul>
          <ul>
            <li className="text-base py-1 font-medium mb-2">HELP</li>
            <li className="text-base py-1 font-normal text-[#00000099]">Customer Support </li>
            <li className="text-base py-1 font-normal text-[#00000099]">Delivery Details </li>
            <li className="text-base py-1 font-normal text-[#00000099]">Terms & Conditions</li>
            <li className="text-base py-1 font-normal text-[#00000099]">Privacy Policy</li>
          </ul>
          <ul>
            <li className="text-base py-1 font-medium mb-2">FAQ</li>
            <li className="text-base py-1 font-normal text-[#00000099]">Account </li>
            <li className="text-base py-1 font-normal text-[#00000099]">Manage DeliverieS </li>
            <li className="text-base py-1 font-normal text-[#00000099]">Orders</li>
            <li className="text-base py-1 font-normal text-[#00000099]">Payments</li>
          </ul>
        </section>
        <section className="py-3 flex items-center justify-between">
          <p className="text-sm text-[#00000099]">Phiyorbyte© 2000-2024, All Rights Reserved</p>
          <div className="flex items-center justify-start gap-2">
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

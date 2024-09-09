import { Breadcrumb } from "@/components/breadcrumb";
import { CustomLayout } from "@/components/layout";
import { CustomWrapper } from "@/components/layout/customWrapper";
import { ProfileHeaderText, ProfileLayout } from "@/components/ui/profile";
import { useState } from "react";
import { IoFilterOutline } from "react-icons/io5";
import { GoDownload } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { OrderHistoryUi } from "@/components/ui/profile/order-history";
import Image from "next/image";
import { Footer } from "@/components/ui/footer";

const OrderHistory = () => {
  const tab = ["All", "Delivered", "Ongoing", "Cancelled"];
  const [current, setCurrent] = useState(0);

  return (
    <section>
      <CustomLayout>
        <CustomWrapper>
          <Breadcrumb url="Profile Details" />
          <ProfileLayout>
            <section>
              <ProfileHeaderText text="Order History" />
              <section className="flex items-center mt-5 justify-between ">
                <div className="border-b flex  gap-7 w-fit items-center">
                  {tab.map((tabs, tabIndex) => (
                    <div
                      onClick={() => setCurrent(tabIndex)}
                      role="button"
                      className={`text-sm cursor-pointer ${
                        current === tabIndex
                          ? "font-medium border-b border-black text-black"
                          : "font-normal"
                      }`}
                      key={tabIndex}
                    >
                      {tabs}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <section className="bg-[#F6F6F6] h-8 w-full max-w-xs px-2 gap-2 flex items-center rounded  ">
                    <CiSearch />
                    <input
                      type="search"
                      className="border-0 outline-none bg-transparent text-sm w-full placeholder:text-sm"
                      placeholder="Search Order"
                    />
                  </section>
                  <div
                    role="button"
                    className="bg-[#F6F6F6] w- flex h-8 rounded-[8px] px-2 text-lg text-[#807D7E] items-center justify-center"
                  >
                    <IoFilterOutline color="black" />
                  </div>
                  <div className="bg-[#F6F6F6] flex h-8 rounded-[8px] px-2 text-lg text-[#807D7E] items-center justify-center">
                    <GoDownload color="black" />
                  </div>
                </div>
              </section>
              <OrderHistoryUi />
            </section>
          </ProfileLayout>
        </CustomWrapper>
        <Footer />
      </CustomLayout>
    </section>
  );
};

export default OrderHistory;

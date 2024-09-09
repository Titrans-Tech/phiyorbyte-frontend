import { CustomLayout } from "@/components/layout";
import { CustomWrapper } from "@/components/layout/customWrapper";
import { Breadcrumb } from "@/components/breadcrumb";
import { ProfileHeaderText, ProfileLayout } from "@/components/ui/profile";
import { useState } from "react";
import { LoyaltyBonuses } from "@/components/ui/profile/loyaltyComponent";
import { CouponUi } from "@/components/ui/profile/couponUi";
import { Footer } from "@/components/ui/footer";

const LoyaltyBonusess = () => {
  const tab = ["Loyalty Bonuses", "Coupons"];
  const [current, setCurrent] = useState(0);

  const renderContent = () => {
    switch (current) {
      case 0:
        return <LoyaltyBonuses />;
      case 1:
        return (
          <>
            <CouponUi />
          </>
        );
      default:
        return <LoyaltyBonuses />;
    }
  };
  return (
    <main>
      <CustomLayout>
        <CustomWrapper>
          <Breadcrumb url="Profile Details" />
          <ProfileLayout>
            <section>
              <ProfileHeaderText text="Loyalty Bonuses" />
              <div className="border-b flex gap-7 w-fit items-center">
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
              <section className="mt-4">{renderContent()}</section>
            </section>
          </ProfileLayout>
        </CustomWrapper>
        <Footer />
      </CustomLayout>
    </main>
  );
};

export default LoyaltyBonusess;

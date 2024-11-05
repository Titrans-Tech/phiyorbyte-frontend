import { CustomLayout } from "@/components/layout";
import { CustomWrapper } from "@/components/layout/customWrapper";
import { Breadcrumb } from "@/components/breadcrumb";
import { ProfileHeaderText, ProfileLayout } from "@/components/ui/profile";
import { FormInput } from "@/components/Textfield/formInput";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { Footer } from "@/components/ui/footer";
import { useFetchProfile } from "../../components/ui/profile/_component/useUser";
import { useEffect, useState } from "react";
import { ComponentLoading } from "@/components/button/componentLoading";

const Profile = () => {
  const { profile, loading } = useFetchProfile();
  const [phone, setPhone] = useState(profile?.phone || "");
  const [address, setAddress] = useState(profile?.address || "");
  const [billingAddress, setBillingAddress] = useState(profile?.billingAddress || "");

  useEffect(() => {
    if (profile) {
      setPhone(profile?.phone);
      setAddress(profile?.address);
    }
  }, [profile]);

  return (
    <main className="">
      <CustomLayout>
        <CustomWrapper>
          <div className="mt-4">
            <Breadcrumb />
          </div>
          <ProfileLayout>
            {loading ? (
              <ComponentLoading />
            ) : (
              <main>
                <ProfileHeaderText text="View Profile" />
                <section className="mt-4">
                  <div className="lg:grid grid-cols-2 md:gap-2 lg:gap-10">
                    <FormInput
                      disabled
                      value={profile?.name}
                      label="Full Name"
                      name="Full Name"
                      placeholder="Patrick Product"
                    />
                    <FormInput
                      value={profile?.email}
                      disabled
                      label="Email Address"
                      name="Email Address"
                      placeholder="georgia.young@example.com"
                    />
                  </div>
                  <div className="lg:grid grid-cols-2 gap-10">
                    <FormInput
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      label="Phone Number"
                      name="Phone Number"
                      placeholder="(603) 555-0123"
                      icon={<MdOutlineModeEditOutline fontSize={18} />}
                    />
                    <FormInput
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      label="Delivery Address"
                      name="Delivery Address"
                      icon={<MdOutlineModeEditOutline fontSize={18} />}
                      placeholder="4517 Washington Ave. Manchester, Kentucky 39495"
                    />
                  </div>
                  <div className="grid lg:grid-cols-2 gap-10">
                    <FormInput
                      value={billingAddress}
                      onChange={(e) => setBillingAddress(e.target.value)}
                      label="Billing Address"
                      name="Billing Address"
                      icon={<MdOutlineModeEditOutline fontSize={18} />}
                      placeholder="4517 Washington Ave. Manchester, Kentucky 39495"
                    />
                  </div>
                  <div className="w-full flex flex-col   items-center justify-center mt-10">
                    <button className="py-2 px-20 bg-black text-white rounded-full">
                      Save Changes
                    </button>
                    <button className="py-2 px-20 bg-red-600 mt-4 block md:hidden text-white rounded-full">
                      Logout
                    </button>
                  </div>
                </section>
              </main>
            )}
          </ProfileLayout>
        </CustomWrapper>
        <Footer />
      </CustomLayout>
    </main>
  );
};

export default Profile;

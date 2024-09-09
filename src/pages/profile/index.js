import { CustomLayout } from "@/components/layout";
import { CustomWrapper } from "@/components/layout/customWrapper";
import { Breadcrumb } from "@/components/breadcrumb";
import { ProfileHeaderText, ProfileLayout } from "@/components/ui/profile";
import { FormInput } from "@/components/Textfield/formInput";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { Footer } from "@/components/ui/footer";

const Profile = () => {
  return (
    <main>
      <CustomLayout>
        <CustomWrapper>
          <Breadcrumb url="Profile Details" />
          <ProfileLayout>
            <main>
              <ProfileHeaderText text="View Profile" />
              <section className="mt-4">
                <div className="grid grid-cols-2 gap-10">
                  <FormInput label="Full Name" name="Full Name" placeholder="Patrick Product" />
                  <FormInput
                    label="Email Address"
                    name="Email Address"
                    placeholder="georgia.young@example.com"
                  />
                </div>
                <div className="grid grid-cols-2 gap-10">
                  <FormInput
                    label="Phone Number"
                    name="Phone Number"
                    placeholder="(603) 555-0123"
                    icon={<MdOutlineModeEditOutline fontSize={18} />}
                  />
                  <FormInput
                    label="Delivery Address"
                    name="Delivery Address"
                    icon={<MdOutlineModeEditOutline fontSize={18} />}
                    placeholder="4517 Washington Ave. Manchester, Kentucky 39495"
                  />
                </div>
                <div className="grid grid-cols-2 gap-10">
                  <FormInput
                    label="Billing Address"
                    name="Billing Address"
                    icon={<MdOutlineModeEditOutline fontSize={18} />}
                    placeholder="4517 Washington Ave. Manchester, Kentucky 39495"
                  />
                </div>
                <div className="w-full flex items-center justify-center mt-10">
                  <button className="py-2 px-20 bg-black text-white rounded-full">
                    Save Changes
                  </button>
                </div>
              </section>
            </main>
          </ProfileLayout>
        </CustomWrapper>
        <Footer />
      </CustomLayout>
    </main>
  );
};

export default Profile;

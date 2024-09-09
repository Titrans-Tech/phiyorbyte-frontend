import { CustomLayout } from "@/components/layout";
import { CustomWrapper } from "@/components/layout/customWrapper";
import { Breadcrumb } from "@/components/breadcrumb";
import { ProfileHeaderText, ProfileLayout } from "@/components/ui/profile";
import { TextField } from "@/components/Textfield";
import { Footer } from "@/components/ui/footer";

const ChangePassword = () => {
  return (
    <main>
      <CustomLayout>
        <CustomWrapper>
          <Breadcrumb url="Profile Details" />
          <ProfileLayout>
            <section>
              <ProfileHeaderText text="Change Password" />
              <section>
                <div className="max-w-md">
                  <TextField
                    type="password"
                    label="Enter current password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="max-w-md">
                  <TextField
                    type="password"
                    label="Enter new password"
                    placeholder="Enter new password"
                  />
                </div>
                <div className="max-w-md">
                  <TextField
                    type="password"
                    label="Confirm new password"
                    placeholder="Confirm new password"
                  />
                </div>
              </section>
              <div className="w-full flex items-center justify-center mt-10">
                <button className="py-2 px-20 bg-black text-white rounded-full">
                  Save Changes
                </button>
              </div>
            </section>
          </ProfileLayout>
        </CustomWrapper>
        <Footer />
      </CustomLayout>
    </main>
  );
};

export default ChangePassword;

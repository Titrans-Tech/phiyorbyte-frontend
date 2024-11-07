import { CustomLayout } from "@/components/layout";
import { CustomWrapper } from "@/components/layout/customWrapper";
import { Breadcrumb } from "@/components/breadcrumb";
import { ProfileHeaderText, ProfileLayout } from "@/components/ui/profile";
import { TextField } from "@/components/Textfield";
import { Footer } from "@/components/ui/footer";
import { useForm } from "react-hook-form";
import ValidationMessage from "@/components/validationMessage";
import { getErrorMessage, getStoredId } from "@/utils";
import { changePassword } from "@/service/user";
import { useState } from "react";
import Alerts from "@/components/alert";
import { BtnLoading } from "@/components/button/btnLoading";
import { SuccessModal } from "@/components/successModal";
import { useRouter } from "next/router";

const ChangePassword = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState({
    isErr: false,
    errMsg: "",
  });

  const {
    handleSubmit,
    control,
    register,
    watch,
    formState: { errors, isValid },
  } = useForm();

  const password = watch("password", "");
  const user_details = JSON.parse(getStoredId("user_data"));

  const handleChangePassword = async (data) => {
    try {
      const bodyData = {
        email: user_details?.email,
        password: data.password,
        password_confirmation: data.confirmPassword,
      };
      setLoading(true);
      const res = await changePassword(user_details?.ref_no, bodyData);
      const response = await res.data;

      if (response) {
        setLoading(false);
        setSuccess(true);
        console.log("success");
      }
    } catch (error) {
      setLoading(false);
      setErr({
        isErr: true,
        errMsg: getErrorMessage(error),
      });
    }
  };

  return (
    <main>
      <CustomLayout>
        <CustomWrapper>
          <Breadcrumb url="Profile Details" />
          <ProfileLayout>
            <section>
              {/*  */}
              <ProfileHeaderText text="Change Password" />
              <form onSubmit={handleSubmit(handleChangePassword)}>
                <Alerts
                  show={err.isErr}
                  message={err.errMsg}
                  close={() => setErr({ ...err, isErr: false })}
                />
                <div className="md:max-w-md">
                  <TextField
                    type="password"
                    label="Enter current password"
                    placeholder="Enter your password"
                    register={register}
                    name="currentPassword"
                    isRequired={{
                      required: "Enter current password",
                    }}
                  />
                  <ValidationMessage name="currentPassword" errors={errors} />
                </div>
                <div className="md:max-w-md">
                  <TextField
                    name="password"
                    type="password"
                    label="Enter new password"
                    placeholder="Enter new password"
                    isRequired={{
                      required: "Enter new password",
                      pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message:
                          "Password must have a minimum of 8 characters, including at least one letter, one number, and one special character.",
                      },
                    }}
                    register={register}
                  />
                  <ValidationMessage name="password" errors={errors} />
                </div>
                <div className="md:max-w-md">
                  <TextField
                    type="password"
                    label="Confirm new password"
                    placeholder="Confirm new password"
                    isRequired={{
                      required: "Please confirm your new password",
                      validate: (value) => value === password || "Passwords do not match",
                    }}
                    name="confirmPassword"
                    register={register}
                  />
                  <ValidationMessage name="confirmPassword" errors={errors} />
                </div>
                <div className="w-full flex items-center justify-center mt-10">
                  <button className="py-2 px-20 bg-black text-white rounded-full">
                    {loading ? <BtnLoading /> : "Save Changes"}{" "}
                  </button>
                </div>
              </form>
              {success && (
                <SuccessModal
                  isOpen={success}
                  onClick={() => router.push("/profile")}
                  message="Password changed successfully"
                />
              )}
            </section>
          </ProfileLayout>
        </CustomWrapper>
        <Footer />
      </CustomLayout>
    </main>
  );
};

export default ChangePassword;

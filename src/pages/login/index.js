import { Logo } from "@/components/icons";
import { TextField } from "@/components/Textfield";
import Image from "next/image";
import { MdLockOutline } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";
import { ForgotPasswordModal } from "@/components/ui/auth/forgotPasswordModal";
import { PrimaryButton } from "@/components/button";
import { VerificationModal } from "@/components/ui/auth/verifyPin";
import { ResetPasswordModal } from "@/components/ui/auth/resetPassword";
import { useForm } from "react-hook-form";
import ValidationMessage from "@/components/validationMessage";

const LoginScreen = () => {
  const [openForgotPasswordModal, setOpenForgotPasswordModal] = useState(false);
  const [openVerifyOtp, setOpenVerifyOtp] = useState(false);
  const [openResetPassword, setOpenResetPassword] = useState(false);

  const {
    handleSubmit,
    control,
    register,
    formState: { errors, isValid },
  } = useForm();

  return (
    <>
      <section className="min-h-screen grid grid-cols-2 items-start gap-2 bg-white">
        <div className="h-[100vh]  overflow-hidden">
          <Image src="/assets/authImg2.png" alt="" height={100} width={700} className="w-full" />
        </div>
        <div className="flex items-center justify-center flex-col min-h-screen">
          <div className="py-5 pt-12   w-full max-w-sm  min-h-screen mx-auto">
            <div className="flex items-center justify-center">
              <Logo />
            </div>
            <form onSubmit={handleSubmit((data) => console.log(data))} className="mt-6 ">
              <div className="text-center">
                <h3 className="font-bold text-2xl">Login</h3>
                <p className="font-normal text-base">Enter your details below to login.</p>
              </div>
              <section className="mt-">
                <TextField
                  name="email"
                  register={register}
                  isRequired={{
                    required: "Enter email address",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  }}
                  placeholder="Enter your email address"
                  label="Email Address"
                  icon={<HiOutlineMail />}
                />
                <ValidationMessage name="email" errors={errors} />

                <TextField
                  type="password"
                  isRequired={{ required: "Please enter password" }}
                  register={register}
                  name="password"
                  placeholder="Enter your password"
                  label="Password"
                  icon={<MdLockOutline />}
                />
                <ValidationMessage name="password" errors={errors} />

                <div className="flex items-center justify-end">
                  <p
                    onClick={() => setOpenForgotPasswordModal(true)}
                    role="button"
                    className="font-medium text-base text-[#002400]"
                  >
                    Forgot Password
                  </p>
                </div>
              </section>
              <section>
                <PrimaryButton>Login</PrimaryButton>

                <p className="text-base font-normal my-4 text-center text-[#00000066]">
                  Alraedy have an account?
                  <button className="text-base ml-2 font-bold text-[#002400]">
                    <Link href="/signup">Sign Up</Link>
                  </button>
                </p>
              </section>
            </form>
          </div>
        </div>
      </section>
      {openForgotPasswordModal && (
        <ForgotPasswordModal
          isOpen={openForgotPasswordModal}
          onClose={() => setOpenForgotPasswordModal(false)}
          openVerify={() => {
            setOpenForgotPasswordModal(false);
            setOpenVerifyOtp(true);
          }}
        />
      )}
      {openVerifyOtp && (
        <VerificationModal
          openReset={() => {
            setOpenVerifyOtp(false);
            setOpenResetPassword(true);
          }}
          isOpen={openVerifyOtp}
          onClose={() => setOpenVerifyOtp(false)}
        />
      )}
      {openResetPassword && (
        <ResetPasswordModal
          isOpen={openResetPassword}
          onClose={() => setOpenResetPassword(false)}
        />
      )}
    </>
  );
};

export default LoginScreen;

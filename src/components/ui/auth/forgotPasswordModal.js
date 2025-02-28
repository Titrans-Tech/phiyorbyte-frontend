import { PrimaryButton } from "@/components/button";
import { Logo } from "@/components/icons";
import AppDialog from "@/components/modal";
import { TextField } from "@/components/Textfield";
import { HiOutlineMail } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useForm } from "react-hook-form";
import ValidationMessage from "@/components/validationMessage";
import { useState } from "react";
import { getErrorMessage } from "@/utils";
import { recoverPassword } from "@/service/auth";
import Alerts from "@/components/alert";

export const ForgotPasswordModal = ({ openVerify, isOpen, onClose }) => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors, isValid },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState({
    isErr: false,
    errMsg: "",
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await recoverPassword({ email: data.email });
      const response = await res.data;
      if (response) {
        setLoading(false);
        openVerify();
      }
    } catch (error) {
      setLoading(false);
      setErr({
        isErr: true,
        errMsg: getErrorMessage(error),
      });
    }
    console.log(data);
  };

  return (
    <AppDialog isOpen={isOpen} onClose={onClose}>
      <div className="py-14 relative flex items-center justify-center flex-col ">
        <div className="">
          <div className="absolute border border-[#0000001A] py-1 px-1 top-4 right-3">
            <IoClose cursor="pointer" onClick={onClose} />
          </div>
          <div className="flex items-center justify-center">
            <Logo />
          </div>
          <div className="my-3">
            <h3 className="font-bold text-center text-lg text-black">Forgot password</h3>
            <p className="font-normal text-center text-black">
              No worries, we will send you reset instructions.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Alerts
              show={err.isErr}
              message={err.errMsg}
              close={() => setErr({ ...err, isErr: false })}
            />
            <section className="my-2">
              <TextField
                label="Email Address"
                placeholder="Enter your email address"
                icon={<HiOutlineMail />}
                name="email"
                register={register}
                isRequired={{
                  required: "Enter email address",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                }}
              />
              <ValidationMessage name="email" errors={errors} />
            </section>
            <PrimaryButton loading={loading}>Reset Password</PrimaryButton>
          </form>
        </div>
      </div>
    </AppDialog>
  );
};

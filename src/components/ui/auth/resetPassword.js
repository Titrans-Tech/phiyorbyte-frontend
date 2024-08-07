import { PrimaryButton } from "@/components/button";
import { Logo } from "@/components/icons";
import AppDialog from "@/components/modal";
import { TextField } from "@/components/Textfield";
import ValidationMessage from "@/components/validationMessage";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";

export const ResetPasswordModal = ({ isOpen, onClose }) => {
  const {
    handleSubmit,
    control,
    watch,
    register,
    formState: { errors, isValid },
  } = useForm();

  const password = watch("password", "");
  return (
    <AppDialog isOpen={isOpen} onClose={onClose}>
      <div className="py-14 relative px-10 fle items-center justify-center flex-col ">
        <div className="">
          <div className="absolute border border-[#0000001A] py-1 px-1 top-4 right-3">
            <IoClose cursor="pointer" onClick={onClose} />
          </div>
          <div className="flex items-center justify-center">
            <Logo />
          </div>
          <div className="my-3">
            <h3 className="font-bold text-center text-lg text-black">Set New Password</h3>
            <p className="font-normal text-center text-black">Must at least be 8 characters</p>
          </div>
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <section>
              <TextField
                type="password"
                placeholder="Enter your password"
                label="Password"
                icon={<MdLockOutline />}
                isRequired={{
                  required: "Enter password",
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "Password must have a minimum of 8 characters, including at least one letter, one number, and one special character.",
                  },
                }}
                register={register}
                name="password"
              />
              <ValidationMessage name="password" errors={errors} />
            </section>
            <section>
              <TextField
                type="password"
                placeholder="Enter your password"
                label="Confirm Password"
                icon={<MdLockOutline />}
                isRequired={{
                  required: "Please confirm your password",
                  validate: (value) => value === password || "Passwords do not match",
                }}
                name="confirmPassword"
                register={register}
              />
              <ValidationMessage name="confirmPassword" errors={errors} />
            </section>

            <PrimaryButton>Reset Password</PrimaryButton>
          </form>
        </div>
      </div>
    </AppDialog>
  );
};

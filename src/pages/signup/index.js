import { Logo } from "@/components/icons";
import { TextField } from "@/components/Textfield";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import { MdOutlinePhone, MdLockOutline } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { SlHome } from "react-icons/sl";
import Link from "next/link";
import { PrimaryButton } from "@/components/button";
import ValidationMessage from "@/components/validationMessage";
import { useForm } from "react-hook-form";

const SignupScreen = () => {
  const {
    handleSubmit,
    control,
    watch,
    register,
    formState: { errors, isValid },
  } = useForm();

  const password = watch("password", "");
  return (
    <section className="min-h-screen grid grid-cols-2 items-start gap-2 bg-white">
      <div className="min-h-[100vh]  overflow-hidden">
        <Image src="/assets/authImg1.png" alt="" height={100} width={700} className="w-full" />
      </div>
      <div className="py-5  w-full max-w-sm  min-h-screen mx-auto">
        <div className="flex items-center justify-center">
          <Link href="/">
            {" "}
            <Logo />
          </Link>
        </div>
        <form onSubmit={handleSubmit((data) => console.log(data))} className="mt-6 ">
          <div className="text-center">
            <h3 className="font-bold text-2xl">Sign Up</h3>
            <p className="font-normal text-base">Enter your details below to sign up.</p>
          </div>
          <section className="mt-8">
            <section className="my-2">
              <TextField
                placeholder="Enter your full name here"
                label="Full name"
                isRequired={{ required: "Please enter Full Name" }}
                register={register}
                name="fullName"
                icon={<FaRegUser />}
              />
              <ValidationMessage name="fullName" errors={errors} />
            </section>
            <section className="my-2">
              <TextField
                placeholder="Enter your phone number"
                label="Phone Number"
                isRequired={{ required: "Please enter Phone number" }}
                register={register}
                name="phoneNumber"
                icon={<MdOutlinePhone />}
              />
              <ValidationMessage name="phoneNumber" errors={errors} />
            </section>
            <section className="my-2">
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
            </section>
            <section className="my-2">
              <TextField
                placeholder="Enter your home address"
                label="Home Address"
                icon={<SlHome />}
                isRequired={{ required: "Please enter Home Address" }}
                register={register}
                name="homeAddress"
              />
              <ValidationMessage name="homeAddress" errors={errors} />
            </section>
            <section className="my-2">
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
            <section className="my-2">
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
          </section>
          <section>
            <PrimaryButton>Signup</PrimaryButton>
            <p className="text-base font-normal my-4 text-center text-[#00000066]">
              Don’t have an account?{" "}
              <button className="text-base font-bold text-[#002400]">
                <Link href="/login">Log In</Link>
              </button>
            </p>
          </section>
        </form>
      </div>
    </section>
  );
};

export default SignupScreen;

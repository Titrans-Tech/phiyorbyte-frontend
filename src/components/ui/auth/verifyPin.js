import { PrimaryButton } from "@/components/button";
import { Logo } from "@/components/icons";
import AppDialog from "@/components/modal";
import { PinInput } from "@/components/pinInput";
import { TextField } from "@/components/Textfield";
import { HiOutlineMail } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export const VerificationModal = ({ openReset, isOpen, onClose }) => {
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
            <h3 className="font-bold text-center text-lg text-black">Verification</h3>
            <p className="font-normal text-center text-black">
              Enter the 4-digit OTP sent to your phone number.
            </p>
          </div>
          <form>
            <section className="my-6">
              <PinInput length={4} />
            </section>
            <p>
              Didn’t recieve any code?{" "}
              <span className="text-base font-bold text-[#002400]">Resend code in 00:60</span>
            </p>
            <PrimaryButton onClick={openReset}>Continue</PrimaryButton>
          </form>
        </div>
      </div>
    </AppDialog>
  );
};

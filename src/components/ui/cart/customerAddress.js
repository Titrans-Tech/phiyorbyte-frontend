import { TextField } from "@/components/Textfield";
import { SelectField } from "@/components/Textfield/formInput";
import ValidationMessage from "@/components/validationMessage";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosArrowDown } from "react-icons/io";

export const CustomerAddress = ({ updateAddress }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isSaved, setIsSaved] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChange = (data) => {
    updateAddress(data);
    setIsSaved(false);
  };

  return (
    <section className="border-b-2 mb-4 py-2 border-dotted">
      <div className="border-b ">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg text-black py-2">1. Customer Address</h3>
          <IoIosArrowDown
            onClick={() => setIsOpen(!isOpen)}
            className="text-lg text-black cursor-pointer"
          />
        </div>
      </div>
      {isOpen && (
        <form onSubmit={handleSubmit(handleChange)}>
          <div className="grid md:grid-cols-2   gap-2">
            <article>
              <TextField
                register={register}
                isRequired={{ required: "Email is required" }}
                name="email"
                placeholder="Enter Email address"
                label="Email"
              />
              <ValidationMessage name="email" errors={errors} />
            </article>
            <article>
              <TextField
                isRequired={{ required: "Delivery Address is required" }}
                register={register}
                label="Delivery Address"
                name="delivery_address"
                placeholder="Enter delivery address"
              />
              <ValidationMessage name="delivery_address" errors={errors} />
            </article>
            <article>
              <TextField
                isRequired={{ required: "Delivery Phone number is required" }}
                register={register}
                label="Phone Number"
                name="delivery_phone"
                placeholder="Enter phone number"
              />
              <ValidationMessage name="delivery_phone" errors={errors} />
            </article>
            <TextField
              register={register}
              name={"phone"}
              label="Additional phone number (optional)"
              placeholder="Enter phone number"
            />
          </div>
          <div>
            <div role="button" className="text-base font-medium text-[#00000099] text-right">
              Change delivery address
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-3">
            <article>
              <TextField
                register={register}
                label="State"
                name="delivery_state"
                isRequired={{ required: "Delivery state is required" }}
                placeholder="Enter customer state"
              />
              <ValidationMessage name="delivery_state" errors={errors} />
            </article>

            <article>
              <TextField
                isRequired={{ required: "Delivery city is required" }}
                register={register}
                label="City"
                name="delivery_city"
                placeholder="Enter customer city"
              />
              <ValidationMessage name="delivery_city" errors={errors} />
            </article>

            {/* <SelectField label="State" placeholder="Select state" />
            <SelectField label="City" placeholder="Select city" /> */}
          </div>
          {isSaved && (
            <div className="w-full flex items-center justify-end gap-3">
              <button className="text-[#00000066]">Cancel</button>
              <button className="py-2 rounded-full px-3 bg-black text-white">Save</button>
            </div>
          )}
        </form>
      )}
    </section>
  );
};

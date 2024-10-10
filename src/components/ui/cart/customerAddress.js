import { TextField } from "@/components/Textfield";
import { SelectField } from "@/components/Textfield/formInput";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const CustomerAddress = () => {
  const [isOpen, setIsOpen] = useState(true);
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
        <>
          <div className="grid grid-cols-2   gap-2">
            <TextField placeholder="Enter first name" label="First Name" />
            <TextField label="Last Name" placeholder="Enter last name" />
            <TextField label="Phone Number" placeholder="Enter phone number" />
            <TextField
              label="Additional phone number (optional)"
              placeholder="Enter phone number"
            />
          </div>
          <div>
            <TextField
              label="Additional phone number (optional)"
              placeholder="Enter phone number"
            />
            <div role="button" className="text-base font-medium text-[#00000099] text-right">
              Change delivery address
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <SelectField label="State" placeholder="Select state" />
            <SelectField label="City" placeholder="Select city" />
          </div>
          <div className="w-full flex items-center justify-end gap-3">
            <button className="text-[#00000066]">Cancel</button>
            <button className="py-2 rounded-full px-3 bg-black text-white">Save</button>
          </div>
        </>
      )}
    </section>
  );
};

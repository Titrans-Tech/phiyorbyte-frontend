import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

export const FormInput = ({ label, placeholder, icon, type = "text", name }) => {
  return (
    <section className={`my-1`}>
      {label && (
        <label className="text-sm  font-normal text-black" htmlFor={label}>
          {label}
        </label>
      )}
      <section className="bg-transparent px-2  mt-2 border border-[#0000001A] rounded-[62px] h-10  w-full flex items-center justify-start gap-3">
        <input
          name={name}
          type="text"
          className="border-0 bg-transparent outline-0 placeholder:text-base placeholder:text-[#00000066] bg-[#F0F0F0] w-full"
          placeholder={placeholder}
        />
        <span className="text-[#00000066] text-sm">{icon}</span>
      </section>
    </section>
  );
};

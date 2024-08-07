import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
export const TextField = ({
  label,
  placeholder,
  icon,
  type = "text",
  name,
  isRequired,
  register = () => {},
}) => {
  const [view, setView] = useState(false);
  return (
    <section className={`my-1`}>
      {label && (
        <label className="text-sm  font-normal text-black" htmlFor={label}>
          {label}
        </label>
      )}
      <section className="bg-[#F0F0F0] px-3 mt-2  rounded-[62px] h-12 w-full flex items-center justify-start gap-3">
        <span className="text-[#00000066] text-sm">{icon}</span>
        <input
          name={name}
          {...register(name, isRequired)}
          type="text"
          className="border-0 outline-0 placeholder:text-base placeholder:text-[#00000066] bg-[#F0F0F0] w-full"
          placeholder={placeholder}
        />
        {type == "password" && (
          <div className="text-[#00000066] text-sm">
            {view ? <IoEyeOutline /> : <IoEyeOffOutline />}
          </div>
        )}
      </section>
    </section>
  );
};

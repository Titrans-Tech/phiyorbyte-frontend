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
      <section className="bg-[#F0F0F0] relative overflow-hidden  mt-2  rounded-[62px] h-12 w-full flex gap-3 items-center justify-start ">
        <span className="text-[#00000066] relative left-1  text-sm">{icon}</span>
        <input
          name={name}
          {...register(name, isRequired)}
          type={type === "password" ? (view ? "text" : "password") : "text"}
          className="border-0  h-full    outline-0 placeholder:text-base placeholder:text-[#00000066] bg-[#F0F0F0] w-full"
          placeholder={placeholder}
        />
        {type == "password" && (
          <div
            role="button"
            onClick={() => setView(!view)}
            className="text-[#00000066] relative right-1  text-sm"
          >
            {view ? <IoEyeOutline /> : <IoEyeOffOutline />}
          </div>
        )}
      </section>
    </section>
  );
};

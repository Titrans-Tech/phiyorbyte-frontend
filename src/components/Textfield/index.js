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
      <section className="bg-[#F0F0F0] relative overflow-hidden  mt-2  rounded-[62px] h-12 w-full flex gap-3 items-center justify-start    border border-[#525866] ">
        <span className="absolute top-[50%] translate-y-[-50%] z-[1] left-[10px] text-[#00000066]  text-sm">
          {icon}
        </span>
        <input
          name={name}
          {...register(name, isRequired)}
          type={type === "password" ? (view ? "text" : "password") : "text"}
          className={`w-full relative ${
            icon ? "px-[36px]" : "px-[10px]"
          }  h-full px-2  border-0  placeholder:text-sm outline-none bg-transparent focus:bg-transparent `}
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

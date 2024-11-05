import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Select from "react-select";

export const FormInput = ({
  disabled,
  value,
  onChange,
  label,
  placeholder,
  icon,
  type = "text",
  name,
}) => {
  return (
    <section className={`my-1`}>
      {label && (
        <label className="text-sm  font-normal text-black" htmlFor={label}>
          {label}
        </label>
      )}
      <section className="bg-transparent px-2  mt-2 border border-[#0000001A] rounded-[62px] h-10  w-full flex items-center justify-start gap-3">
        <input
          value={value}
          onChange={onChange}
          name={name}
          disabled={disabled}
          type="text"
          className="border-0 bg-transparent outline-0 placeholder:text-base placeholder:text-[#00000066] bg-[#F0F0F0] w-full"
          placeholder={placeholder}
        />
        <span className="text-[#00000066] text-sm">{icon}</span>
      </section>
    </section>
  );
};

export const SelectField = ({ value, label, required, option, placeholder, handleChange }) => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: "1px solid #F0F0F0",
      boxShadow: "none",
      borderRadius: "50px",
      background: "#F0F0F0",
      outline: "none",
      height: "50px",
      color: "#fff",
      "&:hover": {
        border: "1px solid #F0F0F0",
      },
    }),

    option: (provided, state) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      padding: "5px",
      backgroundColor: state.isSelected ? "whitesmoke" : state.isFocused ? "#F6F8FA" : "white",
      color: state.isSelected ? "black" : state.isFocused ? "black" : "black",
    }),
  };

  return (
    <section className="my-3">
      <label htmlFor="">
        <p className="my-1 text-base font-normal mb-2 leading-5 text-[black] ">{label}</p>
      </label>
      <Select
        value={value}
        required={required}
        className="text-white outline-none border-0"
        onChange={handleChange}
        options={option}
        styles={customStyles}
        placeholder={placeholder}
      />
    </section>
  );
};

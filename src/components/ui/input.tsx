import React from "react";

interface InputComponentProps {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
}

export default function InputComponent({
  label,
  name,
  type = "text",
  placeholder,
}: InputComponentProps) {
  return (
    <div className="gap-[8px] text-[#656565]">
      <label htmlFor="" className="text-[12px] leading-[18px]">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea className="w-full h-[128px] rounded-[4px] border border-gray-400 px-[12px] py-[8px] focus:border-[#FFC657]  outline-none" />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="w-[100%] h-[42px] rounded-[4px] border border-gray-400 px-[12px] focus:border-[#FFC657]  outline-none"
        />
      )}
    </div>
  );
}

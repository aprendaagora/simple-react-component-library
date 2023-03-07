import React from "react";

export interface InputProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  placeholder?: string;
  tailwind?: string;
}

const Input = ({
  setValue,
  tailwind,
  value = "",
  placeholder = "",
}: InputProps) => {
  return (
    <input
      className={`border p-1 ${tailwind}`}
      value={value}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Input;

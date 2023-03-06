import React from "react";

export interface InputProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  placeholder?: string;
}

const Input = ({ setValue, value = "", placeholder = "" }: InputProps) => {
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Input;

import React from "react";

export interface InputProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  className?: string;
  placeholder?: string;
}

const Input = ({
  setValue,
  className = "",
  value = "",
  placeholder = "",
}: InputProps) => {
  return (
    <input
      className={className}
      value={value}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Input;

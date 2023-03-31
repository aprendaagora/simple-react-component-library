import React from "react";
import Input from "../../01_atoms/Input";

export interface FormGroupProps {
  value: string;
  onChange: any;
  type?: string;
  label: string;
  name: string;
  placeholder?: string;
  className?: string;
}

const FormGroup: React.FC<FormGroupProps> = ({
  value,
  onChange,
  type,
  label,
  name,
  placeholder,
  className = "",
}) => {
  return (
    <div
      className={`${
        type == "checkbox"
          ? "flex flex-row-reverse justify-end [&_input]:mr-2"
          : "flex flex-col"
      } ${className}`}
    >
      <label
        className={`my-1 ${type == "checkbox" && "cursor-pointer"}`}
        htmlFor={name}
      >
        {label}
      </label>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className={`${type == "checkbox" && "cursor-pointer"}`}
      />
    </div>
  );
};

export default FormGroup;

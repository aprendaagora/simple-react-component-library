import React from "react";

export interface InputProps {
  onChange: any;
  value: string;
  id?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  disabled?: string;
  max?: number;
  min?: number;
  maxlength?: number;
}

const Input: React.FC<InputProps> = ({
  onChange,
  className,
  max,
  min,
  maxlength,
  type = "text",
  name = "",
  value = "",
  placeholder = "",
}) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((checked) => !checked);
    onChange(!checked);
  };

  if (type == "checkbox")
    return (
      <input
        type={type}
        name={name}
        id={name}
        checked={checked}
        className={`w-fit ${className}`}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    );

  return (
    <input
      type={type}
      name={name}
      id={name}
      className={`border rounded p-1 ${className}`}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      max={max}
      min={min}
      maxLength={maxlength}
    />
  );
};

export default Input;

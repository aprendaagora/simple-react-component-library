import React from "react";
import "../../../output.css";

export interface ButtonProps {
  text: string | React.ReactNode;
  className?: string;
  type?:
    | "primary"
    | "success"
    | "warning"
    | "danger"
    | "secondary"
    | "light"
    | "dark";
  noBgColor?: boolean;
  textColor?: string;
  disabled?: boolean;
  onClick?: any;
}

const Button: React.FC<ButtonProps> = ({
  text,
  className,
  type,
  disabled = false,
  noBgColor = false,
  textColor = "",
  onClick,
}) => {
  const bgColor = {
    primary: "#0d6efd",
    success: "#198754",
    danger: "#dc3545",
    warning: "#ffc107",
    secondary: "gray",
    light: "whitesmoke",
    dark: "black",
  };

  const buttonStyle = {
    backgroundColor: noBgColor
      ? "transparent"
      : disabled
      ? "bg-gray"
      : type
      ? bgColor[type!]
      : "",
    color: textColor ? textColor : type === "light" ? "black" : "white",
    display: "flex",
    alignItems: "center",
    width: "fit-content",
    height: "fit-content",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={buttonStyle}
      className={`${className}`}
    >
      {text}
    </button>
  );
};

export default Button;

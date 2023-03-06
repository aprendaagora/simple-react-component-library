import React from "react";
import "../../../output.css";

export interface ButtonProps {
  text: string | JSX.Element;
  tailwind?: string;
  type?: "primary" | "success" | "danger" | "secondary" | "light" | "dark";
  noBgColor?: boolean;
  textColor?: string;
  onClick?: any;
}

const Button = ({
  text,
  tailwind = "",
  type = "primary",
  noBgColor = false,
  textColor = "",
  onClick,
}: ButtonProps) => {
  const bgColor = {
    primary: "blue",
    success: "green",
    danger: "red",
    secondary: "gray",
    light: "whitesmoke",
    dark: "black",
  };
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: noBgColor ? "transparent" : bgColor[type],
        color: textColor ? textColor : type === "light" ? "black" : "white",
        fontWeight: "bold",
        borderRadius: "5px",
        padding: "3px",
        display: "flex",
      }}
      className={tailwind}
    >
      {text}
    </button>
  );
};

export default Button;

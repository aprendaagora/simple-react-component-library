import React from "react";
import "../../../output.css";

export interface ButtonProps {
  label: string;
  tailwind?: string;
  type?: "primary" | "success" | "danger" | "secondary" | "light" | "dark";
}

const Button = ({ label, tailwind = "", type = "primary" }: ButtonProps) => {
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
      style={{
        backgroundColor: bgColor[type],
        color: type === "light" ? "black" : "white",
        fontWeight: "bold",
        borderRadius: "5px",
        padding: "3px",
      }}
      className={tailwind}
    >
      {label}
    </button>
  );
};

export default Button;

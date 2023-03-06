import React, { useState } from "react";
import Button from "../../01_atoms/Button";
import "../../../output.css";
import { FaTimes } from "react-icons/fa";

export interface AlertProps {
  text: string;
  type?: "success" | "primary" | "danger" | "secondary" | "dark" | "light";
  closeButton?: boolean;
}

const Alert = ({ text, type = "primary", closeButton = false }: AlertProps) => {
  const [hide, setHide] = useState(false);
  const hideAlert = () => {
    setHide(true);
  };

  const successStyle = {
    color: "#155724",
    backgroundColor: "#d4edda",
    borderColor: "#c3e6cb",
  };

  const dangerStyle = {
    color: "#721c24",
    backgroundColor: "#f8d7da",
    borderColor: "#f5c6cb",
  };

  const primaryStyle = {
    color: "#004085",
    borderColor: "#b8daff",
    backgroundColor: "#cce5ff",
  };

  const secondaryStyle = {
    color: "#383d41",
    backgroundColor: "#e2e3e5",
    borderColor: "#d6d8db",
  };

  const darkStyle = {
    color: "#1b1e21",
    backgroundColor: "#d6d8d9",
    borderColor: "#c6c8ca",
  };

  const lightStyle = {
    color: "#818182",
    backgroundColor: "#fefefe",
    borderColor: "#fdfdfe",
  };

  const styles = {
    success: successStyle,
    danger: dangerStyle,
    primary: primaryStyle,
    secondary: secondaryStyle,
    dark: darkStyle,
    light: lightStyle,
  };

  return (
    <div
      style={{ display: hide ? "none" : "flex", ...styles[type] }}
      className="rounded border p-4 flex justify-between"
    >
      <span>{text}</span>{" "}
      {closeButton && (
        <Button
          onClick={hideAlert}
          textColor={styles[type].color}
          noBgColor={true}
          text={<FaTimes />}
        />
      )}
    </div>
  );
};

export default Alert;

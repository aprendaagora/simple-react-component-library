import React from "react";
import "../../../output.css";

export interface BadgeProps {
  text: string;
  bgColor: string;
  count?: number;
  clickFunction: any;
}

const Badge = ({
  text,
  bgColor = "black",
  count,
  clickFunction,
}: BadgeProps) => {
  return (
    <span
      style={{ backgroundColor: bgColor }}
      className="rounded relative text-white p-2 cursor-pointer"
      onClick={clickFunction}
    >
      <span>{text}</span>
      {count && (
        <span className="absolute -top-2 -right-3 bg-red-500 rounded-full text-sm px-1">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </span>
  );
};

export default Badge;

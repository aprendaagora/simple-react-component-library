import React from "react";
import "../../../output.css";

export interface BadgeProps {
  text: string;
  bgColor?: string;
  count?: number;
  onClick?: any;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  text,
  className,
  count,
  onClick,
  bgColor = "black",
}) => {
  return (
    <span
      style={{ backgroundColor: bgColor }}
      className={`rounded-full relative inline-block text-white px-2 cursor-pointer w-fit ${className}`}
      onClick={onClick}
    >
      <span>{text}</span>
      {count && (
        <span
          className={`absolute -top-2  bg-red-500 rounded-full text-sm ${
            count < 10
              ? "px-2 -right-3"
              : count < 99
              ? "px-1 -right-3"
              : "px-1 -right-5"
          }`}
        >
          {count > 99 ? "99+" : count}
        </span>
      )}
    </span>
  );
};

export default Badge;

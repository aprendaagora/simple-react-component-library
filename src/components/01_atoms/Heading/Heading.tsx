import React from "react";

export interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
  color?: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  text,
  color,
  className,
  level = 1,
}) => {
  if (level === 1)
    return (
      <h1
        style={{ fontSize: "2.75em", color: color ? color : "black" }}
        className={className}
      >
        {text}
      </h1>
    );
  if (level === 2)
    return (
      <h2
        style={{ fontSize: "2.5em", color: color ? color : "black" }}
        className={className}
      >
        {text}
      </h2>
    );
  if (level === 3)
    return (
      <h3
        style={{ fontSize: "2.25em", color: color ? color : "black" }}
        className={className}
      >
        {text}
      </h3>
    );
  if (level === 4)
    return (
      <h4
        style={{ fontSize: "2em", color: color ? color : "black" }}
        className={className}
      >
        {text}
      </h4>
    );
  if (level === 5)
    return (
      <h5
        style={{ fontSize: "1.75em", color: color ? color : "black" }}
        className={className}
      >
        {text}
      </h5>
    );
  if (level === 6)
    return (
      <h6
        style={{ fontSize: "1.5em", color: color ? color : "black" }}
        className={className}
      >
        {text}
      </h6>
    );
  return null;
};

export default Heading;

import React from "react";
import Heading from "../../01_atoms/Heading";

export interface CardProps {
  image?: string;
  heading: string;
  description?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  image,
  heading,
  description,
  className,
}) => {
  return (
    <div className={`border rounded bg-white p-2 ${className}`}>
      {image && <img src={image} alt="" />}
      <Heading text={heading} />
      {description && <p>{description}</p>}
    </div>
  );
};

export default Card;

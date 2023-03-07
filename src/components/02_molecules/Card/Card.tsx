import React from "react";
import Heading from "../../01_atoms/Heading";

export interface CardProps {
  image?: string;
  heading: string;
  description?: string;
  tailwind?: string;
}

const Card: React.FC<CardProps> = ({
  image,
  heading,
  description,
  tailwind,
}) => {
  return (
    <div className={`border rounded bg-white p-2 ${tailwind}`}>
      {image && <img src={image} alt="" />}
      <Heading text={heading} />
      {description && <p>{description}</p>}
    </div>
  );
};

export default Card;

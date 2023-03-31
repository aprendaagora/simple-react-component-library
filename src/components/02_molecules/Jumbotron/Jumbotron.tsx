import React from "react";
import Heading from "../../01_atoms/Heading";

export interface JumbotronProps {
  heading: string;
  description?: string;
  Content: React.ReactNode;
  className?: string;
}

const Jumbotron: React.FC<JumbotronProps> = ({
  heading,
  description,
  Content,
  className,
}) => {
  return (
    <div className={`p-5 bg-slate-50 border rounded ${className}`}>
      <header>
        <Heading text={heading} />
        {description && <p className="text-lg text-gray-500">{description}</p>}
      </header>

      <hr className="my-3" />
      <main>{Content}</main>
    </div>
  );
};

export default Jumbotron;

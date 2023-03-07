import React from "react";
import Heading from "../../01_atoms/Heading";

export interface JumbotronProps {
  heading: string;
  description?: string;
  Content: React.ReactNode;
  tailwind?: string;
}

const Jumbotron: React.FC<JumbotronProps> = ({
  heading,
  description,
  Content,
  tailwind,
}) => {
  return (
    <div className={`p-5 bg-slate-50 border rounded ${tailwind}`}>
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

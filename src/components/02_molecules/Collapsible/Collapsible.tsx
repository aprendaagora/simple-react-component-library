import React, { useState } from "react";
import Heading from "../../01_atoms/Heading";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export interface CollapsibleProps {
  heading: string;
  Content: React.ReactNode;
  className?: string;
}

const Collapsible: React.FC<CollapsibleProps> = ({
  heading,
  Content,
  className,
}) => {
  const [collapse, setCollapse] = useState(true);
  return (
    <div className={`rounded bg-slate-50 ${className}`}>
      <header
        className="cursor-pointer p-1 flex justify-between items-center px-3"
        onClick={() => setCollapse(!collapse)}
      >
        <Heading level={5} text={heading} />
        {collapse ? <FaChevronDown /> : <FaChevronUp />}
      </header>
      <main className={`p-5 ${collapse && "hidden"}`}>{Content}</main>
    </div>
  );
};

export default Collapsible;

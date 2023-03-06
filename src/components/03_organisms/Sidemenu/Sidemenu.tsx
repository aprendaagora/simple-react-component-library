import Heading from "../../01_atoms/Heading";
import React from "react";
import { Link } from "react-router-dom";
import List from "../../02_molecules/List";

export interface SidemenuProps {
  menuSections: {
    heading?: string;
    routes?: {
      route: string;
      text: string;
    }[];
    renderItem: (item: any) => React.ReactNode;
  }[];
}

const Sidemenu: React.FC<SidemenuProps> = ({ menuSections }) => {
  return (
    <div className="min-h-[calc(100vh-50px)] bg-slate-100 w-[300px] border-r-2 p-3">
      {menuSections.map((section) => (
        <>
          {section.heading && <Heading level={6} text={section.heading} />}
          {section.routes && (
            <List
              items={section.routes}
              listStyle={{ marginTop: "20px" }}
              itemStyle={{ marginBottom: "10px" }}
              renderItem={(item) => section.renderItem(item)}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default Sidemenu;

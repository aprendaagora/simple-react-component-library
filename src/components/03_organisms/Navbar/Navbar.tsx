import React from "react";
import List from "../../02_molecules/List";

export interface NavbarProps {
  Logo: React.ReactNode;
  routes?: {
    route: string;
    text: string;
  }[];
  renderItem?: (item: any) => React.ReactNode;
  tailwind?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  Logo,
  routes,
  renderItem = (item) => <span>{item}</span>,
  tailwind,
}) => {
  return (
    <div className={`flex items-center p-3 bg-gray-500 h-[50px] ${tailwind}`}>
      <div className="mr-2">{Logo}</div>

      {routes && (
        <List
          items={routes}
          listStyle={{ display: "flex", color: "white" }}
          renderItem={(item) => renderItem(item)}
        />
      )}
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import List from "../../02_molecules/List";

export interface NavbarProps {
  Logo: React.ReactNode;
  routes?: {
    route: string;
    text: string;
  }[];
  renderItem: (item: any) => React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ Logo, routes, renderItem }) => {
  return (
    <div className="flex items-center p-3 bg-gray-500 h-[50px]">
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

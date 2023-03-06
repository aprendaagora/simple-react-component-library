import React from "react";
import "../../../output.css";

export interface ListProps {
  items: any[];
  listStyle?: any;
  itemStyle?: any;
  renderItem: (item: any) => React.ReactNode;
}

const List: React.FC<ListProps> = ({
  items,
  listStyle,
  itemStyle,
  renderItem,
}) => {
  return (
    <ul style={listStyle}>
      {items.map((item, i) => (
        <li style={itemStyle} key={i}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};

export default List;

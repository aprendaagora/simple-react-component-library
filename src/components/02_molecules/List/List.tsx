import React from "react";
import "../../../output.css";

export interface ListProps {
  items: any[];
  listStyle?: any;
  itemStyle?: any;
  renderItem: (item: any) => React.ReactNode;
  tailwind?: string;
}

const List: React.FC<ListProps> = ({
  items,
  listStyle,
  itemStyle,
  renderItem,
  tailwind,
}) => {
  return (
    <ul style={listStyle} className={tailwind}>
      {items.map((item, idx) => (
        <li style={itemStyle} key={idx}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};

export default List;

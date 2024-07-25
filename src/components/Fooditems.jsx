import React from "react";
import Item from "./items";

const Fooditems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((fooditem, index) => (
        <Item key={index} fooditem={fooditem} />
      ))}
    </ul>
  );
};

export default Fooditems;

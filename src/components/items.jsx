import React from "react";
import styles from "./Item.module.css";

const Item = ({ fooditem }) => {
  const handleBuyButtonClicked = (fooditem) => {
    console.log(`${fooditem} being bought`);
  };

  return (
    <li className={"list-group-item as-item"}>
      {fooditem}
      <button
        className={styles.Item}
        onClick={() => handleBuyButtonClicked(fooditem)}
      >
        buy
      </button>
    </li>
  );
};

export default Item;

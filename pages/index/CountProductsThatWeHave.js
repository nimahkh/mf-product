import React from "react";
import { connect } from "umi";
import styles from "./index.css";

function CountProductsThatWeHave({ products, dispatch }) {
  return (
    <div className={styles.container}>
      {Object.keys(products)?.map((item, index) => (
        <div className={styles.items} key={index}>
          Product with ID: {item} has a price with : {products[item].product}
        </div>
      ))}
    </div>
  );
}

export default connect(state => {
  const { products } = state?.card;
  return {
    products
  };
})(CountProductsThatWeHave);

import { useState } from "react";
import styles from "./ProductShopCard.module.css";
import PropTypes from "prop-types";

export const ProductShopCard = ({ item, cart, setCart }) => {
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (event) => {
    setInputValue(parseInt(event.target.value));
  };

  const addToCart = (item) => {
    let existingItem = false;
    let tempCart = [];
    if (inputValue > 0) {
      tempCart = cart.map((loopItem) => {
        if (loopItem.title === item.title) {
          loopItem.quantity += inputValue;
          existingItem = true;
        }
        return loopItem;
      });
      if (!existingItem) {
        let newItem = {
          title: item.title,
          price: item.price,
          image: item.image,
          quantity: inputValue,
        };
        tempCart = [...tempCart, newItem];
        setCart(tempCart);
      } else {
        setCart(tempCart);
      }
    }
  };

  return (
    <div className={styles.categoryCard}>
      <div className={styles.image_title_container}>
        <img className={styles.categoryCardImg} src={item.image} alt="" />
        <h3>{item.title}</h3>
      </div>
      <h4 className={styles.rating}>Rating: {item.rating.rate}</h4>
      <h4 className={styles.rating}>${item.price}</h4>
      <div className={styles.amount_button_container}>
        <input
          className={styles.input}
          defaultValue={0}
          min={0}
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          onChange={(event) => {
            handleInputChange(event);
          }}
        />
        <button
          className={styles.button}
          onClick={() => {
            addToCart(item);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

ProductShopCard.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
  item: PropTypes.object,
};

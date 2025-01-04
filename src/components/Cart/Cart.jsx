import { useOutletContext } from "react-router-dom";
import styles from "./Cart.module.css";
import { useEffect, useState } from "react";

export const Cart = () => {
  const { setCart, cart } = useOutletContext();

  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    let total = 0;

    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    total = total.toFixed(2);
    setCartTotal(total);
  }, [cart]);

  const handleRemoveItem = (item) => {
    let tempCart = [];
    tempCart = cart.filter((loopItem) => {
      if (loopItem.title !== item.title) {
        return loopItem;
      }
    });
    setCart(tempCart);
  };

  const handleInputChange = (event, item) => {
    let input = parseInt(event.target.value);
    let tempCart = [];

    tempCart = cart.map((loopItem) => {
      if (loopItem.title === item.title) {
        return { ...loopItem, quantity: input };
        // loopItem.quantity = input;
      }
      return loopItem;
    });
    setCart(tempCart);
  };

  return (
    <div>
      <div className={styles.header}>
        <h1>Cart</h1>
      </div>
      <div className={styles.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
              {/* <th>Image</th> */}
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => {
              return (
                <tr key={index} className={styles.tableRow}>
                  <td>
                    {item.title}
                    <br></br>
                    <br></br>
                    <img src={item.image}></img>
                  </td>
                  <td>
                    <input
                      type="number"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      min={0}
                      defaultValue={item.quantity}
                      onChange={(event) => {
                        handleInputChange(event, item);
                      }}
                    />
                  </td>
                  <td>${item.quantity * item.price}</td>
                  {/* <td>
                    <img src={item.image}></img>
                  </td> */}
                  <td>
                    <button onClick={() => handleRemoveItem(item)}>X</button>
                  </td>
                </tr>
              );
            })}
            <tr className={styles.tableRow}>
              <td></td>
              <td></td>
              <td>Total: ${cartTotal}</td>
              {/* <td></td> */}
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

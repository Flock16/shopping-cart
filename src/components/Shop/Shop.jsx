import { ProductShopCard } from "../ProductShopCard/ProductShopCard";
import styles from "./Shop.module.css";
import { useOutletContext } from "react-router-dom";
import { Loader } from "../Loader/Loader";

export const Shop = () => {
  const { loading, items, setCart, cart } = useOutletContext();

  return (
    <>
      <div className={styles.header}>
        <h1>Shop</h1>
      </div>
      {loading ? (
        <div className={styles.loaderContainer}>
          <Loader />
        </div>
      ) : (
        <div className={styles.itemsContainer}>
          {items.map((item) => {
            return (
              <ProductShopCard
                key={item.id}
                item={item}
                cart={cart}
                setCart={setCart}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

import PropTypes from "prop-types";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export const Navbar = ({ cart }) => {
  return (
    <>
      <div className={styles.navContainer}>
        <h1>
          <Link to="/">ShopMe</Link>
        </h1>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/cart">Cart - {cart.length}</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = {
  cart: PropTypes.array,
};

import PropTypes from "prop-types";
import styles from "./ProductCategoryCard.module.css";
import { Link } from "react-router-dom";

const ProductCategoryCard = ({ product }) => {
  let category = "";
  let image = "";

  if (product[0].category === "men's clothing") {
    category =
      product[1].category[0].toUpperCase() + product[1].category.substring(1);
    image = product[1].image;
  } else {
    category =
      product[0].category[0].toUpperCase() + product[0].category.substring(1);
    image = product[0].image;
  }
  return (
    <div className={styles.categoryCard}>
      <img className={styles.categoryCardImg} src={image} alt="" />
      <h3>
        <Link to="/shop">{category}</Link>
      </h3>
    </div>
  );
};

ProductCategoryCard.propTypes = {
  product: PropTypes.array,
};

export default ProductCategoryCard;

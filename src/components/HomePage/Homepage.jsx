// import { useEffect, useState } from "react";
import styles from "./Homepage.module.css";
// import { Navbar } from "./Navbar/Navbar.jsx";
import PropTypes from "prop-types";
import ProductCategoryCard from "../ProductCategoryCard/ProductCategoryCard.jsx";
import { useOutletContext } from "react-router-dom";
import { Loader } from "../Loader/Loader.jsx";

const Homepage = () => {
  const {
    loading,
    jeweleryCategory,
    mensClothingCategory,
    womensClothingCategory,
  } = useOutletContext();
  return (
    <>
      <div className={styles.homePageContainer}>
        <div></div>
        <div className={styles.midSection}>
          <h1>Shop Our Products</h1>
          <div className={styles.productCategoriesContainer}>
            {loading ? (
              <Loader />
            ) : (
              <div className={styles.productCategories}>
                <ProductCategoryCard product={womensClothingCategory} />
                <ProductCategoryCard product={jeweleryCategory} />
                <ProductCategoryCard product={mensClothingCategory} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

Homepage.propTypes = {
  cart: PropTypes.array,
};

export default Homepage;

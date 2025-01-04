import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";

const App = () => {
  const [cart, setCart] = useState([]);

  const [jeweleryCategory, setjeweleryCategory] = useState(null);
  const [mensClothingCategory, setMensClothingCategory] = useState(null);
  const [womensClothingCategory, setWomensClothingCategory] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const dataFetch = async () => {
      let responses;

      try {
        responses = await Promise.all([
          fetch("https://fakestoreapi.com/products/category/jewelery?limit=1"),
          fetch(
            "https://fakestoreapi.com/products/category/men's%20clothing?limit=2"
          ),
          fetch(
            "https://fakestoreapi.com/products/category/women's%20clothing?limit=1"
          ),
          fetch("https://fakestoreapi.com/products"),
        ]);
      } catch (error) {
        setError(error);
        return;
      }

      const result = responses.map((r) => r.json());
      const [jeweleryResult, mensResult, womensResult, itemsResult] =
        await Promise.all(result);

      setjeweleryCategory(jeweleryResult);
      setMensClothingCategory(mensResult);
      setWomensClothingCategory(womensResult);
      setItems(itemsResult);

      setLoading(false);
    };

    dataFetch();
  }, []);

  return (
    <div>
      <Navbar cart={cart} />
      {error ? (
        <p>A network error was encountered: {error.message}</p>
      ) : (
        <Outlet
          context={{
            loading,
            jeweleryCategory,
            mensClothingCategory,
            womensClothingCategory,
            items,
            setCart,
            cart,
          }}
        />
      )}
    </div>
  );
};

export default App;

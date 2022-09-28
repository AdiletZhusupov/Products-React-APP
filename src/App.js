import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import MainPage from "./components/MainPage";
import Product from "./components/Product";
import "./styles.css";

export default function App() {
  const productsURL = "https://course-api.com/javascript-store-products";

  const [allItems, setAllItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});

  const callToAPI = async () => {
    try {
      const res = await axios.get(productsURL);
      setAllItems(res.data);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    callToAPI();
  }, []);
  const handleClick = async (id) => {
    const singleProductURL = `https://course-api.com/javascript-store-single-product?id=${id}`;
    setLoading(true);
    try {
      const res = await axios.get(singleProductURL);
      setProduct(res.data);
    } catch (err) {
      console.error(err.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };
  const handleBackHome = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            loading ? (
              <Loader />
            ) : (
              <MainPage allItems={allItems} handleClick={handleClick} />
            )
          }
        />
        <Route
          path="/product"
          element={
            loading ? (
              <Loader />
            ) : (
              <Product product={product} handleBackHome={handleBackHome} />
            )
          }
        />
      </Routes>
    </div>
  );
}

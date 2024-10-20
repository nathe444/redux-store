import { useEffect, useState } from "react";
import "./product.css";
import { useDispatch } from "react-redux";
import { add } from "../store/slices/cartSlice";
import { useSelector } from "react-redux";
import { getProducts } from "../store/slices/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const addToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="product-container">
      <h1>Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              className="product-image"
              src={product.image}
              alt={product.title}
            />
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <div className="product-price">${product.price}</div>
              <button
                className="product-button"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;

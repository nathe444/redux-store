import { useEffect } from "react";
import "./product.css";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/slices/cartSlice";
import { getProducts } from "../store/slices/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const {
    data: products,
    loading,
    error,
  } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const addToCart = (product) => {
    dispatch(add(product));
  };

  // Render loading, error, or product list
  if (loading) {
    return <div>Loading products...</div>; // Loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Error state
  }

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

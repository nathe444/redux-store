import { useSelector } from "react-redux";
import "./cart.css";
import { useDispatch } from "react-redux";
import { remove } from "../store/slices/cartSlice";

const Cart = () => {
  const carts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {carts.map((cart) => (
        <div className="cart-item" key={cart.id}>
          <img src={cart.image} alt={cart.title} />
          <div className="cart-item-details">
            <h3>{cart.title}</h3>
            <div className="price">${cart.price}</div>
            <button onClick={() => removeFromCart(cart.id)}>
              Remove from Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;

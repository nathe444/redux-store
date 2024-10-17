import { Outlet, Link } from "react-router-dom";
import "./RootLayout.css";
import { Provider } from "react-redux";
import store from "../store/Store";

const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <div className="root">
          <nav className="navbar">
            <h1 className="logo">My Store</h1>
            <ul className="nav-links">
              <li>
                <Link to="/">Products</Link>
              </li>
              <li>
                <Link to="/cart">Cart 0</Link>
              </li>
            </ul>
          </nav>
          <main>
            <Outlet />
          </main>
        </div>
      </Provider>
    </>
  );
};

export default RootLayout;

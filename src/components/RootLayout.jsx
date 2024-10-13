import { Outlet, Link } from "react-router-dom";
import "./RootLayout.css";

const RootLayout = () => {
  return (
    <div className="root">
      <nav className="navbar">
        <h1 className="logo">My Store</h1>
        <ul className="nav-links">
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;

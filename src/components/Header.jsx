import { Link, NavLink } from "react-router-dom";

function Logo() {
  return (
    <Link className="navbar-brand brand-logo" to="/">
      <span className="v">Vinayak</span>
      <small>ENTERPRISES</small>
    </Link>
  );
}

// keep the same look: NavLink adds the "active" class automatically
const linkClass = ({ isActive }) => "nav-link" + (isActive ? " active" : "");

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg site-nav py-2">
      <div className="container">
        <Logo />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink end className={linkClass} to="/">HOME</NavLink></li>
            <li className="nav-item"><NavLink className={linkClass} to="/about">ABOUT US</NavLink></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">PRODUCTS</a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/products">Skin Care</Link></li>
                <li><Link className="dropdown-item" to="/products">Hair Care</Link></li>
                <li><Link className="dropdown-item" to="/products">Body Care</Link></li>
                <li><Link className="dropdown-item" to="/products">Men's Care</Link></li>
                <li><Link className="dropdown-item" to="/products">Herbal Oils</Link></li>
                <li><Link className="dropdown-item" to="/products">Combos &amp; Kits</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">SERVICES</a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/services">Herbal Cosmetic Product</Link></li>
                <li><Link className="dropdown-item" to="/services">3rd Party Manufacturing</Link></li>
                <li><Link className="dropdown-item" to="/services">Door To Door Service</Link></li>
                <li><Link className="dropdown-item" to="/services">Deal In Quality Of Product</Link></li>
              </ul>
            </li>
            <li className="nav-item"><NavLink className={linkClass} to="/manufacturing">MANUFACTURING</NavLink></li>
            <li className="nav-item"><NavLink className={linkClass} to="/contact">CONTACT US</NavLink></li>
          </ul>

          <div className="nav-icons d-flex align-items-center gap-3">
            <i className="bi bi-search"></i>
            <i className="bi bi-person"></i>
            <span className="position-relative">
              <i className="bi bi-cart3"></i>
              <span className="cart-badge">0</span>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

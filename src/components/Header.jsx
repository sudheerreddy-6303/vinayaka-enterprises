function Logo() {
  return (
    <a className="navbar-brand brand-logo" href="#">
      <span className="v">Vinayak</span>
      <small>ENTERPRISES</small>
    </a>
  );
}

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
            <li className="nav-item"><a className="nav-link active" href="#">HOME</a></li>
            <li className="nav-item"><a className="nav-link" href="#">ABOUT US</a></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">PRODUCTS</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Skin Care</a></li>
                <li><a className="dropdown-item" href="#">Hair Care</a></li>
                <li><a className="dropdown-item" href="#">Body Care</a></li>
                <li><a className="dropdown-item" href="#">Men's Care</a></li>
                <li><a className="dropdown-item" href="#">Herbal Oils</a></li>
                <li><a className="dropdown-item" href="#">Combos &amp; Kits</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">SERVICES</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Herbal Cosmetic Product</a></li>
                <li><a className="dropdown-item" href="#">3rd Party Manufacturing</a></li>
                <li><a className="dropdown-item" href="#">Door To Door Service</a></li>
                <li><a className="dropdown-item" href="#">Deal In Quality Of Product</a></li>
              </ul>
            </li>
            <li className="nav-item"><a className="nav-link" href="#">MANUFACTURING</a></li>
            <li className="nav-item"><a className="nav-link" href="#">CONTACT US</a></li>
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

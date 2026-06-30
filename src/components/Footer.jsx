import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer pt-5">
      <div className="container">
        <div className="row g-4">
          {/* Brand */}
          <div className="col-lg-3 col-md-6">
            <div className="brand-logo mb-2">
              <span className="v">Vinayak</span>
              <small>ENTERPRISES</small>
            </div>
            <p style={{ fontSize: ".82rem", color: "rgba(255,255,255,.85)" }}>
              Deal In Your Trust And Save Your Money For Your Future
            </p>
            <div className="f-social">
              <a href="#" aria-label="Telegram"><i className="bi bi-telegram"></i></a>
              <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" aria-label="X"><i className="bi bi-twitter-x"></i></a>
            </div>
          </div>

          {/* Quick links */}
          <div className="col-lg-2 col-md-6">
            <h6>QUICK LINKS</h6>
            <ul className="list-unstyled f-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/manufacturing">Manufacturing</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6">
            <h6>OUR SERVICES</h6>
            <ul className="list-unstyled f-list">
              <li><a href="#">Herbal Cosmetic Product</a></li>
              <li><a href="#">3rd Party Manufacturing</a></li>
              <li><a href="#">Door To Door Service</a></li>
              <li><a href="#">Deal In Quality Of Product</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-2 col-md-6">
            <h6>CONTACT US</h6>
            <ul className="list-unstyled f-contact">
              <li><i className="bi bi-telephone-fill"></i> 9211794273</li>
              <li><i className="bi bi-telephone-fill"></i> 8260153133</li>
              <li><i className="bi bi-whatsapp"></i> 9211794273</li>
              <li><i className="bi bi-envelope-fill"></i> vinayakcosmetic2001@gmail.com</li>
              <li><i className="bi bi-envelope-fill"></i> vinayak1group@gmail.com</li>
              <li><i className="bi bi-geo-alt-fill"></i> Delhi, India</li>
            </ul>
          </div>

          {/* Follow us */}
          <div className="col-lg-2 col-md-6">
            <h6>FOLLOW US</h6>
            <ul className="list-unstyled f-contact">
              <li><i className="bi bi-telegram"></i><span>Telegram Channel<br /><small>t.me/Vinayak1_Enterprises</small></span></li>
              <li><i className="bi bi-instagram"></i><span>Instagram<br /><small>@vinayak1_enterprises</small></span></li>
              <li><i className="bi bi-facebook"></i><span>Facebook Page<br /><small>/Vinayak1Products</small></span></li>
              <li><i className="bi bi-facebook"></i><span>Facebook ID<br /><small>/615809803​46863</small></span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom mt-4 py-3">
        <div className="container d-flex flex-wrap justify-content-between gap-2">
          <span>© 2025 Vinayak Enterprises. All Rights Reserved.</span>
          <span>
            <a href="#">Privacy Policy</a> &nbsp;|&nbsp; <a href="#">Terms &amp; Conditions</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { items, setQty, removeItem, clearCart, count, total } = useCart();
  const [ordered, setOrdered] = useState(false);

  const money = (n) => "₹" + n.toFixed(2);

  if (ordered) {
    return (
      <>
        <PageBanner title="Cart" crumb="Cart" />
        <section className="py-5">
          <div className="container text-center py-5">
            <i className="bi bi-check-circle-fill text-brand" style={{ fontSize: "3rem" }}></i>
            <h3 className="fw-bold mt-3">Order placed successfully!</h3>
            <p className="text-muted">Thank you for shopping with Vinayak Enterprises. We'll be in touch soon.</p>
            <Link to="/products" className="btn btn-brand mt-2">CONTINUE SHOPPING</Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageBanner title="My Cart" crumb="Cart" />
      <section className="py-5">
        <div className="container">
          {items.length === 0 ? (
            <div className="text-center py-5">
              <i className="bi bi-cart3 text-muted" style={{ fontSize: "3rem" }}></i>
              <h4 className="fw-bold mt-3">Your cart is empty</h4>
              <p className="text-muted">Browse our herbal products and add your favourites.</p>
              <Link to="/products" className="btn btn-brand mt-2">SHOP PRODUCTS</Link>
            </div>
          ) : (
            <div className="row g-4">
              {/* Items */}
              <div className="col-lg-8">
                {items.map((it) => (
                  <div className="cart-row" key={it.name}>
                    <div className="cart-thumb">
                      {it.img ? <img src={`/images/${it.img}`} alt={it.name} /> : <i className="bi bi-image text-muted"></i>}
                    </div>
                    <div className="cart-info">
                      <h6 className="mb-1">{it.name}</h6>
                      <div className="price">{money(it.priceValue)}</div>
                    </div>
                    <div className="cart-qty">
                      <button onClick={() => setQty(it.name, it.qty - 1)} aria-label="Decrease">−</button>
                      <span>{it.qty}</span>
                      <button onClick={() => setQty(it.name, it.qty + 1)} aria-label="Increase">+</button>
                    </div>
                    <div className="cart-line fw-bold">{money(it.priceValue * it.qty)}</div>
                    <button className="cart-remove" onClick={() => removeItem(it.name)} aria-label="Remove">
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                ))}
                <button className="btn btn-outline-brand btn-sm mt-2" onClick={clearCart}>CLEAR CART</button>
              </div>

              {/* Summary */}
              <div className="col-lg-4">
                <div className="cart-summary">
                  <h5 className="fw-bold mb-3">Order Summary</h5>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Items</span><span>{count}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Subtotal</span><span>{money(total)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Delivery</span><span className="text-brand">Free</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between mb-3">
                    <span className="fw-bold">Total</span><span className="fw-bold text-brand">{money(total)}</span>
                  </div>
                  <button className="btn btn-brand w-100" onClick={() => setOrdered(true)}>PLACE ORDER</button>
                  <Link to="/products" className="btn btn-outline-brand w-100 mt-2">CONTINUE SHOPPING</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

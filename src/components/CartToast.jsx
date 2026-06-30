import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartToast() {
  const { notice, count } = useCart();
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (!notice) return;
    setText(notice.text);
    setShow(true);
    const t = setTimeout(() => setShow(false), 2500);
    return () => clearTimeout(t);
  }, [notice]);

  return (
    <div className={"cart-toast" + (show ? " show" : "")} role="status" aria-live="polite">
      <i className="bi bi-check-circle-fill ct-icon"></i>
      <div className="ct-body">
        <strong>{text}</strong>
        <Link to="/cart" className="ct-link" onClick={() => setShow(false)}>
          View cart ({count})
        </Link>
      </div>
      <button className="ct-close" onClick={() => setShow(false)} aria-label="Close">
        &times;
      </button>
    </div>
  );
}

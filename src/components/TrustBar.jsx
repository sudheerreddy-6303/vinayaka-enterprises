const items = [
  { icon: "bi-shield-check", title: "HERBAL & SAFE", sub: "100% Natural Ingredients\nfor healthy skin" },
  { icon: "bi-gem", title: "PREMIUM QUALITY", sub: "Best quality products\nfor best results" },
  { icon: "bi-clock-history", title: "3 YEARS EXPERIENCE", sub: "Trusted experience\nin cosmetic industry" },
  { icon: "bi-tag", title: "AFFORDABLE PRICE", sub: "Best quality at\nreasonable price" },
  { icon: "bi-truck", title: "DOOR TO DOOR SERVICE", sub: "Fast & safe delivery\nat your door step" },
  { icon: "bi-emoji-smile", title: "CUSTOMER SATISFACTION", sub: "Your trust is\nour success" },
];

export default function TrustBar() {
  return (
    <div className="container">
      <div className="trust-bar">
        <div className="row g-0">
          {items.map((it, i) => (
            <div
              className={`col-6 col-md-4 col-lg-2 ${i !== items.length - 1 ? "trust-divider" : ""}`}
              key={it.title}
            >
              <div className="trust-item">
                <i className={`bi ${it.icon} ic`}></i>
                <div>
                  <h6>{it.title}</h6>
                  <p>{it.sub.split("\n").map((t, k) => <span key={k}>{t}<br /></span>)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const miniFeatures = [
  { icon: "bi-flower1", label: "100% Natural\nIngredients" },
  { icon: "bi-award", label: "Quality\nProducts" },
  { icon: "bi-people", label: "Trusted By\nThousands" },
  { icon: "bi-emoji-smile", label: "Customer\nSatisfaction" },
];

export default function Hero() {
  return (
    <section className="hero pt-5 pb-5">
      <div className="container">
        <div className="row align-items-center g-4">
          {/* Left copy */}
          <div className="col-lg-6">
            <p className="eyebrow mb-2">Natural Ingredients</p>
            <h1 className="mb-3">
              HERBAL COSMETIC
              <span className="red">PRODUCTS</span>
            </h1>
            <p className="lead-txt mb-4">
              We provide high quality herbal cosmetic products for healthy,
              glowing and beautiful you.
            </p>

            <div className="row row-cols-4 g-2 mb-4">
              {miniFeatures.map((f) => (
                <div className="col" key={f.label}>
                  <div className="mini-feature">
                    <div className="ic"><i className={`bi ${f.icon}`}></i></div>
                    <span>{f.label.split("\n").map((t, i) => <span key={i}>{t}<br /></span>)}</span>
                  </div>
                </div>
              ))}
            </div>

            <a href="#" className="btn btn-brand">
              SHOP NOW <i className="bi bi-arrow-right ms-2"></i>
            </a>
          </div>

          {/* Right product image */}
          <div className="col-lg-6">
            <div className="hero-img-wrap">
              <img src="/images/hero-products.jpg" alt="Herbal cosmetic products" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

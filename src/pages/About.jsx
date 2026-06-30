import PageBanner from "../components/PageBanner";

const points = [
  { icon: "bi-flower1", title: "100% Natural Ingredients", text: "Every product is crafted from carefully sourced herbs and natural extracts." },
  { icon: "bi-gem", title: "Premium Quality", text: "Strict quality checks at every stage ensure consistently great results." },
  { icon: "bi-truck", title: "Door To Door Service", text: "Fast and safe delivery that brings our products right to your doorstep." },
  { icon: "bi-emoji-smile", title: "Customer Satisfaction", text: "Thousands of happy customers trust us for their everyday herbal care." },
];

export default function About() {
  return (
    <>
      <PageBanner title="About Us" />

      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <img src="/images/hero-products.jpg" alt="Vinayak herbal products" className="img-fluid rounded shadow-sm" />
            </div>
            <div className="col-lg-6">
              <p className="eyebrow text-brand fw-bold mb-2" style={{ letterSpacing: "3px" }}>WHO WE ARE</p>
              <h2 className="fw-bold mb-3">Trusted Herbal Cosmetic Products</h2>
              <p className="text-muted">
                Vinayak Enterprises is a Delhi-based herbal cosmetic company dedicated to
                bringing you high quality, natural products for healthy, glowing and beautiful skin.
                We combine traditional herbal wisdom with modern manufacturing to deliver products
                you can truly trust.
              </p>
              <p className="text-muted">
                From skin care and hair care to body care and herbal oils, every product is made
                with 100% natural ingredients and crafted to suit the needs of the whole family.
                We also offer professional 3rd party manufacturing under your own brand name.
              </p>

              <div className="row text-center mt-4">
                <div className="col-4 band-stat">
                  <div className="num">3+</div><small>Years Experience</small>
                </div>
                <div className="col-4 band-stat">
                  <div className="num">100%</div><small>Quality Products</small>
                </div>
                <div className="col-4 band-stat">
                  <div className="num">1000+</div><small>Happy Customers</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="section-title"><h2>WHY CHOOSE US</h2></div>
          <div className="title-deco">&#10070; &#10070; &#10070;</div>
          <div className="row g-4">
            {points.map((p) => (
              <div className="col-md-6 col-lg-3" key={p.title}>
                <div className="cat-card h-100">
                  <div className="mini-feature mb-2">
                    <div className="ic" style={{ width: 56, height: 56, fontSize: "1.5rem" }}>
                      <i className={`bi ${p.icon}`}></i>
                    </div>
                  </div>
                  <h5>{p.title}</h5>
                  <p className="mb-0">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

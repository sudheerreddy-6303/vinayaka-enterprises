export default function MidBand() {
  return (
    <section className="band">
      <div className="container-fluid p-0">
        <div className="row g-0">
          {/* 3rd party manufacturing */}
          <div
            className="col-lg-4 band-card band-img position-relative"
            style={{ backgroundImage: "url('/images/band-manufacturing.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="p-4 w-100 band-overlay">
              <h4 className="mb-2">3RD PARTY<br />MANUFACTURING</h4>
              <p className="mb-3">We offer professional 3rd Party Manufacturing services with your brand name.</p>
              <a href="#" className="btn btn-outline-brand">KNOW MORE</a>
            </div>
          </div>

          {/* Center - deal in trust */}
          <div className="col-lg-4 band-center">
            <div className="p-4 h-100 d-flex flex-column justify-content-center">
              <div className="d-flex align-items-start gap-3 mb-3">
                <span className="brand-logo"><span className="v">V</span></span>
                <div>
                  <h4 className="mb-2">DEAL IN YOUR TRUST AND SAVE YOUR MONEY FOR YOUR FUTURE</h4>
                  <p className="mb-0">We are committed to provide the best herbal cosmetic products with quality you can trust.</p>
                </div>
              </div>
              <div className="row text-center mt-2">
                <div className="col-4 band-stat">
                  <i className="bi bi-clock-history ic d-block mb-1"></i>
                  <div className="num">3+</div>
                  <small>Years Experience</small>
                </div>
                <div className="col-4 band-stat">
                  <i className="bi bi-patch-check ic d-block mb-1"></i>
                  <div className="num">100%</div>
                  <small>Quality Products</small>
                </div>
                <div className="col-4 band-stat">
                  <i className="bi bi-people ic d-block mb-1"></i>
                  <div className="num">1000+</div>
                  <small>Happy Customers</small>
                </div>
              </div>
            </div>
          </div>

          {/* Door to door */}
          <div
            className="col-lg-4 band-card band-img position-relative"
            style={{ backgroundImage: "url('/images/band-delivery.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="p-4 w-100 band-overlay">
              <h4 className="mb-2">DOOR TO DOOR<br />SERVICE</h4>
              <p className="mb-3">We deliver happiness to your door.</p>
              <a href="#" className="btn btn-outline-brand">KNOW MORE</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

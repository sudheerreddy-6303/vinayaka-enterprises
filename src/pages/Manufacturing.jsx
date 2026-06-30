import PageBanner from "../components/PageBanner";

export default function Manufacturing() {
  return (
    <>
      <PageBanner title="Manufacturing" crumb="Manufacturing" />
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <img src="/images/band-manufacturing.jpg" alt="3rd party manufacturing" className="img-fluid rounded shadow-sm" />
            </div>
            <div className="col-lg-6">
              <p className="eyebrow text-brand fw-bold mb-2" style={{ letterSpacing: "3px" }}>3RD PARTY MANUFACTURING</p>
              <h2 className="fw-bold mb-3">Build Your Own Herbal Brand</h2>
              <p className="text-muted">
                We offer professional 3rd party manufacturing services with your brand name.
                With over 3 years of experience in the cosmetic industry, we help you launch
                high quality herbal products without the overhead of running your own factory.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2"><i className="bi bi-check-circle-fill text-brand me-2"></i>100% natural herbal formulations</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-brand me-2"></i>Custom branding and packaging</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-brand me-2"></i>Strict quality control at every stage</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-brand me-2"></i>Affordable pricing and reliable supply</li>
              </ul>
              <a href="#" className="btn btn-brand mt-2">GET IN TOUCH</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

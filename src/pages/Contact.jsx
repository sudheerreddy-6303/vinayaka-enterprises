import { useState } from "react";
import PageBanner from "../components/PageBanner";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageBanner title="Contact Us" crumb="Contact" />
      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            {/* Details */}
            <div className="col-lg-5">
              <h3 className="fw-bold mb-3">Get In Touch</h3>
              <p className="text-muted mb-4">
                Have a question about our herbal products or 3rd party manufacturing?
                Reach out to us, we're happy to help.
              </p>
              <ul className="list-unstyled f-contact-page">
                <li className="d-flex gap-3 mb-3">
                  <i className="bi bi-telephone-fill text-brand fs-5"></i>
                  <span>9211794273<br />8260153133</span>
                </li>
                <li className="d-flex gap-3 mb-3">
                  <i className="bi bi-whatsapp text-brand fs-5"></i>
                  <span>9211794273</span>
                </li>
                <li className="d-flex gap-3 mb-3">
                  <i className="bi bi-envelope-fill text-brand fs-5"></i>
                  <span>vinayakcosmetic2001@gmail.com<br />vinayak1group@gmail.com</span>
                </li>
                <li className="d-flex gap-3 mb-3">
                  <i className="bi bi-geo-alt-fill text-brand fs-5"></i>
                  <span>Delhi, India</span>
                </li>
              </ul>
            </div>

            {/* Form */}
            <div className="col-lg-7">
              <div className="cat-card p-4">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold">Name</label>
                    <input type="text" className="form-control" placeholder="Your name" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold">Phone</label>
                    <input type="tel" className="form-control" placeholder="Your phone" />
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-semibold">Email</label>
                    <input type="email" className="form-control" placeholder="Your email" />
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-semibold">Message</label>
                    <textarea className="form-control" rows="4" placeholder="How can we help?"></textarea>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-brand" onClick={() => setSent(true)}>SEND MESSAGE</button>
                    {sent && (
                      <span className="ms-3 text-brand small">
                        <i className="bi bi-check-circle-fill me-1"></i>Thanks! We'll get back to you soon.
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

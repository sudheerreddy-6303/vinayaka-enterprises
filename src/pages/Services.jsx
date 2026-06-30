import PageBanner from "../components/PageBanner";

const services = [
  { icon: "bi-flower2", title: "Herbal Cosmetic Product", text: "A complete range of herbal skin, hair and body care products made from 100% natural ingredients." },
  { icon: "bi-building", title: "3rd Party Manufacturing", text: "We manufacture premium herbal cosmetics under your own brand name with full quality assurance." },
  { icon: "bi-truck", title: "Door To Door Service", text: "Fast and safe delivery that brings our herbal products right to your doorstep." },
  { icon: "bi-patch-check", title: "Deal In Quality Of Product", text: "Every product passes strict quality checks so you always receive the very best." },
];

export default function Services() {
  return (
    <>
      <PageBanner title="Our Services" crumb="Services" />
      <section className="py-5">
        <div className="container">
          <div className="section-title"><h2>WHAT WE OFFER</h2></div>
          <div className="title-deco">&#10070; &#10070; &#10070;</div>
          <div className="row g-4">
            {services.map((s) => (
              <div className="col-md-6 col-lg-3" key={s.title}>
                <div className="cat-card h-100">
                  <div className="mini-feature mb-2">
                    <div className="ic" style={{ width: 56, height: 56, fontSize: "1.5rem" }}>
                      <i className={`bi ${s.icon}`}></i>
                    </div>
                  </div>
                  <h5>{s.title}</h5>
                  <p className="mb-0">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { useRef } from "react";

const products = [
  { name: "Herbal Face Wash", price: "₹299.00", img: "prod-facewash.jpg" },
  { name: "Herbal Shampoo", price: "₹349.00", img: "prod-shampoo.jpg" },
  { name: "Herbal Cream", price: "₹399.00", img: "prod-cream.jpg" },
  { name: "Herbal Hair Oil", price: "₹449.00", img: "prod-hairoil.jpg" },
  { name: "Herbal Face Serum", price: "₹499.00", img: "prod-serum.jpg" },
  { name: "Herbal Body Lotion", price: "₹399.00", img: "prod-bodylotion.jpg" },
  { name: "Herbal Men's Care Kit", price: "₹599.00", img: "cat-menscare.jpg" },
  { name: "Herbal Combo Kit", price: "₹999.00", img: "cat-combos.jpg" },
  { name: "Herbal Conditioner", price: "₹329.00", img: "prod-shampoo.jpg" },
  { name: "Herbal Face Scrub", price: "₹279.00", img: "prod-cream.jpg" },
  { name: "Herbal Sunscreen Lotion", price: "₹499.00", img: "prod-bodylotion.jpg" },
  { name: "Herbal Hair Serum", price: "₹399.00", img: "prod-hairoil.jpg" },
];

export default function FeaturedProducts() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: dir * 260, behavior: "smooth" });
    }
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="section-title"><h2>FEATURED PRODUCTS</h2></div>
        <div className="title-deco">&#10070; &#10070; &#10070;</div>

        <div className="d-flex align-items-center gap-2">
          <button className="car-arrow d-none d-md-flex" onClick={() => scroll(-1)} aria-label="Previous">
            <i className="bi bi-chevron-left"></i>
          </button>

          <div className="prod-track d-flex gap-3 flex-grow-1" ref={trackRef}>
            {products.map((p) => (
              <div key={p.name} style={{ flex: "0 0 auto", width: "200px" }}>
                <div className="prod-card">
                  {/* Swap for a real photo: <img src="/images/your-photo.jpg" ... /> */}
                  <div className="prod-img"><img src={`/images/${p.img}`} alt={p.name} /></div>
                  <h6>{p.name}</h6>
                  <div className="price">{p.price}</div>
                  <a href="#" className="btn btn-brand-sm w-100">ADD TO CART</a>
                </div>
              </div>
            ))}
          </div>

          <button className="car-arrow d-none d-md-flex" onClick={() => scroll(1)} aria-label="Next">
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>

        <div className="text-center mt-4">
          <a href="#" className="btn btn-outline-brand">VIEW ALL PRODUCTS</a>
        </div>
      </div>
    </section>
  );
}

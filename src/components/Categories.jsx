const categories = [
  { name: "SKIN CARE", desc: "Face Wash, Cream, Serum & More", img: "cat-skincare.jpg" },
  { name: "HAIR CARE", desc: "Shampoo, Hair Oil, Conditioner & More", img: "cat-haircare.jpg" },
  { name: "BODY CARE", desc: "Body Lotion, Wash, Scrub & More", img: "cat-bodycare.jpg" },
  { name: "MEN'S CARE", desc: "Face Wash, Cream, Beard Oil & More", img: "cat-menscare.jpg" },
  { name: "HERBAL OILS", desc: "Essential Oils for Skin & Hair", img: "cat-herbaloils.jpg" },
  { name: "COMBOS & KITS", desc: "Special Combo Offers", img: "cat-combos.jpg" },
];

export default function Categories() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="section-title"><h2>SHOP BY CATEGORIES</h2></div>
        <div className="title-deco">&#10070; &#10070; &#10070;</div>

        <div className="row g-3 g-md-4">
          {categories.map((c) => (
            <div className="col-6 col-md-4 col-lg-2" key={c.name}>
              <div className="cat-card">
                {/* Swap for a real photo: <img src="/images/your-photo.jpg" ... /> */}
                <div className="cat-img"><img src={`/images/${c.img}`} alt={c.name} /></div>
                <h5>{c.name}</h5>
                <p>{c.desc}</p>
                <a href="#" className="btn btn-brand-sm">SHOP NOW</a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <a href="#" className="btn btn-outline-brand">VIEW ALL PRODUCTS</a>
        </div>
      </div>
    </section>
  );
}

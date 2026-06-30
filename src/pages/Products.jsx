import PageBanner from "../components/PageBanner";

const categories = [
  { name: "SKIN CARE", desc: "Face Wash, Cream, Serum & More", img: "cat-skincare.jpg" },
  { name: "HAIR CARE", desc: "Shampoo, Hair Oil, Conditioner & More", img: "cat-haircare.jpg" },
  { name: "BODY CARE", desc: "Body Lotion, Wash, Scrub & More", img: "cat-bodycare.jpg" },
  { name: "MEN'S CARE", desc: "Face Wash, Cream, Beard Oil & More", img: "cat-menscare.jpg" },
  { name: "HERBAL OILS", desc: "Essential Oils for Skin & Hair", img: "cat-herbaloils.jpg" },
  { name: "COMBOS & KITS", desc: "Special Combo Offers", img: "cat-combos.jpg" },
];

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

export default function Products() {
  return (
    <>
      <PageBanner title="Our Products" crumb="Products" />

      {/* Shop by categories */}
      <section className="py-5">
        <div className="container">
          <div className="section-title"><h2>SHOP BY CATEGORIES</h2></div>
          <div className="title-deco">&#10070; &#10070; &#10070;</div>
          <div className="row g-3 g-md-4">
            {categories.map((c) => (
              <div className="col-6 col-md-4 col-lg-2" key={c.name}>
                <div className="cat-card">
                  <div className="cat-img"><img src={`/images/${c.img}`} alt={c.name} /></div>
                  <h5>{c.name}</h5>
                  <p>{c.desc}</p>
                  <a href="#" className="btn btn-brand-sm">SHOP NOW</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All products grid */}
      <section className="pb-5" style={{ background: "var(--cream)", paddingTop: "3rem" }}>
        <div className="container">
          <div className="section-title"><h2>ALL PRODUCTS</h2></div>
          <div className="title-deco">&#10070; &#10070; &#10070;</div>
          <div className="row g-3 g-md-4">
            {products.map((p) => (
              <div className="col-6 col-md-4 col-lg-3" key={p.name}>
                <div className="prod-card h-100">
                  <div className="prod-img"><img src={`/images/${p.img}`} alt={p.name} /></div>
                  <h6>{p.name}</h6>
                  <div className="price">{p.price}</div>
                  <a href="#" className="btn btn-brand-sm w-100">ADD TO CART</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

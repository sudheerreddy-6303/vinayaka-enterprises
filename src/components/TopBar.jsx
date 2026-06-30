export default function TopBar() {
  return (
    <div className="topbar py-2">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
          <div className="d-flex flex-wrap align-items-center gap-3">
            <a href="tel:9211794273" className="tb-item"><i className="bi bi-telephone-fill"></i> 9211794273</a>
            <a href="https://wa.me/918260153133" className="tb-item"><i className="bi bi-whatsapp"></i> 8260153133</a>
            <a href="mailto:vinayakcosmetic2001@gmail.com" className="tb-item d-none d-md-inline-flex"><i className="bi bi-envelope-fill"></i> vinayakcosmetic2001@gmail.com</a>
            <a href="mailto:vinayak1group@gmail.com" className="tb-item d-none d-lg-inline-flex"><i className="bi bi-envelope-fill"></i> vinayak1group@gmail.com</a>
            <span className="tb-item d-none d-md-inline-flex"><i className="bi bi-geo-alt-fill"></i> Delhi, India</span>
          </div>
          <div className="tb-social d-flex align-items-center gap-2">
            <a href="#" aria-label="Telegram"><i className="bi bi-telegram"></i></a>
            <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

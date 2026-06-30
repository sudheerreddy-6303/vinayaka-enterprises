export default function PageBanner({ title, crumb }) {
  return (
    <div className="page-banner">
      <div className="container">
        <h1>{title}</h1>
        <p className="mb-0">
          <span>Home</span> <i className="bi bi-chevron-right mx-1"></i> {crumb || title}
        </p>
      </div>
    </div>
  );
}

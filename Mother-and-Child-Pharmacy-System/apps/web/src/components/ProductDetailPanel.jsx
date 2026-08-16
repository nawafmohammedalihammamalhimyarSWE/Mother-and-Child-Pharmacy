export default function ProductDetailPanel({ details }) {
  return (
    <section className="panel">
      <div className="table-header">
        <h2>Product detail</h2>
        <span className="pill">Stock review</span>
      </div>

      <div className="list-stack">
        {details.map((item) => (
          <div key={item.id} className="list-row">
            <div>
              <strong>{item.name}</strong>
              <span>{item.batch} • {item.expiry}</span>
            </div>
            <div className="align-right">
              <span>{item.location}</span>
              <strong>{item.qty} units</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

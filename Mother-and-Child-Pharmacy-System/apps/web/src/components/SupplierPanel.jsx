export default function SupplierPanel({ suppliers }) {
  return (
    <section className="panel">
      <div className="table-header">
        <h2>Suppliers</h2>
        <button className="secondary-btn">Add supplier</button>
      </div>

      <div className="list-stack">
        {suppliers.map((supplier) => (
          <div key={supplier.id} className="list-row">
            <div>
              <strong>{supplier.name}</strong>
              <span>{supplier.contact}</span>
            </div>
            <div className="align-right">
              <span>{supplier.country}</span>
              <strong>{supplier.status}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

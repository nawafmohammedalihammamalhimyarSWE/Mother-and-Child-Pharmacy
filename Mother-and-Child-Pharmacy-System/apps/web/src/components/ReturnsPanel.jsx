export default function ReturnsPanel({ returns }) {
  return (
    <section className="panel">
      <div className="table-header">
        <h2>Returns and reversals</h2>
        <span className="pill">Audit trail</span>
      </div>

      <div className="list-stack">
        {returns.map((item) => (
          <div key={item.id} className="list-row">
            <div>
              <strong>{item.product}</strong>
              <span>{item.reason}</span>
            </div>
            <div className="align-right">
              <span>{item.qty} pcs</span>
              <strong>SAR {item.amount}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function PosPanel({ sales }) {
  return (
    <section className="panel">
      <div className="table-header">
        <h2>Point of sale</h2>
        <button className="primary-btn small">Quick sale</button>
      </div>

      <div className="pos-list">
        {sales.map((item) => (
          <div key={item.id} className="pos-row">
            <div>
              <strong>{item.name}</strong>
              <span>{item.qty} qty</span>
            </div>
            <strong>SAR {item.amount}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

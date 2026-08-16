export default function ReturnRefundPanel({ returns }) {
  return (
    <section className="panel">
      <div className="table-header">
        <h2>Return & refund</h2>
        <span className="pill">Customer care</span>
      </div>

      <div className="list-stack">
        {returns.map((item) => (
          <div key={item.id} className="list-row">
            <div>
              <strong>{item.customer}</strong>
              <span>{item.product}</span>
            </div>
            <div className="align-right">
              <span>{item.reason}</span>
              <strong>SAR {item.amount}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

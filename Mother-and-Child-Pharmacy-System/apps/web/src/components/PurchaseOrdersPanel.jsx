export default function PurchaseOrdersPanel({ orders }) {
  return (
    <section className="panel">
      <div className="table-header">
        <h2>Purchase orders</h2>
        <button className="secondary-btn">New order</button>
      </div>

      <div className="list-stack">
        {orders.map((order) => (
          <div key={order.id} className="list-row">
            <div>
              <strong>{order.supplier}</strong>
              <span>{order.items} items</span>
            </div>
            <div className="align-right">
              <span className={`status-badge ${order.status.toLowerCase()}`}>{order.status}</span>
              <strong>SAR {order.total}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

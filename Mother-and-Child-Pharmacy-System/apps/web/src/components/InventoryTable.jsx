export default function InventoryTable({ items }) {
  return (
    <div className="panel table-panel">
      <div className="table-header">
        <h2>Inventory by batch</h2>
        <span className="pill">FEFO active</span>
      </div>

      <table>
        <thead>
          <tr>
            <th>SKU</th>
            <th>Batch</th>
            <th>Expiry</th>
            <th>Qty</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={`${item.sku}-${item.batch}`}>
              <td>{item.sku}</td>
              <td>{item.batch}</td>
              <td>{item.expiry}</td>
              <td>{item.quantity}</td>
              <td>
                <span className={`status-badge ${item.status.toLowerCase()}`}>{item.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

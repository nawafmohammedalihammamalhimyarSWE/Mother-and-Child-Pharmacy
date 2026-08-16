export default function BatchManagementPanel({ batches }) {
  return (
    <section className="panel">
      <div className="table-header">
        <h2>Batch and FEFO management</h2>
        <span className="pill">Strict allocation</span>
      </div>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Batch</th>
            <th>Expiry</th>
            <th>Available</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {batches.map((batch) => (
            <tr key={`${batch.product}-${batch.batch}`}>
              <td>{batch.product}</td>
              <td>{batch.batch}</td>
              <td>{batch.expiry}</td>
              <td>{batch.quantity}</td>
              <td>
                <span className={`status-badge ${batch.priority === 'FEFO' ? 'healthy' : 'warning'}`}>
                  {batch.priority}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

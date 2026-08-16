export default function ShiftCashPanel({ entries }) {
  return (
    <section className="panel">
      <div className="table-header">
        <h2>Shift and cash</h2>
        <span className="pill">Daily close</span>
      </div>

      <div className="list-stack">
        {entries.map((entry) => (
          <div key={entry.id} className="list-row">
            <div>
              <strong>{entry.label}</strong>
              <span>{entry.type}</span>
            </div>
            <div className="align-right">
              <strong>SAR {entry.amount}</strong>
              <span>{entry.time}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

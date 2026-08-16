export default function AuditLogPanel({ entries }) {
  return (
    <section className="panel">
      <div className="table-header">
        <h2>Audit log</h2>
        <button className="secondary-btn">Export</button>
      </div>

      <div className="audit-list">
        {entries.map((entry) => (
          <div key={entry.id} className="audit-row">
            <div>
              <strong>{entry.action}</strong>
              <span>{entry.actor}</span>
            </div>
            <span>{entry.time}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

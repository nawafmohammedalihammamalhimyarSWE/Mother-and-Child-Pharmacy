export default function ReportsPanel({ reports }) {
  return (
    <section className="panel">
      <div className="table-header">
        <h2>Operational reports</h2>
        <button className="secondary-btn">Generate</button>
      </div>

      <div className="list-stack">
        {reports.map((report) => (
          <div key={report.id} className="list-row">
            <div>
              <strong>{report.title}</strong>
              <span>{report.range}</span>
            </div>
            <div className="align-right">
              <strong>{report.value}</strong>
              <span>{report.status}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

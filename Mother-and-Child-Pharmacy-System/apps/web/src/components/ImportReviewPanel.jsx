export default function ImportReviewPanel({ imports }) {
  return (
    <section className="panel">
      <div className="table-header">
        <h2>Import review</h2>
        <span className="pill">Human approval</span>
      </div>

      <div className="list-stack">
        {imports.map((row) => (
          <div key={row.id} className="list-row">
            <div>
              <strong>{row.file}</strong>
              <span>{row.source}</span>
            </div>
            <div className="align-right">
              <span>{row.rows} rows</span>
              <strong>{row.status}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

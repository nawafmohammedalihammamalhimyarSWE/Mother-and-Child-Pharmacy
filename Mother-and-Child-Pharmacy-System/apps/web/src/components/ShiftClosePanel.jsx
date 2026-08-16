export default function ShiftClosePanel({ summary }) {
  return (
    <section className="panel">
      <div className="table-header">
        <h2>Shift closing</h2>
        <span className="pill">Cash count</span>
      </div>

      <div className="list-stack">
        <div className="list-row">
          <div>
            <strong>Opening cash</strong>
            <span>{summary.openingDate}</span>
          </div>
          <strong>SAR {summary.openingCash}</strong>
        </div>

        <div className="list-row">
          <div>
            <strong>Net sales</strong>
            <span>Cash + card + split</span>
          </div>
          <strong>SAR {summary.netSales}</strong>
        </div>

        <div className="list-row">
          <div>
            <strong>Expected drawer</strong>
            <span>After refunds</span>
          </div>
          <strong>SAR {summary.drawer}</strong>
        </div>
      </div>
    </section>
  );
}

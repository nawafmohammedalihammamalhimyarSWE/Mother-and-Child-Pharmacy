export default function PrescriptionPanel({ prescriptions }) {
  return (
    <section className="panel">
      <div className="table-header">
        <h2>Prescription and patient</h2>
        <span className="pill">Clinical safety</span>
      </div>

      <div className="list-stack">
        {prescriptions.map((item) => (
          <div key={item.id} className="list-row">
            <div>
              <strong>{item.patient}</strong>
              <span>{item.medication}</span>
            </div>
            <div className="align-right">
              <span>{item.status}</span>
              <strong>{item.qty} pcs</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

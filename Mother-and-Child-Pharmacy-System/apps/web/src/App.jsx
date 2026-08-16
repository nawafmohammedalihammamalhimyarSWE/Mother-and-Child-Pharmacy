const stats = [
  { label: 'Total products', value: '1,284' },
  { label: 'Low stock', value: '18' },
  { label: 'Today's sales', value: 'SAR 12,450' },
  { label: 'Active batches', value: '96' },
];

const tasks = [
  'Review expiry alerts',
  'Approve purchase orders',
  'Verify returns and damaged items',
  'Close shift cash reconciliation',
];

export default function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">Mother & Child</div>
        <nav>
          <a className="nav-item active" href="#">Dashboard</a>
          <a className="nav-item" href="#">Catalog</a>
          <a className="nav-item" href="#">Purchases</a>
          <a className="nav-item" href="#">Inventory</a>
          <a className="nav-item" href="#">POS</a>
          <a className="nav-item" href="#">Reports</a>
        </nav>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">Pharmacy operations</p>
            <h1>Operations dashboard</h1>
          </div>
          <button className="primary-btn">New sale</button>
        </header>

        <section className="stats-grid">
          {stats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </article>
          ))}
        </section>

        <section className="content-grid">
          <article className="panel">
            <h2>Priority actions</h2>
            <ul className="task-list">
              {tasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </article>

          <article className="panel">
            <h2>Batch risk watch</h2>
            <div className="risk-row">
              <span>Expiring this week</span>
              <strong>14 batches</strong>
            </div>
            <div className="risk-row">
              <span>Near stockout</span>
              <strong>7 SKUs</strong>
            </div>
            <div className="risk-row">
              <span>Returns awaiting review</span>
              <strong>5 cases</strong>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

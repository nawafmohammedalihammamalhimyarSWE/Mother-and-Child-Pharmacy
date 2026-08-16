import { dashboardData } from './data';
import MetricCard from './components/MetricCard';

const stats = [
  { label: 'Total products', value: dashboardData.summary.totalProducts.toLocaleString() },
  { label: 'Low stock', value: dashboardData.summary.lowStock.toString() },
  { label: "Today's sales", value: `SAR ${dashboardData.summary.todaysSales.toLocaleString()}` },
  { label: 'Active batches', value: dashboardData.summary.activeBatches.toString() },
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
            <MetricCard key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </section>

        <section className="content-grid">
          <article className="panel">
            <h2>Priority actions</h2>
            <ul className="task-list">
              {dashboardData.priorities.map((task) => (
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

        <section className="panel table-panel">
          <div className="table-header">
            <h2>Stock overview</h2>
            <button className="secondary-btn">View all</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>SKU</th>
                <th>Product</th>
                <th>In stock</th>
                <th>Expiry</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.products.map((product) => (
                <tr key={product.sku}>
                  <td>{product.sku}</td>
                  <td>{product.name}</td>
                  <td>{product.stock}</td>
                  <td>{product.expiry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

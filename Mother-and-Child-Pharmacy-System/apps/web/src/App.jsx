import { dashboardData } from './data';
import MetricCard from './components/MetricCard';
import ProductCatalog from './components/ProductCatalog';
import InventoryTable from './components/InventoryTable';
import AlertPanel from './components/AlertPanel';
import { inventoryItems, alertItems, productCatalog } from './seedData';

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

          <AlertPanel items={alertItems} />
        </section>

        <ProductCatalog items={productCatalog} />
        <InventoryTable items={inventoryItems} />
      </main>
    </div>
  );
}

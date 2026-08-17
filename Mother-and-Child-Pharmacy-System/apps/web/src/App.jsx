import React, { useEffect, useState } from 'react';
import { dashboardData } from './data';
import MetricCard from './components/MetricCard';
import ProductCatalog from './components/ProductCatalog';
import InventoryTable from './components/InventoryTable';
import AlertPanel from './components/AlertPanel';
import PurchaseOrdersPanel from './components/PurchaseOrdersPanel';
import PosPanel from './components/PosPanel';
import ReturnsPanel from './components/ReturnsPanel';
import AuditLogPanel from './components/AuditLogPanel';
import BatchManagementPanel from './components/BatchManagementPanel';
import SupplierPanel from './components/SupplierPanel';
import ImportReviewPanel from './components/ImportReviewPanel';
import ShiftCashPanel from './components/ShiftCashPanel';
import ReportsPanel from './components/ReportsPanel';
import PosWorkflow from './components/PosWorkflow';
import PrescriptionPanel from './components/PrescriptionPanel';
import ProductDetailPanel from './components/ProductDetailPanel';
import ReturnRefundPanel from './components/ReturnRefundPanel';
import ShiftClosePanel from './components/ShiftClosePanel';
import { inventoryItems, alertItems, productCatalog } from './seedData';
import { purchaseOrders, posSales } from './operationsData';
import { returnItems as returnEntries, auditEntries } from './returnsData';
import { batchData } from './batchData';
import { suppliers, imports } from './supplierData';
import { shiftEntries, reports } from './financeData';
import { posProducts, posCart, cashier } from './posData';

const fetchDashboard = async () => {
  const response = await fetch('/api/dashboard');

  if (!response.ok) {
    throw new Error('Failed to fetch dashboard data');
  }

  return response.json();
};

const prescriptions = [
  { id: 1, patient: 'Lina Al-Mansoor', medication: 'Amoxicillin 500mg', qty: 10, status: 'Ready for dispense' },
  { id: 2, patient: 'Yousef Nasser', medication: 'Vitamin D3 2000IU', qty: 30, status: 'Awaiting review' },
  { id: 3, patient: 'Sara Rahman', medication: 'Cough syrup pediatric', qty: 2, status: 'Approved' },
];

const productDetails = [
  { id: 1, name: 'Panadol Extra', batch: 'PAN-2041', expiry: '2027-04-12', location: 'A1-04', qty: 62 },
  { id: 2, name: 'Zinc Plus', batch: 'ZIN-8702', expiry: '2026-12-10', location: 'B2-11', qty: 18 },
  { id: 3, name: 'Cough Syrup', batch: 'COU-2109', expiry: '2026-09-20', location: 'C4-03', qty: 9 },
];

const refundReturns = [
  { id: 1, customer: 'Ahmed Faris', product: 'Naproxen', reason: 'Wrong strength', amount: 42 },
  { id: 2, customer: 'Najla Salem', product: 'Paracetamol', reason: 'Expired batch', amount: 18 },
];

const shiftSummary = {
  openingDate: '2026-08-17 08:00',
  openingCash: 1200,
  netSales: 6425,
  drawer: 7425,
};

export default function App() {
  const [dashboard, setDashboard] = useState(dashboardData);
  const [isLoading, setIsLoading] = useState(true);
  const [activeView, setActiveView] = useState('Dashboard');

  const navItems = [
    'Dashboard',
    'Catalog',
    'Purchases',
    'Inventory',
    'POS',
    'Reports',
  ];

  const navigateToSection = (label) => {
    setActiveView(label);

    const sectionIdMap = {
      Dashboard: 'dashboard-section',
      Catalog: 'catalog-section',
      Purchases: 'purchases-section',
      Inventory: 'inventory-section',
      POS: 'pos-section',
      Reports: 'reports-section',
    };

    const targetId = sectionIdMap[label];
    const element = targetId ? document.getElementById(targetId) : null;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    let active = true;

    const loadDashboard = async () => {
      try {
        const data = await fetchDashboard();
        if (active) {
          setDashboard(data);
        }
      } catch (error) {
        if (active) {
          setDashboard(dashboardData);
        }
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    };

    loadDashboard();

    return () => {
      active = false;
    };
  }, []);

  const summary = dashboard?.summary ?? dashboardData.summary;
  const priorities = dashboard?.priorities ?? dashboardData.priorities;

  const stats = [
    { label: 'Total products', value: summary.totalProducts.toLocaleString() },
    { label: 'Low stock', value: summary.lowStock.toString() },
    { label: "Today's sales", value: `SAR ${summary.todaysSales.toLocaleString()}` },
    { label: 'Active batches', value: summary.activeBatches.toString() },
  ];

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">Mother & Child</div>
        <nav>
          {navItems.map((item) => (
            <button
              key={item}
              type="button"
              className={`nav-item ${activeView === item ? 'active' : ''}`}
              onClick={() => navigateToSection(item)}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      <main className="main-panel">
        <header id="dashboard-section" className="topbar">
          <div>
            <p className="eyebrow">Pharmacy operations</p>
            <h1>Operations dashboard</h1>
          </div>
          <button className="primary-btn">New sale</button>
        </header>

        {isLoading && <p className="status-text">Loading pharmacy dashboard…</p>}

        <section className="stats-grid">
          {stats.map((stat) => (
            <MetricCard key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </section>

        <div id="pos-section">
          <PosWorkflow products={posProducts} cart={posCart} cashier={cashier} />
        </div>

        <section className="content-grid">
          <article className="panel">
            <h2>Priority actions</h2>
            <ul className="task-list">
              {priorities.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </article>

          <AlertPanel items={alertItems} />
        </section>

        <div id="catalog-section">
          <ProductCatalog items={productCatalog} />
        </div>

        <section id="purchases-section" className="ops-grid">
          <PrescriptionPanel prescriptions={prescriptions} />
          <ProductDetailPanel details={productDetails} />
        </section>

        <section className="ops-grid">
          <PurchaseOrdersPanel orders={purchaseOrders} />
          <ReturnRefundPanel returns={refundReturns} />
        </section>

        <section className="ops-grid">
          <PosPanel sales={posSales} />
          <ShiftClosePanel summary={shiftSummary} />
        </section>

        <section className="ops-grid">
          <SupplierPanel suppliers={suppliers} />
          <ReportsPanel reports={reports} />
        </section>

        <section className="ops-grid lower-grid">
          <ReturnsPanel returns={returnEntries} />
          <AuditLogPanel entries={auditEntries} />
        </section>

        <BatchManagementPanel batches={batchData} />

        <section className="ops-grid lower-grid">
          <SupplierPanel suppliers={suppliers} />
          <ImportReviewPanel imports={imports} />
        </section>

        <section className="ops-grid lower-grid">
          <ShiftCashPanel entries={shiftEntries} />
          <div id="reports-section">
            <ReportsPanel reports={reports} />
          </div>
        </section>

        <div id="inventory-section">
          <InventoryTable items={inventoryItems} />
        </div>
      </main>
    </div>
  );
}

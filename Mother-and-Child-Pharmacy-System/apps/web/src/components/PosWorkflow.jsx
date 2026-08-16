export default function PosWorkflow({ products, cart, cashier }) {
  return (
    <section className="panel pos-workflow">
      <div className="pos-header">
        <div>
          <p className="eyebrow">Pharmacy POS</p>
          <h2>Point of sale</h2>
        </div>
        <div className="pos-meta">
          <span>{cashier.shift}</span>
          <span>{cashier.branch}</span>
        </div>
      </div>

      <div className="pos-layout">
        <div className="search-panel">
          <label className="search-box">
            <span>Scan barcode or search medicine</span>
            <input type="text" value="AMX-500" readOnly />
          </label>

          <div className="product-grid">
            {products.map((product) => (
              <article key={product.id} className="product-card">
                <div className="product-title-row">
                  <strong>{product.name}</strong>
                  <span className="status-badge healthy">{product.available} left</span>
                </div>
                <p>{product.generic}</p>
                <div className="product-meta">
                  <span>Batch: {product.batch}</span>
                  <span>Expiry: {product.expiry}</span>
                </div>
                <div className="product-footer">
                  <strong>SAR {product.price}</strong>
                  <button className="secondary-btn small">Add</button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="cart-panel">
          <div className="cart-header">
            <h3>Current sale</h3>
            <span>{cart.items.length} items</span>
          </div>

          <div className="cart-items">
            {cart.items.map((item) => (
              <div key={item.id} className="cart-item">
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.qty} × SAR {item.price}</span>
                </div>
                <strong>SAR {item.total}</strong>
              </div>
            ))}
          </div>

          <div className="totals-box">
            <div className="total-row">
              <span>Subtotal</span>
              <strong>SAR {cart.subtotal}</strong>
            </div>
            <div className="total-row">
              <span>Discount</span>
              <strong>SAR {cart.discount}</strong>
            </div>
            <div className="total-row">
              <span>Tax</span>
              <strong>SAR {cart.tax}</strong>
            </div>
            <div className="total-row grand-total">
              <span>Total</span>
              <strong>SAR {cart.total}</strong>
            </div>
          </div>

          <div className="payment-actions">
            <button className="primary-btn">Cash</button>
            <button className="secondary-btn">Card</button>
            <button className="secondary-btn">Split</button>
          </div>
        </aside>
      </div>
    </section>
  );
}

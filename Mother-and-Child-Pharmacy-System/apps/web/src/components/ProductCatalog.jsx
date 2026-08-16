export default function ProductCatalog({ items }) {
  return (
    <section className="panel catalog-panel">
      <div className="table-header">
        <h2>Product catalog</h2>
        <button className="secondary-btn">Add product</button>
      </div>

      <div className="catalog-grid">
        {items.map((product) => (
          <article key={product.sku} className="catalog-card">
            <div className="catalog-topline">
              <span className="sku-tag">{product.sku}</span>
              <span className={`status-badge ${product.stock > 100 ? 'healthy' : 'warning'}`}>
                {product.stock > 100 ? 'Healthy' : 'Low'}
              </span>
            </div>
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <div className="catalog-meta">
              <span>Stock: {product.stock}</span>
              <span>Price: SAR {product.price}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

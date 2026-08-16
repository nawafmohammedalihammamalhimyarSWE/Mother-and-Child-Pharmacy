export default function AlertPanel({ items }) {
  return (
    <article className="panel">
      <h2>Expiry and stock alerts</h2>
      <ul className="alert-list">
        {items.map((item) => (
          <li key={item.title}>
            <strong>{item.title}</strong>
            <span>{item.detail}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

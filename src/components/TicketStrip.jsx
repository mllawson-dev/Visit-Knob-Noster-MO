export default function TicketStrip({ items }) {
  return (
    <div className="ticket-strip">
      <div className="wrap">
        {items.map((item) => (
          <div className="ticket-cell" key={item.label}>
            <div className="tk">{item.label}</div>
            <div className="tv">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

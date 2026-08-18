export default function Stamp({ lines, className = "", style = {} }) {
  return (
    <div className={`stamp ${className}`} style={style}>
      {lines.map((line, i) => (
        <span key={i}>{line}</span>
      ))}
    </div>
  );
}

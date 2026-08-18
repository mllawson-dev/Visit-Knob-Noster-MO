export default function SectionHead({ kicker, title, kickerModifier = "", children, style = {} }) {
  return (
    <div className="section-head" style={style}>
      <p className={`kicker ${kickerModifier}`}>{kicker}</p>
      <h2 className="section-title">{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

import { Link } from "react-router-dom";
import Stamp from "./Stamp";

export default function PageHero({
  variant = "poster",
  crumb,
  title,
  children,
  stampLines,
  scene,
  photo,
  photoAlt = "",
}) {
  return (
    <section className={`page-hero page-hero--${variant}`}>
      {photo && (
        <>
          <div className="hero-photo" style={{ backgroundImage: `url(${photo})` }} role="img" aria-label={photoAlt} />
          <div className={`hero-photo-tint hero-photo-tint--${variant}`} />
          <div className="hero-photo-scrim" />
        </>
      )}
      <div className="wrap">
        <p className="crumb">
          <Link to="/">Visit Knob Noster</Link> &middot; {crumb}
        </p>
        <h1>{title}</h1>
        <p className="lede">{children}</p>
      </div>
      {stampLines && <Stamp lines={stampLines} className="badge-stamp" />}
      {scene}
    </section>
  );
}

import { NavLink, Link } from "react-router-dom";
import "./Header.css";

const NAV_LINKS = [
  { to: "/things-to-do", label: "Things to Do" },
  { to: "/state-park", label: "State Park" },
  { to: "/downtown", label: "Downtown" },
  { to: "/plan-your-visit", label: "Plan a Trip" },
  { to: "/itinerary", label: "Itinerary" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <Link to="/" className="brand">
          <svg className="brand-badge" viewBox="0 0 46 46" fill="none" aria-hidden="true">
            <circle cx="23" cy="23" r="21" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="23" cy="23" r="16" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
            <path d="M12 27 L20 15 L28 27 M17 27 L26 27" stroke="currentColor" strokeWidth="1.4" fill="none" />
          </svg>
          <span>
            <span className="sub">Visit</span>
            <span className="name">Knob Noster</span>
          </span>
        </Link>
        <nav className="primary-nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/plan-your-visit" className="btn btn-solid">
          Plan Your Visit
        </Link>
      </div>
    </header>
  );
}

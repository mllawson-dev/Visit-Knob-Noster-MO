import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="sub">Visit</span>
            <span className="name">Knob Noster</span>
            <address>
              Visitor Information
              <br />
              100 E. Washington St.
              <br />
              Knob Noster, MO 65336
            </address>
          </div>
          <div className="footer-col">
            <h5>Explore</h5>
            <ul>
              <li>
                <Link to="/things-to-do">Things to Do</Link>
              </li>
              <li>
                <Link to="/state-park">Knob Noster State Park</Link>
              </li>
              <li>
                <Link to="/things-to-do">Plane Spotting Guide</Link>
              </li>
              <li>
                <Link to="/downtown">Downtown Shops</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Plan</h5>
            <ul>
              <li>
                <Link to="/plan-your-visit#route">Getting Here</Link>
              </li>
              <li>
                <Link to="/plan-your-visit">Where to Stay</Link>
              </li>
              <li>
                <Link to="/itinerary">Suggested Itineraries</Link>
              </li>
              <li>
                <a href="#">Visitor Guide</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Follow Along</h5>
            <ul>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Visit Knob Noster, Missouri</span>
          <div style={{ display: "flex", gap: "18px" }}>
            <a href="#">Accessibility</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

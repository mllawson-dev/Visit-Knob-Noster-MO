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
              Knob Noster Chamber of Commerce
              <br />
              PO Box 31
              <br />
              Knob Noster, MO 65336
            </address>
          </div>
          <div className="footer-col">
            <div className="footer-heading">Explore</div>
            <ul>
              <li>
                <Link to="/things-to-do">Things to Do</Link>
              </li>
              <li>
                <Link to="/state-park">Knob Noster State Park</Link>
              </li>
              <li>
                <a href="https://www.whiteman.af.mil/Community/Base-Tours/Base-Tours/" target="_blank" rel="noreferrer">Official Base Tours</a>
              </li>
              <li>
                <Link to="/downtown">Downtown Shops</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-heading">Plan</div>
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
                <Link to="/visitor-guide">Printable Visitor Guide</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-heading">Official Resources</div>
            <ul>
              <li>
                <a href="https://www.knchamber.org/member-directory" target="_blank" rel="noreferrer">Chamber Directory</a>
              </li>
              <li>
                <a href="https://mostateparks.com/park/knob-noster-state-park" target="_blank" rel="noreferrer">Missouri State Parks</a>
              </li>
              <li>
                <a href="https://www.whiteman.af.mil/News/" target="_blank" rel="noreferrer">Whiteman News</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Visit Knob Noster &middot; Independent portfolio concept; verify plans with linked official sources.</span>
          <div style={{ display: "flex", gap: "18px" }}>
            <Link to="/accessibility">Accessibility</Link>
            <Link to="/contact">Contact & Sources</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

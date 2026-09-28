import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import "./UtilityPages.css";

export default function Accessibility() {
  return (
    <div className="utility-page">
      <PageHero variant="poster" crumb="Accessibility" title="Accessibility">
        This concept site is designed to be usable by keyboard, screen reader, zoom, and reduced-motion users.
      </PageHero>
      <section className="utility-body"><div className="wrap utility-grid"><div className="utility-block">
        <h2>Our current standard</h2>
        <p>The site uses semantic page structure, visible keyboard focus, a skip link, descriptive link text, accessible filters and tabs, and motion reduction when requested by the visitor's device.</p>
        <h3>Physical destination accessibility</h3>
        <p>Trail, campground, business, and event accessibility can change. Contact the responsible organization before travel for the most current route, facility, parking, and accommodation details.</p>
        <h3>Need help?</h3>
        <p>Use the <Link to="/contact">contact and sources page</Link> to reach the Chamber, state park, or Whiteman team responsible for the information you need.</p>
      </div><aside className="resource-card"><h2>Feedback</h2><p>If a part of this concept site is difficult to use, email <a href="mailto:hello@knchamber.org">hello@knchamber.org</a> for local visitor assistance.</p></aside></div></section>
    </div>
  );
}

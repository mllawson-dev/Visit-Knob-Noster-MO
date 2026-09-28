import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { SOURCES } from "../data/sources";
import "./UtilityPages.css";

export default function VisitorGuide() {
  return (
    <div className="utility-page">
      <PageHero variant="poster" crumb="Visitor Guide" title={<>Visitor<br />Guide</>} stampLines={["Plan", "Print", "Go"]}>
        A compact, printable starting point built from current Chamber, Missouri State Parks, and Whiteman Air Force Base information.
      </PageHero>
      <section className="utility-body">
        <div className="wrap utility-grid">
          <div>
            <div className="utility-block">
              <p className="kicker">Start here</p>
              <h2>Build a day around three anchors</h2>
              <ol>
                <li><strong>Choose a trail.</strong> Match distance and difficulty to your group using the official park map.</li>
                <li><strong>Choose an open downtown stop.</strong> Business hours change, so confirm through the Chamber directory.</li>
                <li><strong>Leave room for the sky.</strong> Aircraft activity is never guaranteed. Stay in lawful public areas and respect all base restrictions.</li>
              </ol>
            </div>
            <div className="utility-block">
              <h2>Know before you go</h2>
              <ul>
                <li>Knob Noster sits along U.S. Route 50 between Warrensburg and Sedalia.</li>
                <li>Knob Noster State Park covers 3,934.38 acres and has eight official trails.</li>
                <li>Campsites 1–25 are reservable year-round; other sites and services operate seasonally.</li>
                <li>A Missouri fishing permit is required when applicable.</li>
                <li>Whiteman group tours require advance arrangements and remain subject to mission needs.</li>
              </ul>
            </div>
            <div className="print-actions">
              <button className="btn btn-solid" type="button" onClick={() => window.print()}>Print or Save as PDF</button>
              <Link className="btn btn-outline-ink" to="/itinerary">Choose an Itinerary</Link>
            </div>
          </div>
          <aside className="resource-card" aria-labelledby="official-links">
            <h2 id="official-links">Official links</h2>
            <div className="resource-links">
              <a href={SOURCES.chamberDirectory} target="_blank" rel="noreferrer">Current Chamber business directory</a>
              <a href={SOURCES.stateParkTrailMap} target="_blank" rel="noreferrer">Official state park map</a>
              <a href={SOURCES.stateParkCamping} target="_blank" rel="noreferrer">Camping details and reservations</a>
              <a href={SOURCES.stateParkEvents} target="_blank" rel="noreferrer">Missouri State Parks events</a>
              <a href={SOURCES.whitemanTours} target="_blank" rel="noreferrer">Official Whiteman group tours</a>
              <a href={SOURCES.directions} target="_blank" rel="noreferrer">Open driving directions</a>
            </div>
            <p className="source-note">Confirm hours, conditions, closures, and eligibility with the linked organization before travel.</p>
          </aside>
        </div>
      </section>
    </div>
  );
}

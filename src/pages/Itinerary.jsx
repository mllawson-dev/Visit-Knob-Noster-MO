import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import TicketStrip from "../components/TicketStrip";
import SectionHead from "../components/SectionHead";
import DayTimeline from "../components/DayTimeline";
import { ITINERARIES } from "../data/itineraries";
import "./Itinerary.css";

const STATS = [
  { label: "Routes", value: "3 Itineraries" },
  { label: "Duration", value: "Half Day–2 Days" },
  { label: "Cost", value: "Mostly Free" },
  { label: "Best Season", value: "Year-Round" },
];

export default function Itinerary() {
  const [activeId, setActiveId] = useState(ITINERARIES[0].id);
  const active = ITINERARIES.find((i) => i.id === activeId);

  return (
    <>
      <PageHero
        variant="poster"
        crumb="Itineraries"
        title={<>Suggested<br />Itineraries</>}
        stampLines={["3", "Routes", "•"]}
      >
        Three ways to spend your time here, from a quick day trip to a full weekend — pick the one that matches your
        trip, or mix and match.
      </PageHero>

      <TicketStrip items={STATS} />

      <section className="itin-tabs">
        <div className="wrap">
          <SectionHead kicker="Choose your route" title="Pick your pace" />

          <div className="tab-row" role="tablist" aria-label="Itinerary options">
            {ITINERARIES.map((it) => (
              <button
                key={it.id}
                className="tab-btn"
                role="tab"
                aria-selected={activeId === it.id}
                onClick={() => setActiveId(it.id)}
              >
                <span className="tb-dur">{it.duration}</span>
                <span className="tb-name">{it.name}</span>
                <span className="tb-sub">{it.tabSub}</span>
              </button>
            ))}
          </div>

          <div className="itin-panel">
            <div className="itin-head">
              <h3>{active.name}</h3>
              <div className="itin-tags">
                {active.tags.map((t) => (
                  <span className="itin-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <DayTimeline days={active.days} />
          </div>
        </div>
      </section>

      <section className="cta cta--rust">
        <div className="wrap">
          <h2>Ready to Set Your Route?</h2>
          <p>Download the visitor guide for a printable map and event dates, then pick the itinerary that fits your trip.</p>
          <div className="cta-actions">
            <a href="#" className="btn btn-cta-solid">
              Download Visitor Guide
            </a>
            <Link to="/plan-your-visit" className="btn btn-cta-line">
              Plan the Logistics
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

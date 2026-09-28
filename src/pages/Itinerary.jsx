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
                id={`tab-${it.id}`}
                aria-controls="itinerary-panel"
                aria-selected={activeId === it.id}
                tabIndex={activeId === it.id ? 0 : -1}
                onClick={() => setActiveId(it.id)}
                onKeyDown={(event) => {
                  const current = ITINERARIES.findIndex((item) => item.id === activeId);
                  if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
                  event.preventDefault();
                  const next = event.key === "Home" ? 0 : event.key === "End" ? ITINERARIES.length - 1 : (current + (event.key === "ArrowRight" ? 1 : -1) + ITINERARIES.length) % ITINERARIES.length;
                  setActiveId(ITINERARIES[next].id);
                  requestAnimationFrame(() => document.getElementById(`tab-${ITINERARIES[next].id}`)?.focus());
                }}
              >
                <span className="tb-dur">{it.duration}</span>
                <span className="tb-name">{it.name}</span>
                <span className="tb-sub">{it.tabSub}</span>
              </button>
            ))}
          </div>

          <div className="itin-panel" id="itinerary-panel" role="tabpanel" aria-labelledby={`tab-${active.id}`} tabIndex="0">
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
          <p>Open the printable guide for official maps and current links, then pick the itinerary that fits your trip.</p>
          <div className="cta-actions">
            <Link to="/visitor-guide" className="btn btn-cta-solid">Open Visitor Guide</Link>
            <Link to="/plan-your-visit" className="btn btn-cta-line">
              Plan the Logistics
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import TicketStrip from "../components/TicketStrip";
import SectionHead from "../components/SectionHead";
import { DOWNTOWN_CATEGORIES, DOWNTOWN_BUSINESSES } from "../data/downtown";
import "./Downtown.css";

const STATS = [
  { label: "Featured", value: "6 Local Stops" },
  { label: "Directory", value: "Chamber Verified" },
  { label: "Best Practice", value: "Check Hours" },
  { label: "Core", value: "State Street" },
];

const CATEGORY_CLASS = {
  "food-drink": "cat-food-drink",
  shopping: "cat-shopping",
  experiences: "cat-services",
};

export default function Downtown() {
  const [filter, setFilter] = useState("all");
  const items = filter === "all" ? DOWNTOWN_BUSINESSES : DOWNTOWN_BUSINESSES.filter((b) => b.category === filter);

  return (
    <>
      <PageHero
        variant="brick"
        crumb="Downtown"
        title={<>Downtown<br />Knob Noster</>}
        stampLines={["Est.", "1856", "•"]}
        scene={
          <div className="storefront-scene" aria-hidden="true">
            <svg viewBox="0 0 1200 170" preserveAspectRatio="none">
              <path d="M0 170 L0 100 L60 100 L60 70 L160 70 L160 100 L230 100 L230 60 L340 60 L340 100 L420 100 L420 80 L520 80 L520 100 L600 100 L600 55 L720 55 L720 100 L800 100 L800 75 L900 75 L900 100 L980 100 L980 65 L1090 65 L1090 100 L1200 100 L1200 170 Z" fill="#170F26" opacity="0.9" />
              <g fill="#170F26">
                <rect x="90" y="85" width="14" height="15" />
                <rect x="270" y="80" width="14" height="20" />
                <rect x="450" y="88" width="14" height="12" />
                <rect x="640" y="72" width="14" height="28" />
                <rect x="830" y="85" width="14" height="15" />
                <rect x="1010" y="82" width="14" height="18" />
              </g>
            </svg>
          </div>
        }
      >
        A compact State Street cluster of locally owned shops, food, drink, and indoor fun—all verified against the
        current Chamber directory.
      </PageHero>

      <TicketStrip items={STATS} />

      <nav className="filters" aria-label="Filter by category">
        <div className="wrap">
          {DOWNTOWN_CATEGORIES.map((c) => (
            <button key={c.key} className="filter-btn" aria-pressed={filter === c.key} onClick={() => setFilter(c.key)}>
              {c.label}
            </button>
          ))}
        </div>
      </nav>

      <section className="listing">
        <div className="wrap" style={{ paddingTop: "56px" }}>
          <SectionHead kicker="The storefronts" title="A few blocks, a lot of character">
            Most of downtown fits inside a short walk — worth doing slowly, with time to actually go inside a few
            doors.
          </SectionHead>
        </div>
        <div className="listing-grid">
          {items.map((b) => (
            <article className="item-card" key={b.num}>
              <div className="item-top">
                <span className="num">{b.num}</span>
                <span className={`cat ${CATEGORY_CLASS[b.category]}`}>
                  {DOWNTOWN_CATEGORIES.find((c) => c.key === b.category)?.label}
                </span>
              </div>
              <h3>{b.name}</h3>
              <p>{b.description}</p>
              <div className="item-meta">
                {b.meta.map((m) => (
                  <span className="m" key={m}>
                    {m}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="wrap" style={{ marginTop: "24px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <span style={{ fontSize: "13px", color: "#6B6156" }}>
            This is a starter list — see the Chamber's full member directory for everything downtown.
          </span>
          <a
            href="https://www.knchamber.org/members"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "12.5px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--rust)", textDecoration: "none", borderBottom: "2px solid var(--rust)", paddingBottom: "3px" }}
          >
            Full Business Directory &rarr;
          </a>
        </div>
      </section>

      <section className="history">
        <div className="wrap">
          <div>
            <p className="kicker">A working Main Street</p>
              <h2 className="section-title" style={{ fontSize: "clamp(26px,3.4vw,36px)" }}>
              Small businesses, close together
            </h2>
            <p>
              Downtown is best approached as a local business district, not a theme park. Choose a few stops, confirm
              opening hours, and leave time for the conversations that make a small-town visit memorable.
            </p>
          </div>
          <div>
            <p className="kicker">Getting around</p>
            <h2 className="section-title" style={{ fontSize: "clamp(26px,3.4vw,36px)" }}>
              Park once, walk the rest
            </h2>
            <p>
              The featured stops cluster around State Street. Follow posted parking signs, use marked crossings, and
              check accessibility details with each business before your visit.
            </p>
          </div>
        </div>
      </section>

      <section className="cta cta--rust">
        <div className="wrap">
          <h2>Hungry or Just Browsing?</h2>
          <p>Start at Lost Art Taproom or Meyer's Market, then let downtown's few blocks do the rest.</p>
          <div className="cta-actions">
            <Link to="/visitor-guide" className="btn btn-cta-solid">Open Visitor Guide</Link>
            <Link to="/itinerary" className="btn btn-cta-line">
              See a Sample Itinerary
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

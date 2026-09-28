import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionHead from "../components/SectionHead";
import { CATEGORIES, THINGS_TO_DO } from "../data/thingsToDo";
import "./ThingsToDo.css";

const CATEGORY_CLASS = {
  outdoors: "cat-outdoors",
  "only-here": "cat-only-here",
  downtown: "cat-downtown",
  seasonal: "cat-seasonal",
};

export default function ThingsToDo() {
  const [filter, setFilter] = useState("all");
  const items = filter === "all" ? THINGS_TO_DO : THINGS_TO_DO.filter((i) => i.category === filter);

  return (
    <>
      <PageHero variant="poster" crumb="Things to Do" title={<>Things<br />to Do</>} stampLines={["10", "Things", "•"]}>
        From trailheads to a taproom in an old bank, here's the full list of what fills a weekend in Knob Noster —
        sorted so you can find your kind of day.
      </PageHero>

      <nav className="filters" aria-label="Filter by category">
        <div className="wrap">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              className="filter-btn"
              aria-pressed={filter === c.key}
              onClick={() => setFilter(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>
      </nav>

      <section className="listing">
        <div className="wrap">
          <SectionHead kicker="Build your day" title="Choose your kind of visit">
            Every listing is anchored to a verified destination or official planning source. Confirm hours and conditions before you go.
          </SectionHead>
          <div className="listing-grid">
            {items.map((item) => (
              <article className="item-card" key={item.num}>
                <div className="item-top">
                  <span className="num">{item.num}</span>
                  <span className={`cat ${CATEGORY_CLASS[item.category]}`}>
                    {CATEGORIES.find((c) => c.key === item.category)?.label}
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="item-meta">
                  {item.meta.map((m) => (
                    <span className="m" key={m}>
                      {m}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta cta--rust">
        <div className="wrap">
          <h2>Ready to Plan Your Visit?</h2>
          <p>
            Use the guide for official maps, current source links, and a practical route through town and park.
          </p>
          <div className="cta-actions">
            <Link to="/visitor-guide" className="btn btn-cta-solid">Open Visitor Guide</Link>
            <Link to="/plan-your-visit" className="btn btn-cta-line">
              Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

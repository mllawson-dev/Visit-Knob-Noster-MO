import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
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
        <div className="wrap" style={{ padding: 0 }}>
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
            Grab the visitor guide for maps, flyover timing, and a full events calendar — then come see Knob Noster
            for yourself.
          </p>
          <div className="cta-actions">
            <a href="#" className="btn btn-cta-solid">
              Download Visitor Guide
            </a>
            <Link to="/plan-your-visit" className="btn btn-cta-line">
              Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

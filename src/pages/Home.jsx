import { Link } from "react-router-dom";
import TicketStrip from "../components/TicketStrip";
import SectionHead from "../components/SectionHead";
import DayTimeline from "../components/DayTimeline";
import Stamp from "../components/Stamp";
import { THINGS_TO_DO } from "../data/thingsToDo";
import { ITINERARIES } from "../data/itineraries";
import { PHOTOS } from "../data/photos";
import { SOURCES } from "../data/sources";
import "./Home.css";

const STATS = [
  { label: "Population · 2020", value: "2,782" },
  { label: "Founded", value: "1856" },
  { label: "State Park", value: "3,934 Acres" },
  { label: "Getting Here", value: "Hwy 50" },
];

export default function Home() {
  const teaser = THINGS_TO_DO.slice(0, 6);
  const perfectDay = ITINERARIES[0];

  return (
    <>
      <section className="hero">
        <div className="hero-photo" style={{ backgroundImage: `url(${PHOTOS.prairie.url})` }} role="img" aria-label={PHOTOS.prairie.alt} />
        <div className="hero-photo-tint hero-photo-tint--poster" />
        <div className="hero-photo-scrim" />
        <div className="wrap hero-inner">
          <p className="hero-kicker">Johnson County &middot; U.S. Route 50</p>
          <h1 tabIndex="-1">
            Knob
            <br />
            Noster
            <span className="state">Missouri</span>
          </h1>
          <p className="hero-lede">
            A small town shaped by prairie, a 3,934-acre state park, and its long relationship with nearby Whiteman
            Air Force Base. Build a trip around trails, local storefronts, and a very big Missouri sky.
          </p>
          <div className="hero-actions">
            <Link to="/things-to-do" className="btn btn-outline-cream">
              See Things to Do
            </Link>
            <Link to="/itinerary" className="btn btn-outline-cream">
              Plan a Day Trip
            </Link>
          </div>
        </div>
        <a className="photo-credit" href={PHOTOS.prairie.creditUrl} target="_blank" rel="noreferrer">Photo: {PHOTOS.prairie.credit}</a>
      </section>

      <TicketStrip items={STATS} />

      <section className="two-skies" id="two-skies">
        <div className="wrap" style={{ paddingTop: "96px" }}>
          <SectionHead kicker="Two skies, one town" title="Chase the trails, or chase the flyover">
            Knob Noster sits right between them — quiet woods to the southwest, a stealth bomber's home runway to the
            south.
          </SectionHead>
        </div>
        <div className="skies-grid">
          <div className="sky-panel park">
            <div className="hero-photo" style={{ backgroundImage: `url(${PHOTOS.forestTrail.url})` }} role="img" aria-label={PHOTOS.forestTrail.alt} />
            <div className="hero-photo-tint hero-photo-tint--forest" />
            <div className="hero-photo-scrim" />
            <Stamp lines={["State", "Park", "•"]} className="panel-stamp" />
            <h3>
              Knob Noster
              <br />
              State Park
            </h3>
            <p>
              Rolling oak-hickory woods, the Clearfork Creek, and miles of trail between two lakes — hike, camp,
              fish, or just find some quiet.
            </p>
            <Link to="/state-park" className="more">
              Explore the Park &rarr;
            </Link>
            <a className="photo-credit" href={PHOTOS.forestTrail.creditUrl} target="_blank" rel="noreferrer">Photo: {PHOTOS.forestTrail.credit}</a>
          </div>
          <div className="sky-panel base">
            <div className="hero-photo" style={{ backgroundImage: `url(${PHOTOS.b2Sunset.url})` }} role="img" aria-label={PHOTOS.b2Sunset.alt} />
            <div className="hero-photo-tint hero-photo-tint--midnight" />
            <div className="hero-photo-scrim" />
            <Stamp lines={["Plane", "Spotting", "•"]} className="panel-stamp" />
            <h3>
              Whiteman
              <br />
              Air Force Base
            </h3>
            <p>
              Learn how the base and town connect, explore official tour guidance, and enjoy any aircraft activity
              safely from lawful public areas.
            </p>
            <Link to="/things-to-do" className="more">
              Visit Responsibly &rarr;
            </Link>
            <a className="photo-credit" href={PHOTOS.b2Sunset.creditUrl} target="_blank" rel="noreferrer">Photo: {PHOTOS.b2Sunset.credit}</a>
          </div>
        </div>
      </section>

      <section className="things-to-do">
        <div className="wrap">
          <SectionHead kicker="Things to do" title="A weekend's worth of small-town">
            Downtown storefronts, a home-brewed pint, antiques with real history, and a festival calendar that keeps
            the town park busy.
          </SectionHead>
        </div>
        <div className="do-grid">
          {teaser.map((item) => (
            <div className="do-card" key={item.num}>
              <span className="do-num">{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="do-tag">{CATEGORY_LABEL[item.category]}</span>
            </div>
          ))}
        </div>
        <div className="wrap" style={{ marginTop: "40px" }}>
          <Link to="/things-to-do" className="btn btn-outline-ink">
            See All Things to Do &rarr;
          </Link>
        </div>
      </section>

      <section className="plan-teaser" id="plan">
        <div className="wrap">
          <SectionHead kicker="Plan your trip" title="Good to know before you go" kickerModifier="kicker--gold" style={{ color: "var(--cream)" }} />
          <div className="plan-teaser-grid">
            <div className="plan-teaser-item">
              <div className="pn">01</div>
              <h3>Getting Here</h3>
              <p>
                Right on U.S. Route 50, about nine miles east of Warrensburg and an easy detour between Kansas City
                and Columbia.
              </p>
            </div>
            <div className="plan-teaser-item">
              <div className="pn">02</div>
              <h3>Where to Stay</h3>
              <p>
                Camp in the state park, or book one of the small local motels — Warrensburg and Sedalia have more
                options a short drive away.
              </p>
            </div>
            <div className="plan-teaser-item">
              <div className="pn">03</div>
              <h3>Best Time to Visit</h3>
              <p>
                Fall brings festival season and color on the trails; spring and early summer are best for the park's
                lakes and creek.
              </p>
            </div>
          </div>
          <div style={{ marginTop: "40px" }}>
            <Link to="/plan-your-visit" className="btn btn-outline-cream">
              Full Trip Planning Guide &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="itinerary" id="itinerary">
        <div className="wrap">
          <SectionHead kicker="Suggested itinerary" title="A perfect day in Knob Noster" />
          <DayTimeline days={perfectDay.days} />
          <div style={{ marginTop: "32px" }}>
            <Link to="/itinerary" className="btn btn-outline-ink">
              See All Itineraries &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="events-section">
        <div className="wrap">
          <SectionHead kicker="Check before you go" title="Current events, from the source">
            Event dates move. These official calendars are the dependable place to check what is happening during your visit.
          </SectionHead>
          <div className="source-grid">
            <article className="source-card"><p className="kicker">Around town</p><h3>Chamber events</h3><p>Festivals, business events, and community gatherings published by the Knob Noster Chamber.</p><a href={SOURCES.chamber} target="_blank" rel="noreferrer">Open the Chamber calendar &rarr;</a></article>
            <article className="source-card"><p className="kicker">At the park</p><h3>State park events</h3><p>Programs and activities published by Missouri State Parks, with current dates and requirements.</p><a href={SOURCES.stateParkEvents} target="_blank" rel="noreferrer">Open the park calendar &rarr;</a></article>
          </div>
        </div>
      </section>

      <section className="cta cta--rust">
        <div className="wrap">
          <h2>Your Trip Starts Here</h2>
          <p>
            Open the printable visitor guide for official maps, current source links, and a responsible route through town.
          </p>
          <div className="cta-actions">
            <Link to="/visitor-guide" className="btn btn-cta-solid">Open Visitor Guide</Link>
            <Link to="/plan-your-visit" className="btn btn-cta-line">
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const CATEGORY_LABEL = {
  outdoors: "Outdoors",
  "only-here": "Only Here",
  downtown: "Downtown",
  seasonal: "Seasonal",
};

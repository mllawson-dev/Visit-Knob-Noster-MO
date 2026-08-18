import { Link } from "react-router-dom";
import TicketStrip from "../components/TicketStrip";
import SectionHead from "../components/SectionHead";
import DayTimeline from "../components/DayTimeline";
import Stamp from "../components/Stamp";
import NewsWidget from "../components/NewsWidget";
import EventsWidget from "../components/EventsWidget";
import { THINGS_TO_DO } from "../data/thingsToDo";
import { ITINERARIES } from "../data/itineraries";
import { PHOTOS } from "../data/photos";
import "./Home.css";

const STATS = [
  { label: "Population", value: "2,800" },
  { label: "Founded", value: "1856" },
  { label: "State Park", value: "3,600+ Acres" },
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
          <h1>
            Knob
            <br />
            Noster
            <span className="state">Missouri</span>
          </h1>
          <p className="hero-lede">
            Two low hills on the open prairie, a mile from the only base that flies the B-2 Spirit, and minutes from
            3,600 acres of Ozark-border woods and creek. Come see what a small town with a big sky is all about.
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
        <div className="scene" aria-hidden="true">
          <svg viewBox="0 0 1200 320" preserveAspectRatio="none">
            <g className="jet-streak">
              <path d="M560 70 L604 76 L560 84 L548 80 Z" fill="#F6EFDC" opacity="0.92" />
              <line x1="500" y1="80" x2="558" y2="80" stroke="#F6EFDC" strokeWidth="1.3" opacity="0.4" />
            </g>
            <path d="M0 300 Q120 200 260 300 Z" fill="#211935" opacity="0.9" />
            <path d="M180 300 Q330 175 460 300 Z" fill="#211935" opacity="0.75" />
            <path d="M0 300 Q300 250 620 292 T1200 268 L1200 320 L0 320 Z" fill="#170F26" />
            <g fill="#170F26" opacity="0.95">
              <rect x="700" y="240" width="16" height="60" />
              <rect x="740" y="210" width="12" height="90" />
              <circle cx="746" cy="196" r="16" />
              <rect x="800" y="255" width="70" height="45" />
              <rect x="900" y="225" width="18" height="75" />
              <polygon points="909,200 920,225 898,225" />
              <rect x="960" y="260" width="90" height="40" />
            </g>
          </svg>
        </div>
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
              Catch a B-2 Spirit on approach from the public viewing spots around town — the only place in the world
              you can.
            </p>
            <Link to="/things-to-do" className="more">
              Best Spotting Locations &rarr;
            </Link>
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
              <h4>{item.title}</h4>
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
              <h4>Getting Here</h4>
              <p>
                Right on U.S. Route 50, about nine miles east of Warrensburg and an easy detour between Kansas City
                and Columbia.
              </p>
            </div>
            <div className="plan-teaser-item">
              <div className="pn">02</div>
              <h4>Where to Stay</h4>
              <p>
                Camp in the state park, or book one of the small local motels — Warrensburg and Sedalia have more
                options a short drive away.
              </p>
            </div>
            <div className="plan-teaser-item">
              <div className="pn">03</div>
              <h4>Best Time to Visit</h4>
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
        <div className="wrap" style={{ maxWidth: "680px" }}>
          <SectionHead kicker="Mark your calendar" title="Upcoming events">
            A few highlights from the Knob Noster Chamber of Commerce's calendar.
          </SectionHead>
          <EventsWidget />
        </div>
      </section>

      <section className="news-section">
        <div className="wrap" style={{ maxWidth: "680px" }}>
          <SectionHead kicker="From around town" title="Latest local news">
            Headlines mentioning Knob Noster and Whiteman Air Force Base, pulled live.
          </SectionHead>
          <NewsWidget />
        </div>
      </section>

      <section className="cta cta--rust">
        <div className="wrap">
          <h2>Your Trip Starts Here</h2>
          <p>
            Grab the visitor guide for maps, flyover tips, and a full events calendar — then come see Knob Noster for
            yourself.
          </p>
          <div className="cta-actions">
            <a href="#" className="btn btn-cta-solid">
              Download Visitor Guide
            </a>
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

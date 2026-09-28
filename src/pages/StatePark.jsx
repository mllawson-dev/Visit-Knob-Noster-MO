import PageHero from "../components/PageHero";
import TicketStrip from "../components/TicketStrip";
import SectionHead from "../components/SectionHead";
import { TRAILS, SEASONS } from "../data/trails";
import { PHOTOS } from "../data/photos";
import { SOURCES } from "../data/sources";
import "./StatePark.css";

const STATS = [
  { label: "Acreage", value: "3,934.38 Acres" },
  { label: "Trails", value: "8 Official Trails" },
  { label: "Lakes", value: "Buteo & Clearfork" },
  { label: "State Park Since", value: "1946" },
];

const BLAZE_CLASS = { yellow: "blaze-yellow", green: "blaze-green", blue: "blaze-blue", white: "blaze-white" };

export default function StatePark() {
  return (
    <>
      <PageHero
        variant="forest"
        crumb="State Park"
        title={<>Knob Noster<br />State Park</>}
        photo={PHOTOS.forestTrail.url}
        photoAlt={PHOTOS.forestTrail.alt}
        photoCredit={PHOTOS.forestTrail.credit}
        photoCreditUrl={PHOTOS.forestTrail.creditUrl}
      >
        3,934.38 acres of oak-hickory woods, savanna, and prairie folded around the meandering Clearfork Creek
        — a quiet green half to a town best known for the sky above it.
      </PageHero>

      <TicketStrip items={STATS} />

      <section className="trails">
        <div className="wrap">
          <SectionHead kicker="On the trail" kickerModifier="kicker--sage" title="Eight official trails, four good starting points">
            This shortlist helps you compare a few routes. Use Missouri State Parks' current map and trail pages for
            the full set, conditions, rules, and closures.
          </SectionHead>
        </div>
        <div className="wrap" style={{ marginTop: "30px" }}><a className="btn btn-outline-ink" href={SOURCES.stateParkTrails} target="_blank" rel="noreferrer">View all official trails &rarr;</a></div>
        <div className="trail-grid">
          {TRAILS.map((trail) => (
            <div className="trail-card" key={trail.name}>
              <div className="trail-top">
                <span className={`blaze ${BLAZE_CLASS[trail.blaze]}`}></span>
                <h3>{trail.name}</h3>
              </div>
              <p>{trail.description}</p>
              <div className="trail-meta">
                {trail.meta.map((m) => (
                  <span className="m" key={m}>
                    {m}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="split">
        <div className="wrap" style={{ paddingBottom: 0 }}>
          <SectionHead kicker="Water & a place to stay" kickerModifier="kicker--sage" title="Two lakes, a creek, and a campground worth booking ahead" />
        </div>
        <div className="split-grid">
          <div className="split-card">
            <span className="tag">Fishing</span>
            <h3>Lake Buteo & Clearfork Lake</h3>
            <p>
              Two small lakes plus Clearfork Creek make fishing part of the park experience. Check current Missouri
              State Parks and Department of Conservation rules before putting a line in the water.
            </p>
            <ul>
              <li>Bass, bluegill, crappie &amp; channel catfish</li>
              <li>Valid Missouri fishing license required</li>
              <li>Check current park hours and water conditions</li>
            </ul>
          </div>
          <div className="split-card">
            <span className="tag">Camping</span>
            <h3>Wooded, level & well-shaded sites</h3>
            <p>
              The campground offers basic, electric, sewer/electric/water, and backpack options. Availability and
              amenities vary by site and season.
            </p>
            <ul>
              <li>Sites 1–25 reservable year-round</li>
              <li>Sites 26–60 generally open April 15–October 31</li>
              <li>Showers and some water services are seasonal</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="seasons">
        <div className="wrap">
          <SectionHead kicker="Wildlife & when to go" kickerModifier="kicker--gold" title="A different park every season" style={{ color: "var(--cream)" }}>
            <span style={{ color: "rgba(246,239,220,.78)" }}>
              White-tailed deer, wild turkey, and bluebirds year-round — plus whatever's passing through overhead.
            </span>
          </SectionHead>
          <div className="season-grid">
            {SEASONS.map((s) => (
              <div className="season-card" key={s.name}>
                <div className="sn">{s.name}</div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="history">
        <div className="wrap">
          <div>
            <p className="kicker kicker--sage">A New Deal park</p>
            <h2 className="section-title" style={{ fontSize: "clamp(26px,3.4vw,36px)" }}>
              Built by the CCC & WPA
            </h2>
            <p>
              The land was developed as a federal recreation demonstration project in the late 1930s. Missouri took
              ownership in 1946 and renamed it Knob Noster State Park. Historic structures from that period remain
              part of the landscape.
            </p>
          </div>
          <div>
            <p className="kicker kicker--sage">Getting there</p>
            <h2 className="section-title" style={{ fontSize: "clamp(26px,3.4vw,36px)" }}>
              Just off Route 23
            </h2>
            <p>
              The park entrance sits southwest of downtown Knob Noster along Missouri Route 23, an easy detour from
              U.S. 50 whether you're coming from Warrensburg or Sedalia. There's no camp store inside the park, so
              stock up in town before you head in.
            </p>
          </div>
        </div>
      </section>

      <section className="cta cta--sage">
        <div className="wrap">
          <h2>Ready for the Trailhead?</h2>
          <p>
            Grab a trail map, check campsite availability, and pack the fishing license — the park's open every day,
            year-round.
          </p>
          <div className="cta-actions">
            <a href={SOURCES.stateParkTrailMap} target="_blank" rel="noreferrer" className="btn btn-cta-solid">Official Park Map</a>
            <a href={SOURCES.stateParkCamping} target="_blank" rel="noreferrer" className="btn btn-cta-line">Camping & Reservations</a>
          </div>
        </div>
      </section>
    </>
  );
}

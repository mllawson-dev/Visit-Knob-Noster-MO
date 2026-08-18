import PageHero from "../components/PageHero";
import TicketStrip from "../components/TicketStrip";
import SectionHead from "../components/SectionHead";
import { TRAILS, SEASONS } from "../data/trails";
import { PHOTOS } from "../data/photos";
import "./StatePark.css";

const STATS = [
  { label: "Acreage", value: "3,600+ Acres" },
  { label: "Trails", value: "7 Trails, 18 Mi" },
  { label: "Lakes", value: "Buteo & Clearfork" },
  { label: "Opened", value: "1933" },
];

const BLAZE_CLASS = { yellow: "blaze-yellow", green: "blaze-green", white: "blaze-white" };

export default function StatePark() {
  return (
    <>
      <PageHero
        variant="forest"
        crumb="State Park"
        title={<>Knob Noster<br />State Park</>}
        photo={PHOTOS.forestTrail.url}
        photoAlt={PHOTOS.forestTrail.alt}
        scene={
          <div className="park-scene" aria-hidden="true">
            <svg viewBox="0 0 1200 180" preserveAspectRatio="none">
              <path d="M0 160 Q200 60 420 150 T900 120 T1200 140 L1200 180 L0 180 Z" fill="#2B3D25" />
              <g fill="#233019">
                <path d="M60 160 L60 100 L52 108 M60 100 L68 108" stroke="#233019" strokeWidth="4" fill="none" />
                <path d="M140 160 L140 90 L130 100 M140 90 L150 100" stroke="#233019" strokeWidth="4" fill="none" />
                <path d="M980 155 L980 95 L970 105 M980 95 L990 105" stroke="#233019" strokeWidth="4" fill="none" />
                <path d="M1060 158 L1060 105 L1052 113 M1060 105 L1068 113" stroke="#233019" strokeWidth="4" fill="none" />
              </g>
            </svg>
          </div>
        }
      >
        3,600 acres of oak-hickory woods, restored savanna, and prairie folded around the meandering Clearfork Creek
        — a quiet green half to a town best known for the sky above it.
      </PageHero>

      <TicketStrip items={STATS} />

      <section className="trails">
        <div className="wrap">
          <SectionHead kicker="On the trail" kickerModifier="kicker--sage" title="Seven trails, one creek running through them all">
            From a half-mile wildflower loop to a 7-mile ride through old-growth timber, the park's trail system is
            built for every kind of visit.
          </SectionHead>
        </div>
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
              Two small lakes plus the Clearfork itself give anglers plenty of bank access — no boat launch, but
              canoes and kayaks can be hand-carried in, and electric trolling motors are welcome.
            </p>
            <ul>
              <li>Bass, bluegill, crappie &amp; channel catfish</li>
              <li>Valid Missouri fishing license required</li>
              <li>Sunrise to sunset daily</li>
            </ul>
          </div>
          <div className="split-card">
            <span className="tag">Camping</span>
            <h3>Wooded, level & well-shaded sites</h3>
            <p>
              The campground offers basic and electric sites with a recently renovated bathhouse, plus backpack
              camps along the McAdoo Trail for a deeper-in-the-woods night.
            </p>
            <ul>
              <li>Basic &amp; electric sites, ADA accessible</li>
              <li>Seasonal — closed in winter</li>
              <li>Reserve ahead for fall weekends</li>
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
                <h4>{s.title}</h4>
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
              Knob Noster State Park opened in 1933, built through the combined work of the Civilian Conservation
              Corps and the Works Progress Administration to reclaim land that had once been farmed and mined.
              Several structures from that era are now listed on the National Register of Historic Places — a quiet
              layer of history under the tree cover.
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
            <a href="#" className="btn btn-cta-solid">
              Download Trail Map
            </a>
            <a href="#" className="btn btn-cta-line">
              Reserve a Campsite
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

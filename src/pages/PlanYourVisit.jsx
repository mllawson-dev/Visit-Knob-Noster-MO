import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import TicketStrip from "../components/TicketStrip";
import SectionHead from "../components/SectionHead";
import WeatherWidget from "../components/WeatherWidget";
import { DRIVE_TIMES, STAY_OPTIONS, KNOW_BEFORE_YOU_GO, FAQS } from "../data/routes";
import "./PlanYourVisit.css";

const STATS = [
  { label: "From Kansas City", value: "68 mi · 1h 9m" },
  { label: "Nearest Highway", value: "U.S. Route 50" },
  { label: "Time Zone", value: "Central" },
  { label: "Best Season", value: "Fall & Spring" },
];

export default function PlanYourVisit() {
  return (
    <>
      <PageHero variant="poster" crumb="Plan Your Visit" title={<>Plan Your<br />Visit</>} stampLines={["Est.", "1856", "•"]}>
        Everything you need to get here, find a place to sleep, and time your trip right — from a two-hour Kansas
        City day trip to a full weekend on the prairie.
      </PageHero>

      <TicketStrip items={STATS} />

      <section className="weather-section">
        <div className="wrap">
          <SectionHead kicker="Before you go" title="Check conditions before you pack">
            Live current conditions for Knob Noster, plus the next few days.
          </SectionHead>
          <div className="weather-wrap">
            <WeatherWidget />
          </div>
        </div>
      </section>

      <section className="route" id="route">
        <div className="wrap">
          <div>
            <SectionHead kicker="Getting here" title="Right on Route 50" />
            <p style={{ fontSize: "16px", lineHeight: 1.65, color: "#4C4038", marginBottom: "24px", marginTop: "-24px" }}>
              Knob Noster sits directly on U.S. Route 50, about nine miles east of Warrensburg and eleven miles west
              of Sedalia — an easy stop for anyone crossing Missouri, and a straightforward day trip from Kansas
              City.
            </p>
            <div className="route-list">
              {DRIVE_TIMES.map((r) => (
                <div className="route-row" key={r.name}>
                  <div>
                    <div className="rn">{r.name}</div>
                    <span className="rt">{r.via}</span>
                  </div>
                  <div className="rd">{r.distance}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "13.5px", color: "#6B6156", marginTop: "16px" }}>
              Closest commercial airports are Kansas City International (MCI) and Columbia Regional (COU), each
              roughly 90 minutes away by car.
            </p>
          </div>
          <div className="route-map" aria-hidden="true">
            <svg viewBox="0 0 460 380" width="100%">
              <circle cx="90" cy="70" r="7" fill="#211935" />
              <text x="104" y="66" fontFamily="Libre Franklin" fontWeight="700" fontSize="13" fill="#241C1C">
                Kansas City
              </text>
              <text x="104" y="82" fontFamily="Libre Franklin" fontSize="10.5" fill="#6B6156">
                68 mi
              </text>

              <circle cx="360" cy="60" r="6" fill="#211935" />
              <text x="278" y="56" fontFamily="Libre Franklin" fontWeight="700" fontSize="13" fill="#241C1C">
                Columbia
              </text>
              <text x="322" y="72" fontFamily="Libre Franklin" fontSize="10.5" fill="#6B6156">
                85 mi
              </text>

              <circle cx="150" cy="230" r="6" fill="#211935" />
              <text x="60" y="252" fontFamily="Libre Franklin" fontWeight="700" fontSize="13" fill="#241C1C">
                Warrensburg
              </text>

              <circle cx="330" cy="235" r="6" fill="#211935" />
              <text x="342" y="252" fontFamily="Libre Franklin" fontWeight="700" fontSize="13" fill="#241C1C">
                Sedalia
              </text>

              <circle cx="240" cy="220" r="10" fill="#C6572E" />
              <text x="196" y="205" fontFamily="Big Shoulders Display" fontWeight="800" fontSize="16" fill="#C6572E" letterSpacing="0.02em">
                KNOB NOSTER
              </text>

              <path d="M90 70 Q160 150 240 220" stroke="#C6572E" strokeWidth="1.4" fill="none" strokeDasharray="5 5" opacity="0.7" />
              <path d="M360 60 Q310 150 240 220" stroke="#C6572E" strokeWidth="1.4" fill="none" strokeDasharray="5 5" opacity="0.7" />
              <path d="M150 230 L240 220" stroke="#C6572E" strokeWidth="1.4" fill="none" strokeDasharray="5 5" opacity="0.7" />
              <path d="M330 235 L240 220" stroke="#C6572E" strokeWidth="1.4" fill="none" strokeDasharray="5 5" opacity="0.7" />

              <text x="20" y="340" fontFamily="Special Elite" fontSize="10.5" fill="#8A8069" letterSpacing="0.06em">
                NOT TO SCALE — FOR ORIENTATION ONLY
              </text>
            </svg>
          </div>
        </div>
      </section>

      <section className="stay">
        <div className="wrap">
          <SectionHead kicker="Where to stay" title="Camp, or bunk nearby">
            Knob Noster itself is short on lodging, so most visitors either camp in the state park or base out of
            Warrensburg or Sedalia, both under 15 minutes away.
          </SectionHead>
        </div>
        <div className="stay-grid">
          {STAY_OPTIONS.map((s) => (
            <div className="stay-card" key={s.title}>
              <span className="tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="know">
        <div className="wrap">
          <SectionHead kicker="Know before you go" kickerModifier="kicker--gold" title="A few things locals would tell you" style={{ color: "var(--cream)" }} />
          <div className="know-grid">
            {KNOW_BEFORE_YOU_GO.map((k) => (
              <div className="know-item" key={k.num}>
                <div className="kn">{k.num}</div>
                <div>
                  <h4>{k.title}</h4>
                  <p>{k.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="wrap">
          <SectionHead kicker="Common questions" title="Frequently asked" />
        </div>
        <div className="faq-grid">
          {FAQS.map((f) => (
            <div className="faq-card" key={f.q}>
              <div className="q">{f.q}</div>
              <h4>{f.title}</h4>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta cta--rust">
        <div className="wrap">
          <h2>Time to Hit the Road</h2>
          <p>Grab the visitor guide for a printable map, then set your GPS for Knob Noster, Missouri.</p>
          <div className="cta-actions">
            <a href="#" className="btn btn-cta-solid">
              Download Visitor Guide
            </a>
            <Link to="/itinerary" className="btn btn-cta-line">
              See a Sample Itinerary
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

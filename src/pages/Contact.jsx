import PageHero from "../components/PageHero";
import { SOURCES } from "../data/sources";
import "./UtilityPages.css";

export default function Contact() {
  return (
    <div className="utility-page">
      <PageHero variant="poster" crumb="Contact & Sources" title={<>Contact &<br />Sources</>}>
        Go straight to the organization that owns the latest business, park, or base information.
      </PageHero>
      <section className="utility-body"><div className="wrap utility-grid"><div className="utility-block">
        <h2>Visitor and business questions</h2><p><strong>Knob Noster Chamber of Commerce</strong><br />PO Box 31, Knob Noster, MO 65336<br /><a href="mailto:hello@knchamber.org">hello@knchamber.org</a></p>
        <h2>State park questions</h2><p><strong>Knob Noster State Park</strong><br />873 SE 10, Knob Noster, MO 65336<br /><a href="tel:+16605632463">660-563-2463</a></p>
        <h2>Whiteman tours and access</h2><p>Use Whiteman Air Force Base's official tour and access pages for eligibility, documentation, and current security guidance.</p>
      </div><aside className="resource-card"><h2>Primary sources</h2><div className="resource-links">
        <a href={SOURCES.chamberContact} target="_blank" rel="noreferrer">Chamber contact page</a>
        <a href={SOURCES.chamberDirectory} target="_blank" rel="noreferrer">Chamber member directory</a>
        <a href={SOURCES.statePark} target="_blank" rel="noreferrer">Knob Noster State Park</a>
        <a href={SOURCES.whitemanTours} target="_blank" rel="noreferrer">Whiteman base tours</a>
        <a href={SOURCES.whitemanAccess} target="_blank" rel="noreferrer">Whiteman base access</a>
      </div></aside></div></section>
    </div>
  );
}

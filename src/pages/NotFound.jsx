import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import "./UtilityPages.css";

export default function NotFound() {
  return <div className="utility-page"><PageHero variant="poster" crumb="404" title={<>Wrong<br />Turn</>}>That page is not on the map, but the trip can keep moving.</PageHero><section className="utility-body"><div className="wrap utility-block"><h2>Head back to a known route</h2><p>Return to the visitor overview or open the trip planner for verified maps and official destinations.</p><div className="print-actions"><Link className="btn btn-solid" to="/">Visitor overview</Link><Link className="btn btn-outline-ink" to="/plan-your-visit">Plan a trip</Link></div></div></section></div>;
}

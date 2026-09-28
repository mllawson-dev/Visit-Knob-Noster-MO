import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const META = {
  "/": ["Visit Knob Noster, Missouri", "Plan a grounded small-town Missouri trip with official park, downtown, and Whiteman visitor resources."],
  "/things-to-do": ["Things to Do in Knob Noster | Visit Knob Noster", "Explore verified outdoor, downtown, community, and aviation-related visitor ideas in Knob Noster, Missouri."],
  "/state-park": ["Knob Noster State Park Guide | Visit Knob Noster", "Plan a visit to Knob Noster State Park with current trail, camping, map, and official park links."],
  "/downtown": ["Downtown Knob Noster | Visit Knob Noster", "Browse verified Chamber-member stops in walkable downtown Knob Noster, Missouri."],
  "/plan-your-visit": ["Plan a Trip to Knob Noster | Visit Knob Noster", "Get practical directions, lodging context, weather, park information, and official resources for Knob Noster."],
  "/itinerary": ["Knob Noster Itineraries | Visit Knob Noster", "Choose a responsible half-day, full-day, or weekend itinerary for Knob Noster, Missouri."],
  "/visitor-guide": ["Printable Knob Noster Visitor Guide", "A concise, printable trip guide with verified official resources for Knob Noster, Missouri."],
  "/accessibility": ["Accessibility | Visit Knob Noster", "Accessibility statement and assistance information for the Visit Knob Noster concept site."],
  "/contact": ["Visitor Contacts | Visit Knob Noster", "Contact the official organizations responsible for Knob Noster visitor, park, and base-tour information."],
};

export default function Layout({ children }) {
  const location = useLocation();

  useEffect(() => {
    const [title, description] = META[location.pathname] || ["Page Not Found | Visit Knob Noster", "The requested page could not be found."];
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);

    const anchor = location.hash ? document.getElementById(location.hash.slice(1)) : null;
    if (anchor) {
      requestAnimationFrame(() => anchor.scrollIntoView());
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    requestAnimationFrame(() => document.querySelector("h1")?.focus({ preventScroll: true }));
  }, [location.pathname, location.hash]);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1} key={location.pathname}>{children}</main>
      <Footer />
    </>
  );
}

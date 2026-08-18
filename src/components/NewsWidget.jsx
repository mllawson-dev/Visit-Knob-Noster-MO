import { useEffect, useState } from "react";
import "./NewsWidget.css";

const FEED_QUERY = `"Knob Noster" OR "Whiteman Air Force Base"`;
const GOOGLE_NEWS_RSS = `https://news.google.com/rss/search?q=${encodeURIComponent(FEED_QUERY)}&hl=en-US&gl=US&ceid=US:en`;
const RSS_TO_JSON = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(GOOGLE_NEWS_RSS)}&count=5`;

function formatDate(pubDate) {
  try {
    return new Date(pubDate).toLocaleDateString("en-US", { month: "short", day: "numeric" });
  } catch {
    return "";
  }
}

// Google News RSS titles arrive as "Headline - Source"; split those apart.
function splitTitle(title) {
  const idx = title.lastIndexOf(" - ");
  if (idx === -1) return { headline: title, source: "" };
  return { headline: title.slice(0, idx), source: title.slice(idx + 3) };
}

export default function NewsWidget() {
  const [state, setState] = useState({ status: "loading", items: [] });

  useEffect(() => {
    let cancelled = false;
    fetch(RSS_TO_JSON)
      .then((res) => {
        if (!res.ok) throw new Error("News request failed");
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        if (data.status !== "ok" || !data.items?.length) throw new Error("No items");
        setState({ status: "ready", items: data.items.slice(0, 5) });
      })
      .catch(() => {
        if (!cancelled) setState({ status: "error", items: [] });
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="news-card">
      {state.status === "loading" && <p className="news-state">Loading the latest headlines…</p>}

      {state.status === "error" && (
        <p className="news-state">
          Couldn't load live headlines right now — try{" "}
          <a href={GOOGLE_NEWS_RSS.replace("rss/search", "search")} target="_blank" rel="noopener noreferrer">
            searching Google News directly
          </a>
          .
        </p>
      )}

      {state.status === "ready" && (
        <div className="news-list">
          {state.items.map((item) => {
            const { headline, source } = splitTitle(item.title);
            return (
              <a className="news-row" href={item.link} target="_blank" rel="noopener noreferrer" key={item.guid || item.link}>
                <div className="news-meta">
                  {source || "News"} &middot; {formatDate(item.pubDate)}
                </div>
                <div className="news-title">{headline}</div>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

import { UPCOMING_EVENTS, CHAMBER_EVENTS_URL, CHAMBER_NAME } from "../data/events";
import "./EventsWidget.css";

export default function EventsWidget() {
  return (
    <div className="events-card">
      <div className="events-list">
        {UPCOMING_EVENTS.map((ev) => (
          <a className="event-row" href={ev.url} target="_blank" rel="noopener noreferrer" key={ev.name}>
            <div className="event-date">
              <div className="ed-day">{ev.day}</div>
              <div className="ed-month">{ev.month}</div>
            </div>
            <div className="event-info">
              <h4>{ev.name}</h4>
              <div className="loc">
                {ev.weekday} &middot; {ev.location}
              </div>
            </div>
            <span className="event-rsvp">RSVP &rarr;</span>
          </a>
        ))}
      </div>
      <div className="events-footer">
        <span className="credit">Event details via {CHAMBER_NAME}</span>
        <a className="full-calendar" href={CHAMBER_EVENTS_URL} target="_blank" rel="noopener noreferrer">
          Full Calendar &rarr;
        </a>
      </div>
    </div>
  );
}

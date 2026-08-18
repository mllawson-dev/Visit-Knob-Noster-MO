import "./DayTimeline.css";

export default function DayTimeline({ days }) {
  return (
    <div className="day-strip">
      {days.map((day, i) => (
        <div key={i}>
          {day.label && (
            <div className="day-block">
              <div className="day-label">{day.label}</div>
            </div>
          )}
          {day.rows.map((row) => (
            <div className="day-row" key={row.time + row.title}>
              <div className="time">{row.time}</div>
              <div>
                <h5>{row.title}</h5>
                <p>{row.description}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

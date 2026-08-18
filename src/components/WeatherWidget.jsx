import { useEffect, useState } from "react";
import WeatherIcon from "./WeatherIcon";
import { describeWeatherCode, KNOB_NOSTER_COORDS } from "../data/weatherCodes";
import "./WeatherWidget.css";

const DAY_LABELS = ["Today", "Tomorrow"];

function dayLabel(dateStr, index) {
  if (index < DAY_LABELS.length) return DAY_LABELS[index];
  const date = new Date(dateStr + "T12:00:00");
  return date.toLocaleDateString("en-US", { weekday: "short" });
}

export default function WeatherWidget() {
  const [state, setState] = useState({ status: "loading", data: null });

  useEffect(() => {
    const { latitude, longitude } = KNOB_NOSTER_COORDS;
    const url =
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}` +
      `&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min` +
      `&temperature_unit=fahrenheit&timezone=America%2FChicago&forecast_days=4`;

    let cancelled = false;
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Weather request failed");
        return res.json();
      })
      .then((data) => {
        if (!cancelled) setState({ status: "ready", data });
      })
      .catch(() => {
        if (!cancelled) setState({ status: "error", data: null });
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="weather-card">
      <div className="weather-head">
        <h3>Current Conditions</h3>
        <span className="weather-updated">Knob Noster, MO</span>
      </div>

      {state.status === "loading" && <p className="weather-state">Loading current conditions…</p>}

      {state.status === "error" && (
        <p className="weather-state">Couldn't load live weather right now — check a forecast site before you head out.</p>
      )}

      {state.status === "ready" && state.data && (
        <>
          <div className="weather-now">
            <WeatherIcon kind={describeWeatherCode(state.data.current.weather_code).kind} size={44} className="icon" />
            <div>
              <div className="temp">{Math.round(state.data.current.temperature_2m)}&deg;F</div>
              <div className="cond">{describeWeatherCode(state.data.current.weather_code).label}</div>
            </div>
          </div>
          <div className="weather-forecast">
            {state.data.daily.time.slice(0, 4).map((date, i) => {
              const info = describeWeatherCode(state.data.daily.weather_code[i]);
              return (
                <div className="weather-day" key={date}>
                  <div className="wd-label">{dayLabel(date, i)}</div>
                  <WeatherIcon kind={info.kind} size={22} className="icon" />
                  <div className="wd-hi">{Math.round(state.data.daily.temperature_2m_max[i])}&deg;</div>
                  <div className="wd-lo">{Math.round(state.data.daily.temperature_2m_min[i])}&deg;</div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

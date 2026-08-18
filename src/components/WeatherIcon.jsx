const PATHS = {
  clear: (
    <>
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2.5v3M12 18.5v3M21.5 12h-3M5.5 12h-3M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1M18.4 18.4l-2.1-2.1M7.7 7.7 5.6 5.6" strokeLinecap="round" />
    </>
  ),
  cloud: (
    <path d="M7 18a4.5 4.5 0 0 1-.5-8.97A5.5 5.5 0 0 1 17.3 8.6 4 4 0 0 1 17 16.5H7Z" />
  ),
  rain: (
    <>
      <path d="M7 15a4.5 4.5 0 0 1-.5-8.97A5.5 5.5 0 0 1 17.3 5.6 4 4 0 0 1 17 13.5H7Z" />
      <path d="M8 17.5 7 20M12 17.5l-1 2.5M16 17.5l-1 2.5" strokeLinecap="round" />
    </>
  ),
  snow: (
    <>
      <path d="M7 14a4.5 4.5 0 0 1-.5-8.97A5.5 5.5 0 0 1 17.3 4.6 4 4 0 0 1 17 12.5H7Z" />
      <path d="M8 17v4M6 18.5l4 1M10 18.5l-4 1M16 17v4M14 18.5l4 1M18 18.5l-4 1" strokeLinecap="round" />
    </>
  ),
  storm: (
    <>
      <path d="M7 13a4.5 4.5 0 0 1-.5-8.97A5.5 5.5 0 0 1 17.3 3.6 4 4 0 0 1 17 11.5H7Z" />
      <path d="M13 13.5 10 18h3l-2 4.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  fog: (
    <>
      <path d="M6 10.5h9M4 14h13M6 17.5h9" strokeLinecap="round" />
    </>
  ),
};

export default function WeatherIcon({ kind = "clear", size = 28, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      {PATHS[kind] || PATHS.clear}
    </svg>
  );
}

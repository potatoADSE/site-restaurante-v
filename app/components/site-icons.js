const paths = {
  whatsapp: (
    <>
      <path d="M20.5 11.8a8.6 8.6 0 0 1-12.7 7.5L3 20.5l1.3-4.6a8.6 8.6 0 1 1 16.2-4.1Z" />
      <path d="M8.4 8.2c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.8 1.8c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4 0 .6.5.9 1.2 1.6 2.1 2.1.2.1.4.1.6-.1l.8-.9c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.3.4.5 0 .5-.3 1.4-.8 1.8-.5.5-1.3.8-2.1.7-1-.1-2.3-.6-3.7-1.8-1.8-1.5-2.9-3.4-3.2-4.4-.3-1 .1-1.8.5-2.4Z" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle className="icon-fill" cx="17.7" cy="6.5" r="1" />
    </>
  ),
  pin: (
    <>
      <path d="M19 10.2c0 5-7 11-7 11s-7-6-7-11a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10" r="2.2" />
    </>
  ),
  arrow: <path d="M4.5 12h14m-6-6 6 6-6 6" />,
};

export default function Icon({ name, className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={`icon ${className}`.trim()}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

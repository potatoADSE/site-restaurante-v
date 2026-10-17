export default function CoastIllustration({ variant = "home" }) {
  const titleId = `coast-illustration-${variant}`;

  return (
    <figure className={`coast-illustration coast-illustration-${variant}`}>
      <svg
        viewBox="0 0 680 560"
        role="img"
        aria-labelledby={titleId}
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id={titleId}>
          Ilustração abstrata inspirada no litoral potiguar; não é uma fotografia
          do restaurante.
        </title>
        <rect width="680" height="560" rx="28" fill="#dce7e1" />
        <circle cx="497" cy="151" r="69" fill="#e6a67e" />
        <path
          d="M0 293c99-51 192-56 285-12 92 45 174 46 250 5 49-26 97-32 145-20v294H0V293Z"
          fill="#7a9c91"
        />
        <path
          d="M0 360c111-40 222-36 333 13 111 48 222 51 347 4v183H0V360Z"
          fill="#315d63"
        />
        <path
          d="M0 454c114-37 226-35 337 7 113 43 228 40 343-8v107H0V454Z"
          fill="#17424e"
        />
        <path
          d="M0 311c100-50 194-57 286-21-29 15-53 33-71 54-44 51-97 79-159 86-20 2-38 1-56-2V311Z"
          fill="#f0e1c7"
        />
        <path
          d="M0 427c63 10 117 4 161-17 42-20 73-51 94-91 10 3 21 7 31 12-24 50-61 90-111 118-50 28-108 39-175 33v-55Z"
          fill="#f7f4ef"
        />
        <path
          d="M467 331c34-34 63-61 92-80m-58 91c30-27 60-49 96-64"
          fill="none"
          stroke="#f7f4ef"
          strokeWidth="3"
          strokeLinecap="round"
          opacity=".76"
        />
        <path
          d="M458 191c-19 9-33 24-40 43m56-30c-15 9-26 21-31 37"
          fill="none"
          stroke="#315d63"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M552 219c18-17 36-29 54-36m-49 57c22-13 43-21 66-24"
          fill="none"
          stroke="#315d63"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <figcaption>
        Ilustração editorial do litoral, sem representar o restaurante ou pratos servidos.
      </figcaption>
    </figure>
  );
}

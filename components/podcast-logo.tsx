export function PodcastLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 8a6 6 0 0 0-9.33-5" stroke="#FFC333" />
      <path d="m10 2 1 2-1 2" stroke="#FFC333" />
      <path d="M6 16a6 6 0 0 0 11.43-3.95" stroke="#FFC333" />
      <path d="M12 10v4" stroke="#FFC333" />
      <path d="M8 16h8" stroke="#FFC333" />
      <path d="M16 16v6" />
      <path d="M8 16v6" />
      <path d="M12 20v2" />
    </svg>
  )
}

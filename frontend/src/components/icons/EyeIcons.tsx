type EyeIconProps = {
  open: boolean;
};

export function EyeIcon({ open }: EyeIconProps) {
  if (open) {
    // Eye open
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12s3.75-7.5 9.75-7.5S21.75 12 21.75 12s-3.75 7.5-9.75 7.5S2.25 12 2.25 12z"
        />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }

  // Eye closed
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3l18 18"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.58 10.58a3 3 0 004.24 4.24"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.71 6.71C4.24 8.41 2.25 12 2.25 12s3.75 7.5 9.75 7.5c1.77 0 3.39-.46 4.83-1.23"
      />
    </svg>
  );
}

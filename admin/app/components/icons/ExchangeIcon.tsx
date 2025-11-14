interface IconProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function ExchangeIcon({ width = 24, height = 24, className = "" }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7 10L3 6M3 6L7 2M3 6H16C17.0609 6 18.0783 6.42143 18.8284 7.17157C19.5786 7.92172 20 8.93913 20 10V11M17 14L21 18M21 18L17 22M21 18H8C6.93913 18 5.92172 17.5786 5.17157 16.8284C4.42143 16.0783 4 15.0609 4 14V13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
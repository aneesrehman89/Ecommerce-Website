interface IconProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function ChartIcon({ width = 24, height = 24, className = "" }: IconProps) {
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
        d="M18 20V10M12 20V4M6 20V14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
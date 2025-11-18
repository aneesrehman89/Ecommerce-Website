interface IconProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function ToolsIcon({ width = 24, height = 24, className = "" }: IconProps) {
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
        d="M14.7 6.3C15.0834 5.91663 15.5368 5.61119 16.0357 5.40224C16.5346 5.19329 17.0696 5.08523 17.61 5.08523C18.1504 5.08523 18.6854 5.19329 19.1843 5.40224C19.6832 5.61119 20.1366 5.91663 20.52 6.3C20.9034 6.68337 21.2088 7.13681 21.4178 7.63569C21.6267 8.13458 21.7348 8.66961 21.7348 9.21C21.7348 9.75039 21.6267 10.2854 21.4178 10.7843C21.2088 11.2832 20.9034 11.7366 20.52 12.12L12 20.64L8 21.64L9 17.64L17.52 9.12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8L6 2L3 3L2 6L8 12M12 8L16 12M12 8L8 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
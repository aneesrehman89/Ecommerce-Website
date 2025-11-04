interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export default function InfoIcon({ width = 24, height = 24, color = "currentColor", className = "" }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
      <path d="M12 16V12M12 8H12.01" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
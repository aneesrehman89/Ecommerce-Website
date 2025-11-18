interface IconProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function MoreVerticalIcon({ width = 24, height = 24, className = "" }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12" cy="12" r="1" fill="currentColor"/>
      <circle cx="12" cy="5" r="1" fill="currentColor"/>
      <circle cx="12" cy="19" r="1" fill="currentColor"/>
    </svg>
  );
}
interface IconProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function UploadIcon({ width = 24, height = 24, className = "" }: IconProps) {
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
        d="M7 18C4.23858 18 2 15.7614 2 13C2 10.2386 4.23858 8 7 8C7.33333 8 7.66667 8.03333 8 8.1M16 8.1C16.3333 8.03333 16.6667 8 17 8C19.7614 8 22 10.2386 22 13C22 15.7614 19.7614 18 17 18M12 21V11M12 11L9 14M12 11L15 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
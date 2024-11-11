import { LucideProps } from "lucide-react";

export const Logo = (props: LucideProps) => {
  return (
    <svg
      width="123"
      height="86"
      viewBox="0 0 123 86"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_16_68)">
        <path
          d="M63.88 0.27002V85.25H61.1L4.79 6.93002V85.27H3.45V5.07002L0 0.27002H11.13L62.55 72.26V0.27002H63.88Z"
          fill="#FE9361"
        />
        <path
          d="M93.32 73.83V85.03H90.54L34.23 6.66L32.89 4.8L29.44 0H40.57L93.32 73.83Z"
          fill="#284E76"
        />
        <path
          d="M122.87 73.83V85.03H120.09L63.78 6.66L62.44 4.8L58.99 0H70.12L122.87 73.83Z"
          fill="#284E76"
        />
      </g>
      <defs>
        <clipPath id="clip0_16_68">
          <rect width="122.87" height="85.27" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

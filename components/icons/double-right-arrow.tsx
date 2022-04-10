import { IconProps } from './types';

export default ({ size = 12, stroke = '#27A2F8' }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66668 0.833252L11.3333 5.49992L6.66668 10.1666M1.33334 0.833252L6.00001 5.49992L1.33334 10.1666"
        stroke={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

import { IconProps } from '../../interfaces/props.interface';

function ChevronDoubleRight({ onClick }: IconProps) {
  return (
    <svg
      className="w-4 sm:w-6 hover:animate-ping"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick as React.MouseEventHandler<SVGSVGElement>}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 5l7 7-7 7M5 5l7 7-7 7"
      />
    </svg>
  );
}

export default ChevronDoubleRight;

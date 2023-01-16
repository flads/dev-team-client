import { ClickableIcon } from '../../interfaces/components/icons.interface';

function Return({ onClick }: ClickableIcon) {
  return (
    <svg
      className="w-6 h-6 cursor-pointer text-gray-500"
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
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  );
}

export default Return;

import { ClickableIcon } from '../../interfaces/components/icons.interface';

function CloseIcon({ onClick }: ClickableIcon) {
  return (
    <svg
      className="w-6 h-6 cursor-pointer"
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
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

export default CloseIcon;

import { ClickableIcon } from '../../interfaces/components/icons.interface';

function AddIcon({ onClick }: ClickableIcon) {
  return (
    <button
      type="button"
      className="mr-2 flex items-center justify-center text-white bg-gradient-to-l from-blue-500 to-blue-400 rounded-full w-8 sm:w-10 h-8 sm:h-10 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
    >
      <svg
        aria-hidden="true"
        className="w-8 h-8 transition-transform group-hover:rotate-45"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        ></path>
      </svg>
    </button>
  );
}

export default AddIcon;

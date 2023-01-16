import { ButtonProps } from '../../interfaces/dropdown.interface';

function DropdownButton({ children, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
      id="menu-button"
      aria-expanded="true"
      aria-haspopup="true"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default DropdownButton;

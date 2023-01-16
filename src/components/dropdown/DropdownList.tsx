import { DropdownListProps } from '../../interfaces/dropdown.interface';

function DropdownList({ children }: DropdownListProps) {
  return (
    <div
      className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabIndex={-1}
      id="Dropdown"
    >
      <div className="py-1" role="none">
        {Array.isArray(children) ? children.map((child) => child) : children}
      </div>
    </div>
  );
}

export default DropdownList;

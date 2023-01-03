import { DropdownItemProps } from '../interfaces/dropdown.interface';

function DropdownItem({ children, onClick }: DropdownItemProps) {
  return (
    <div
      className="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
      role="menuitem"
      tabIndex={-1}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default DropdownItem;

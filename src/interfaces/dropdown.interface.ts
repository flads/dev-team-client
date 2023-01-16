export interface DropdownListProps {
  children?: React.ReactNode;
}

export interface DropdownItemProps {
  isActive: boolean;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export interface ButtonProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

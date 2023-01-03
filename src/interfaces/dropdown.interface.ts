import { MouseEventHandler } from 'react';

export interface DropdownListProps {
  children?: React.ReactNode;
}

export interface DropdownItemProps {
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

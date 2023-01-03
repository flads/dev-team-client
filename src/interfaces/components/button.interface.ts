import { MouseEventHandler } from 'react';

export interface ButtonProps {
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

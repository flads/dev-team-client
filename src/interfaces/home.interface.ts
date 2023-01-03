import { MouseEventHandler } from 'react';

export interface HomeItem {
  title: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

import { Clickable } from '../common.interface';

export interface ClickableIcon {
  onClick?: Clickable;
}

export interface SVGIcon {
  className?: string;
  fill?: string;
  stroke?: string;
  viewBox?: string;
  onClick?: Clickable;
}

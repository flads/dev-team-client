import { MouseEventHandler } from 'react';
import { ObjectLiteral } from '../object-literal';

export interface TableProps {
  columnNames: string[];
  rows: ObjectLiteral[];
  modelName: string;
}

export interface TableHeadProps {
  columnNames: string[];
}

export interface TableBodyProps {
  rows: ObjectLiteral[];
  columnNames: string[];
  modelName: string;
}

export interface RowProps {
  model: ObjectLiteral;
  columnNames: string[];
  modelName: string;
}

export interface ColumnProps {
  name: string;
  sort?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

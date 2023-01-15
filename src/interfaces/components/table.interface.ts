import { ObjectLiteral } from '../object-literal';

export interface TableProps {
  styles?: string;
  columnNames: string[];
  pageRows: ObjectLiteral[];
  take: number;
  skip: number;
  totalRowsCount: number;
  modelName: string;
  initialPagination: number;
  goToPage: (page: number) => void;
  setPagination: (page: number) => void;
  onSearch: React.ChangeEventHandler<HTMLInputElement>;
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
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export interface SetPaginationProps {
  initialPagination: number;
  modelName: string;
  setPagination: (page: number) => void;
}

export interface PaginationProps {
  rowsCount: number;
  take: number;
  totalRowsCount: number;
  goToPage: (page: number) => void;
}

export interface SearchProps {
  modelName: string;
  onSearch: React.ChangeEventHandler<HTMLInputElement>;
}

import { TableHeadProps } from '../../interfaces/components/table.interface';
import ColumnName from './ColumnName';

function TableHead({ columnNames }: TableHeadProps) {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        {columnNames.map((name: string) => (
          <ColumnName key={name} name={name} sort={true} />
        ))}
        <ColumnName name="Ação" />
      </tr>
    </thead>
  );
}

export default TableHead;

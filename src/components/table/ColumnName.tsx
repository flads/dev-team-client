import { ColumnProps } from '../../interfaces/components/table.interface';
import SortIcon from '../icons/Sort';

function ColumnName({ name, sort = false }: ColumnProps) {
  return (
    <th scope="col" className="py-3 px-6">
      <div className="flex items-center">
        {name}
        {sort && <SortIcon />}
      </div>
    </th>
  );
}

export default ColumnName;

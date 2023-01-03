import Pagination from './Pagination';
import Search from './Search';
import SetPagination from './SetPagination';
import { TableProps } from '../../interfaces/components/table.interface';
import TableHead from './TableHead';
import TableBody from './TableBody';

function Table({ columnNames, rows, modelName }: TableProps) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between">
        <SetPagination />
        <Search />
      </div>

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <TableHead columnNames={columnNames} />
          <TableBody
            rows={rows}
            columnNames={columnNames}
            modelName={modelName}
          />
        </table>
      </div>
      <Pagination />
    </div>
  );
}

export default Table;

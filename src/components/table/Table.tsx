import Pagination from './Pagination';
import Search from './Search';
import SetPagination from './SetPagination';
import { TableProps } from '../../interfaces/components/table.interface';
import TableHead from './TableHead';
import TableBody from './TableBody';

function Table({
  columnNames,
  pageRows,
  take,
  totalRowsCount,
  modelName,
  initialPagination,
  goToPage,
  setPagination,
  onSearch,
}: TableProps) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between">
        <SetPagination
          initialPagination={initialPagination}
          modelName={modelName}
          setPagination={setPagination}
        />
        <Search modelName={modelName} onSearch={onSearch} />
      </div>

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table
          className={`w-full text-sm text-left text-gray-500 dark:text-gray-400 ${
            !pageRows.length ? 'bg-white' : ''
          }`}
        >
          <TableHead columnNames={columnNames} />
          <TableBody
            rows={pageRows}
            columnNames={columnNames}
            modelName={modelName}
          />
        </table>
      </div>
      {pageRows.length ? (
        <Pagination
          rowsCount={pageRows.length}
          take={take}
          totalRowsCount={totalRowsCount}
          goToPage={goToPage}
        />
      ) : (
        ''
      )}
    </div>
  );
}

export default Table;

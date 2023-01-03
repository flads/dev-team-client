import { TableBodyProps } from '../../interfaces/components/table.interface';
import { ObjectLiteral } from '../../interfaces/object-literal';
import Row from './Row';

function TableBody({ rows, columnNames, modelName }: TableBodyProps) {
  return rows.length ? (
    <tbody>
      {rows.map((row: ObjectLiteral) => {
        return (
          <Row
            key={row.id}
            columnNames={columnNames}
            model={row}
            modelName={modelName}
          />
        );
      })}
    </tbody>
  ) : (
    <tbody>
      <tr className="flex justify-center w-full text-sm p-4">
        <td>No {modelName}s.</td>
      </tr>
    </tbody>
  );
}

export default TableBody;

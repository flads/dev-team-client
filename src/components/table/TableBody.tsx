import { ObjectLiteral } from '../../interfaces/object-literal';
import { TableBodyProps } from '../../interfaces/components/table.interface';
import { useTranslation } from 'react-i18next';
import Row from './Row';

function TableBody({ rows, columnNames, modelName }: TableBodyProps) {
  const { t } = useTranslation('common');

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
        <td>{t(`${modelName}.no_records`)}</td>
      </tr>
    </tbody>
  );
}

export default TableBody;

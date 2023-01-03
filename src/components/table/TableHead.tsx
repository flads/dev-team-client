import { TableHeadProps } from '../../interfaces/components/table.interface';
import { useTranslation } from 'react-i18next';
import ColumnName from './ColumnName';

function TableHead({ columnNames }: TableHeadProps) {
  const { t } = useTranslation('common');

  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        {columnNames.map((name: string) => (
          <ColumnName key={name} name={t(`${name}`)} sort={true} />
        ))}
        <ColumnName name={t('action')} />
      </tr>
    </thead>
  );
}

export default TableHead;

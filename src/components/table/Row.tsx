import { RowProps } from '../../interfaces/components/table.interface';
import { useTranslation } from 'react-i18next';

function Row({ model, columnNames }: RowProps) {
  const { t } = useTranslation('common');

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      {columnNames.map((name) => {
        let value =
          typeof model[name] === 'number' ? model[name] : model[name] || '-';

        if (value.length >= 30) {
          value = value.slice(0, 25);
          value = value.concat('...');
        }

        return (
          <td key={name} className="py-4 px-6 whitespace-nowrap">
            {value}
          </td>
        );
      })}
      <td className="py-4 px-6 select-none">
        <a
          href="#"
          type="button"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          {t(`edit`)}
        </a>
      </td>
    </tr>
  );
}

export default Row;

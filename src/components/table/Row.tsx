import { RowProps } from '../../interfaces/components/table.interface';
import { useTranslation } from 'react-i18next';

function Row({ model, columnNames, modelName }: RowProps) {
  const { t } = useTranslation('common');

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      {columnNames.map((name) => {
        return (
          <td key={name} className="py-4 px-6">
            {model[name]}
          </td>
        );
      })}
      <td className="py-4 px-6">
        <a
          href="#"
          type="button"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          {t(`${modelName}.edit_one`)}
        </a>
      </td>
    </tr>
  );
}

export default Row;

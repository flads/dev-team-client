import { RowProps } from '../../interfaces/components/table.interface';

function Row({ model, columnNames, modelName }: RowProps) {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      {columnNames.map((element) => {
        return (
          <td key={element} className="py-4 px-6">
            {model[element]}
          </td>
        );
      })}
      <td className="py-4 px-6">
        <a
          href="#"
          type="button"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit {modelName && modelName}
        </a>
      </td>
    </tr>
  );
}

export default Row;

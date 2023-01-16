import { SelectProps } from '../../interfaces/components/forms.interface';

function Select({ name, id, value, items, onChange, isEditing }: SelectProps) {
  if (isEditing) {
    return (
      <div className="mt-1 flex rounded-md shadow-sm">
        <select
          id={id}
          name={name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer"
          onChange={onChange}
        >
          {items.map((item) => {
            return (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }

  return (
    <div className="flex justify-start">
      <p className="mt-1 block text-md font-medium text-gray-500">{value}</p>
    </div>
  );
}

export default Select;

import { InputProps } from '../../interfaces/components/forms.interface';

function Input({
  type,
  preSpan,
  name,
  id,
  value,
  placeholder,
  onChange,
  isEditing,
}: InputProps) {
  const baseClass =
    'block w-full flex-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm';
  const disabledClass =
    'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none';
  const className = `${baseClass} ${disabledClass} ${
    preSpan ? 'rounded-none rounded-r-md' : 'rounded-md mt-1'
  }`;

  if (isEditing) {
    return (
      <div className={preSpan ? 'mt-1 flex rounded-md shadow-sm' : ''}>
        {preSpan && (
          <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
            {preSpan}
          </span>
        )}
        <input
          type={type}
          name={name}
          id={id}
          className={className}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    );
  }

  return (
    <div className="flex justify-start">
      <p className="mt-1 block text-md font-medium text-gray-500">
        {`${(preSpan || '') + value}`}
      </p>
    </div>
  );
}

export default Input;

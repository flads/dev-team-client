import { LabelProps } from '../../interfaces/components/forms.interface';

function Label({ required, htmlFor, children }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-gray-700 ${
        required ? 'required' : ''
      }`}
    >
      {children}
    </label>
  );
}

export default Label;

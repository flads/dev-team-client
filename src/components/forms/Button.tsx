import { ButtonProps } from '../../interfaces/components/forms.interface';

function Button({
  text = 'Salvar',
  loadingText = 'Salvando...',
  color = 'blue',
  type = 'button',
  loading = false,
  disabled,
  iconLeft,
  iconRight,
  styleName,
  onClick,
}: ButtonProps) {
  const colorClass =
    color !== 'transparent'
      ? `bg-${color}-500 focus:ring-${color}-500 disabled:bg-${color}-400 shadow hover:shadow-lg`
      : 'background-transparent';
  const textColorClass =
    color !== 'transparent' ? 'text-white' : 'text-gray-500';

  const child = (
    <>
      {iconLeft}
      {text || 'Salvar'}
      {iconRight && iconRight}
    </>
  );

  return (
    <>
      <button
        type={type}
        className={`
          inline-flex justify-center font-bold text-sm px-4 py-2
          rounded outline-none focus:outline-none mr-1 mb-1
          ease-linear transition-all duration-150
          ${colorClass} ${textColorClass} ${styleName}
        `}
        disabled={loading || disabled}
        onClick={onClick}
      >
        {!loading ? child : loadingText}
      </button>
      <span className={`hidden ${loadColors()}`}></span>
    </>
  );
}

function loadColors() {
  return `bg-red-500 bg-green-500 bg-blue-500 bg-yellow-500
    focus:ring-red-500 focus:ring-green-500 focus:ring-blue-500 focus:ring-yellow-500`;
}

export default Button;

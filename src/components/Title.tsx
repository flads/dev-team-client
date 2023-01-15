import { TitleProps } from '../interfaces/components/title.interface';

function Title({ children }: TitleProps) {
  return (
    <h1 className="mt-10 font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 select-none">
      {children}
    </h1>
  );
}

export default Title;

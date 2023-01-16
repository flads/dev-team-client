import { FormGroupProps } from '../../interfaces/components/forms.interface';

function FormGroup({ gridColsClass, children }: FormGroupProps) {
  if (Array.isArray(children)) {
    return (
      <div className={`grid ${gridColsClass} gap-4`}>
        {children?.map((child, index) => {
          return <div key={index}>{child}</div>;
        })}
      </div>
    );
  }

  return (
    <div className={`grid ${gridColsClass} gap-4`}>
      <div>{children}</div>
    </div>
  );
}

export default FormGroup;

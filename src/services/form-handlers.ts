import { ObjectLiteral } from '../interfaces/object-literal';

export function handleChange(
  form: ObjectLiteral,
  event: any
): ObjectLiteral | undefined {
  if (event) {
    const { name, type } = event.target;
    let { value } = event.target;

    if (type === 'checkbox') {
      value = !form[name];
    }

    return { ...form, [name]: value };
  }
}

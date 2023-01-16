import { ObjectLiteral } from '../interfaces/object-literal';

export function removeEmptyValues(data: ObjectLiteral): ObjectLiteral {
  for (const property of Object.entries(data)) {
    if (!property.pop()) {
      delete data[property.shift()];
    }
  }

  return data;
}

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

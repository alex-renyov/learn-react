import React from 'react';
import { FieldProps } from 'formik';

function padZero(s: string) : string {
  if (s.length === 1) {
    return '0' + s;
  }
  return s;
}

function dateToString(date: Date | null) : string {
  if (!date) {
    return ''
  };
  return `${date.getFullYear()}-${padZero((date.getMonth() + 1).toString())}-${padZero(date.getDate().toString())}`;
}

export function FormikDateSelect({ field, form, ...props }: FieldProps<Date>) {
  return (
    <input type="date"
           name={field.name}
           value={dateToString(field.value)}
           onChange={(e) => form.setFieldValue(field.name, new Date(e.target.value))}
           {...props} />
  );
}

import React, { Fragment } from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, FormikHelpers, FormikProps, ErrorMessage } from 'formik';

type FormValues = {
  login: string;
  password: string;
  passwordConfirm: string;
  email: string;
}

const formSchema = Yup.object<FormValues>().shape({
  login: Yup.string().nullable().required(),
  password: Yup.string().nullable().required(),
  passwordConfirm: Yup.string().nullable().required().when(
    'password',
    (password, schema: Yup.StringSchema) =>
      schema.equals([password], 'Passwords do not match')
  ),
  email: Yup.string().nullable().required().email()
});

const initialValues : FormValues = {
  login: '',
  password: '',
  passwordConfirm: '',
  email: ''
};

export default function RegistrationFormComponent() {
  const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
    console.log(values);
  }
  return (
    <Fragment>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={formSchema}>
        {
          ({
            handleSubmit, submitForm, isSubmitting, resetForm, errors, values
          } : FormikProps<FormValues>) => (
            <Form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="login">Login</label>
                <Field name="login" id="login" component="input" className="form-control" />
                <ErrorMessage name="login" component="span" className="form-text text-danger small" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field name="email" id="email" component="input" className="form-control" />
                <ErrorMessage name="email" component="span" className="form-text text-danger small" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field name="password" id="password" component="input" type="password" className="form-control" />
                <ErrorMessage name="password" component="span" className="form-text text-danger small" />
              </div>
              <div className="form-group">
                <label htmlFor="passwordConfirm">Password Confirmation</label>
                <Field name="passwordConfirm" id="passwordConfirm" component="input" type="password" className="form-control" />
                <ErrorMessage name="passwordConfirm" component="span" className="form-text text-danger small" />
              </div>
              <button type="button" className="btn btn-primary" onClick={submitForm} disabled={isSubmitting}>
                Отправить
              </button>
            </Form>
          )
        }
      </Formik>
    </Fragment>
  );
}

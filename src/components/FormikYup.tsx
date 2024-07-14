import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const FormikYup = () => {
  type FormValues = {
    email: string
    username: string
    password: string
  }
  const initialValues: FormValues = { email: '', username: '', password: '' }

  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Required')
      .email('Invalid email address'),
    username: Yup.string()
      .required('Username Required')
      .min(3, 'Must be 3 characters or more')
      .max(15, 'Must be 15 characters or less'),
    password: Yup.string()
      .required('Password Required')
      .min(5, 'Must be 3 characters or more')
      .max(15, 'Must be 15 characters or less')
      .matches(/[A-Z]/, 'Must contain 1 uppercase letter')
      .matches(/[a-z]/, 'Must contain 1 lowercase letter')
      .matches(/[0-9]/, 'Must contain 1 number')
      .matches(/[\W_]/, 'Must contain 1 special character')
  })

  const handleFormSubmit = (values: { username: string; password: string }) => {
    console.log(values)
    console.log(` Username: ${values.username} Password: ${values.password}`)
  }

  return (
    <div>
      <h1>Formik and Yup</h1>
      <Formik initialValues={initialValues} onSubmit={handleFormSubmit} validationSchema={validationSchema}>
        <Form className="mb-3" autoComplete="off">

          <div className="mb-3">
            <label htmlFor="mail" className='form-label'>Email:</label>
            <Field
              id="mail"
              type="mail"
              name="email"
              className='form-control'
              placeholder='Enter your email' />
            <ErrorMessage name="email" component="div" className="alert alert-danger" />
          </div>

          <div className="mb-3">
            <label htmlFor="name" className='form-label'>Username:</label>
            <Field
              id="name"
              type="text"
              name="username"
              className='form-control'
              placeholder='Enter your username' />
            <ErrorMessage name="username" component="div" className="alert alert-danger" />
          </div>

          <div className="mb-3">
            <label htmlFor="pass" className='form-label'>Password:</label>
            <Field
              id="pass"
              type="password"
              name="password"
              className='form-control'
              placeholder='Enter your password' />
            <ErrorMessage name="password" component="div" className="alert alert-danger" />
          </div>

          <Field as="button" type="submit" className="btn btn-primary">Submit</Field>

        </Form>
      </Formik>
    </div>
  )
}

export default FormikYup
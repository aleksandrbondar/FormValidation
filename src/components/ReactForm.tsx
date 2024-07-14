import { useForm } from 'react-hook-form'
const ReactForm = () => {
  type FormData = {
    email: string
    username: string
    password: string
  }
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    mode: 'onBlur',
  })

  const handleFormSubmit = (data: FormData) => {
    console.log(data)
    console.log(` Username: ${data.username} Password: ${data.password}`)
  }

  return (
    <div>
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="mb-3">


        <div className="mb-3">
          <label htmlFor="mail" className='form-label'>Email:</label>
          <input
            id="mail"
            type="mail"
            className='form-control'
            placeholder='Enter your email'
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
              onBlur: () => { }
            })
            } />

          {errors.email && <p className="alert alert-danger">{errors.email.message}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="name" className='form-label'>Username:</label>
          <input
            id="name"
            type="text"
            className='form-control'
            placeholder='Enter your username'
            {...register('username', {
              required: 'Username is required',
              minLength: { value: 3, message: 'Minimum length should be 3' },
              maxLength: { value: 15, message: 'Maximum length should be 15' },
              onBlur: () => { }
            })}
          />

          {errors.username && <p className="alert alert-danger">{errors.username.message}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="pass" className='form-label'>Password:</label>
          <input
            id="pass"
            type="password"
            className='form-control'
            placeholder='Enter your password'
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 5, message: 'Minimum length should be 5' },
              maxLength: { value: 15, message: 'Maximum length should be 15' },
              onBlur: () => { },
              validate: (value) => {
                if (!/[A-Z]/.test(value)) {
                  return 'Password must contain at least one uppercase letter'
                }
                if (!/[a-z]/.test(value)) {
                  return 'Password must contain at least one lowercase letter'
                }
                if (!/[0-9]/.test(value)) {
                  return 'Password must contain at least one number'
                }
                if (!/[\W_]/.test(value)) {
                  return 'Password must contain at least one special character'
                }
              }
            })}
          />

          {errors.password && <p className="alert alert-danger">{errors.password.message}</p>}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div >
  )
}

export default ReactForm
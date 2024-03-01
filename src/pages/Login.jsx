import { useState } from 'react'

function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  })

  function handleSubmit(e) {
    e.preventDefault()
  }

  function handleChange(e) {
    const { name, value } = e.target
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="mx-auto max-w-md self-center p-5 py-4">
      <h1 className="text-center text-3xl font-bold">
        Sign in to your account
      </h1>
      <form className="mt-8" onSubmit={handleSubmit}>
        <input
          className="w-full rounded-t-md border border-neutral-50 p-3 text-dark"
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          className="w-full rounded-b-md border border-t-0 border-neutral-50 p-3"
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button className="mt-6 w-full rounded-md bg-orange-400 p-3 text-center font-bold text-neutral-600">
          Sign in
        </button>
        <p className="mt-12 text-center">
          Don&apos;t have an account?
          <span className="font-bold text-orange-400"> Create one now</span>
        </p>
      </form>
    </div>
  )
}

export default Login

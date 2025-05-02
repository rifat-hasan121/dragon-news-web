import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const { login } = use(AuthContext);
  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    login(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });


  }
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="text-2xl font-semibold text-center pt-10 pb-4">
            Login your account
          </h2>
          <hr className="border border-slate-200 w-11/12 mx-auto mt-5" />
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset">
              <label className="label font-bold text-black">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" />
              <label className="label font-bold text-black">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type='submit' className="btn btn-neutral mt-4">Login</button>
              <p className="font-semibold text-accent text-center py-5">
                Dont’t Have An Account ?{" "}
                <Link to="/auth/register" className='text-blue-500 hover:underline'>Register</Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    );
};

export default Login;
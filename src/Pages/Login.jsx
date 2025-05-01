import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="text-2xl font-semibold text-center pt-10 pb-4">
            Login your account
          </h2>
          <hr className="border border-slate-200 w-11/12 mx-auto mt-5" />
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label font-bold text-black">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label font-bold text-black">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
              <p className="font-semibold text-accent text-center py-5">
                Dont’t Have An Account ?{" "}
                <Link to="/auth/register" className='text-blue-500 hover:underline'>Register</Link>
              </p>
            </fieldset>
          </div>
        </div>
      </div>
    );
};

export default Login;
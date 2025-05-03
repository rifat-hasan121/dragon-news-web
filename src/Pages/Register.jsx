import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { useContext } from 'react';

const Register = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            // console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorMessage, errorCode)
        // ..
      });

  }
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="card bg-base-100 w-full mt-12 max-w-sm shrink-0 shadow-2xl">
          <h2 className="text-2xl font-semibold text-center pt-10 pb-4">
            Sign In your account
          </h2>
          <hr className="border border-slate-200 w-11/12 mx-auto mt-5" />
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              <label className="label font-bold text-black">Your Name</label>
              <input
                name="name"
                required
                type="text"
                className="input"
                placeholder="Your Name"
              />
              <label className="label font-bold text-black">Photo URL</label>
              <input
                name="photo"
                required
                type="text"
                className="input"
                placeholder="Photo URL"
              />
              <label className="label font-bold text-black">Email</label>
              <input
                type="email"
                name="email"
                required
                className="input"
                placeholder="Email"
              />
              <label className="label font-bold text-black">Password</label>
              <input
                type="password"
                name="password"
                required
                className="input"
                placeholder="Password"
              />
              <div>
                <label className="label mt-4">
                  <input type="checkbox" className="checkbox text-accent" />
                  Accept Term & Conditions
                </label>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
              <p className="font-semibold text-accent text-center py-5">
                Already Have An Account ?
                <Link
                  to="/auth/login"
                  className="text-blue-500 hover:underline"
                >
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    );
};

export default Register;
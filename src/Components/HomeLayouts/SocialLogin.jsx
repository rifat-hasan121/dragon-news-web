import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { VscGithubInverted } from 'react-icons/vsc';
import { AuthContext } from '../../Provider/AuthProvider';

const SocialLogin = () => {
  const { user, loginWithGoogle, loginWithGithub } = use(AuthContext);
  if (user) {
    return;
  }
  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then(result => {
      // console.log(result)
      })
      .catch(error => {
      console.log(error)
    })
    
  }

  const handleLoginWithGitHub = () => {
    loginWithGithub()
      .then(result => {
      // console.log(result)
      }).catch(error => {
      console.log(error)
    })
  }
    return (
      <div>
        <h2 data-aos="fade-left" className="font-bold text-xl mb-5">
          Login With
        </h2>
        <div data-aos="fade-left" className="space-y-3 items-center">
          <button
            onClick={handleLoginWithGoogle}
            data-aos="fade-left"
            className="btn w-full font-medium bg-white text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
          >
            <FcGoogle size={26} />
            Login With Google
          </button>
          <button
            onClick={handleLoginWithGitHub}
            data-aos="fade-left"
            className="btn w-full font-medium bg-white hover:bg-slate-200"
          >
            <VscGithubInverted size={26} />
            Login With GitHub
          </button>
        </div>
      </div>
    );
};

export default SocialLogin;
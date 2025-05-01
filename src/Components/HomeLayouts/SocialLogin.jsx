import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { VscGithubInverted } from 'react-icons/vsc';

const SocialLogin = () => {
    return (
      <div>
        <h2 className="font-bold text-xl mb-5">Login With</h2>
        <div className="space-y-3 items-center">
          <button className="btn w-full font-medium bg-white text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white">
            <FcGoogle size={26} />
            Login With Google
          </button>
          <button className="btn w-full font-medium bg-white hover:bg-slate-200">
            <VscGithubInverted size={26} />
            Login With GitHub
          </button>
        </div>
      </div>
    );
};

export default SocialLogin;
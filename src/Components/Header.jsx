import { format } from 'date-fns';
import React from 'react';

const Header = () => {
    return (
      <div className="w-11/12 mx-auto flex flex-col justify-center items-center mt-5 lg:mt-10 gap-3">
        <img
          className="px-2 lg:px-0"
          src="https://i.ibb.co.com/4Zm4m21N/logo.png"
          alt=""
        />
        <p  className="text-accent text-sm lg:text-xl">
          Journalism Without Fear or Favour
        </p>
        <p  className="font-medium text-sm lg:text-xl">
          {format(new Date(), "EEEE, LLLL MM, yyyy")}
        </p>
      </div>
    );
};

export default Header;
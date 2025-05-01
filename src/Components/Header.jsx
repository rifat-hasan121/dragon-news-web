import { format } from 'date-fns';
import React from 'react';

const Header = () => {
    return (
      <div className="flex flex-col justify-center items-center mt-10 gap-3">
        <img src="https://i.ibb.co.com/4Zm4m21N/logo.png" alt="" />
        <p className="text-accent">Journalism Without Fear or Favour</p>
        <p className="font-medium">
          {format(new Date(), "EEEE, LLLL MM, yyyy")}
        </p>
      </div>
    );
};

export default Header;
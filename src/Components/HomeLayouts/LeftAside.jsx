import React, { Suspense } from 'react';
import Categoris from './Categoris';

const LeftAside = () => {
    return (
      <div data-aos='fade-right'>
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <Categoris></Categoris>
        </Suspense>
      </div>
    );
};

export default LeftAside;
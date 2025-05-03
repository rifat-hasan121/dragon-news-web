import React, { use } from 'react';
import { NavLink } from 'react-router';


const categoryPromise = fetch("/categories.json").then(res => res.json());
const Categoris = () => {
    const category=use(categoryPromise)
    // console.log(category)
    return (
      <div>
        <h2 data-aos="fade-right" className="font-bold">
          All Categories
        </h2>
        <div className="grid grid-cols-1 mt-5 gap-3">
          {category.map((category) => (
            <NavLink
              data-aos="fade-right"
              key={category.id}
              className=" btn shadow-none bg-white border-none hover:bg-slate-200 font-semibold text-accent"
              to={`/category/${category.id}`}
            >
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
    );
};

export default Categoris;
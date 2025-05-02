import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    // console.log(news)
    return (
      <div className="px-8">
        <img
          className="w-full h-[450px] object-center rounded-sm"
          src={news.image_url}
          alt=""
        />
        <h2 className="font-bold text-2xl py-6">{news.title}</h2>
        <p className="text-accent">{news.details}</p>
        <Link to="/" className="btn btn-secondary py-4 my-6">
          {" "}
          <FaArrowLeftLong />
          All news in this category
        </Link>
      </div>
    );
};

export default NewsDetailsCard;
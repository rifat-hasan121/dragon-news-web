import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { BsShareFill } from "react-icons/bs";
import { HiOutlineBookmark } from "react-icons/hi2";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    id
    } = news;
    
    const publishedDate = new Date(news.author.published_date).toLocaleDateString();

  return (
    <div
      data-aos="zoom-out-up"
      className="bg-white shadow-md rounded-lg overflow-hidden"
    >
      {/* Header */}
      <div className="flex justify-between bg-base-200 items-center p-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">{publishedDate}</p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500 text-xl">
          <HiOutlineBookmark className="cursor-pointer" />
          <BsShareFill className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="font-bold text-lg px-4 pt-4">{title}</h2>

      {/* Image */}
      <div className="px-4 py-2">
        <img
          src={thumbnail_url}
          alt="news"
          className="w-full h-60 object-cover rounded"
        />
      </div>

      {/* Details */}
      <div className="px-4 text-sm text-gray-700">
        {details.length > 250 ? (
          <>
            {details.slice(0, 250)}...{" "}
            <Link
              to={`/news-details/${id}`}
              className="text-orange-500 font-semibold cursor-pointer"
            >
              Read More
            </Link>
          </>
        ) : (
          details
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 mt-8 border-t border-slate-200">
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`${
                index < rating.number ? "text-orange-400" : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-sm text-gray-700 ml-1">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <FaEye /> {total_view}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

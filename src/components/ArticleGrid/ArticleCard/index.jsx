import React from "react";
import { FiHeart, FiMessageCircle } from "react-icons/fi";

const ArticleCard = ({ image, title, category, likes, comments }) => {
  return (
    <div className="overflow-hidden shadow-md flex flex-col font-inter ">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-40 sm:h-48 md:h-52 lg:h-56 object-cover rounded-lg"
      />

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow justify-between">
        {/* Title & Category */}
        <div>
          <h3 className="text-white font-semibold text-base md:text-lg leading-snug line-clamp-2">
            {title}
          </h3>
          <p className="text-[#98989A] text-sm md:text-base font-normal mt-1">
            {category}
          </p>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-4 gap-3">
          {/* Likes & Comments */}
          <div className="flex items-center gap-3 text-[#98989A] font-normal font-kumbh text-xs sm:text-sm">
            <span className="flex items-center gap-1 bg-[#1A1A1A] hover:bg-[#262626] transition border border-[#262626] px-3 py-1 rounded-full">
              <FiHeart className="text-sm" /> {likes}
            </span>
            <span className="flex items-center gap-1 bg-[#1A1A1A] hover:bg-[#262626] transition border border-[#262626] px-3 py-1 rounded-full">
              <FiMessageCircle className="text-sm" /> {comments}
            </span>
          </div>

          {/* Read More Button */}
          <button className="flex items-center cursor-pointer gap-2 text-xs sm:text-sm font-normal text-[#98989A] border border-[#262626] px-4 sm:px-6 py-2 rounded-md hover:bg-[#262626] transition w-auto  justify-center">
            Read More
            <svg
              width="18"
              height="18"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 ease-out group-hover:translate-x-1.5 group-hover:-translate-y-1"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.20801 3.625L16.583 3.625C16.7488 3.625 16.9077 3.69085 17.025 3.80806C17.1422 3.92527 17.208 4.08424 17.208 4.25V13.625C17.208 13.9702 16.9282 14.25 16.583 14.25C16.2378 14.25 15.958 13.9702 15.958 13.625V5.75888L4.52495 17.1919C4.28087 17.436 3.88514 17.436 3.64107 17.1919C3.39699 16.9479 3.39699 16.5521 3.64107 16.3081L15.0741 4.875L7.20801 4.875C6.86283 4.875 6.58301 4.59518 6.58301 4.25C6.58301 3.90482 6.86283 3.625 7.20801 3.625Z"
                fill="#FFD11A"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;

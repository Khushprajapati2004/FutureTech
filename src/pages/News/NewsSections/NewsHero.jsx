import React from "react";
import { FiHeart, FiMessageCircle } from "react-icons/fi";
import CardPhoto from "../../../assets/News/news-card-photo.png";

const NewsHero = () => {
    return (
        <>
            <section className=" text-white font-inter w-full px-4 sm:px-8 md:px-16 lg:px-20 lg:py-20 md:py-14 py-10 border-b border-[#262626]">
                <div className="mx-auto">
                    {/* Headline */}
                    <h2 className="text-3xl sm:text-4xl font-kumbh md:text-[55px] font-medium leading-snug  md:mb-6 mb-0">
                        Today's Headlines: Stay <br />

                    </h2>

                    {/* Subtext */}
                    <p className="text-[#98989A] text-sm sm:text-base font-normal leading-relaxed flex lg:flex-row flex-col lg:items-center lg:gap-14 gap-3.5 ">
                        <span className="text-white text-3xl sm:text-4xl font-kumbh md:text-[55px] font-medium ">Informed</span>
                        Explore the latest news from around the world. We bring you
                        up-to-the-minute updates on the most significant events, trends, and
                        stories. Discover the world through our news coverage.
                    </p>
                </div>
            </section>

            <div className="px-4 sm:px-8 md:px-20 flex flex-col md:flex-row items-center gap-10 mx-auto font-inter py-[60px] border-b border-[#262626]">

                {/* Left Image Section */}
                <div className="flex-shrink-0 w-full md:w-[515px] md:h-[325px] h-full">
                    <img
                        src={CardPhoto}
                        alt="Climate Summit"
                        className="w-full h-64 md:h-full object-cover rounded-xl"
                    />
                </div>

                {/* Right Content Section */}
                <div className="flex flex-col  w-full md:w-1/2">
                    {/* Title & Description */}
                    <div>
                        <h3 className="text-white text-xl sm:text-2xl font-semibold mb-3">
                            Global Climate Summit Addresses Urgent Climate Action
                        </h3>
                        <p className="text-[#98989A] text-sm sm:text-lg font-normal leading-relaxed mb-6">
                            World leaders gathered at the Global Climate Summit to discuss urgent
                            climate action, emissions reductions, and renewable energy targets.
                        </p>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-x-8 gap-y-2 mt-4 text-sm sm:text-base">
                        <div className="flex flex-col">
                            <span className="font-normal text-[#98989A]">Category</span>{" "}
                            Environment
                        </div>
                        <div className="flex flex-col ">
                            <span className="font-normal text-[#98989A]">Publication Date</span>{" "}
                            October 10, 2023
                        </div>
                        <div className="flex flex-col">
                            <span className="font-normal text-[#98989A]">Author</span> Jane Smith
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex items-center font-kumbh justify-between mt-10">
                        {/* Like & Comment Counts */}
                        <div className="flex items-center gap-6 text-sm font-kumbh font-normal text-[#98989A]">
                            <div className="flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#262626] transition border-1 border-[#262626] px-3 py-1 rounded-full">
                                <FiHeart size={18} />
                                <span>14k</span>
                            </div>
                            <div className="flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#262626] transition border-1 border-[#262626] px-3 py-1 rounded-full">
                                <FiMessageCircle size={18} />
                                <span>204</span>
                            </div>
                        </div>

                        {/* Read More Button */}
                        <button className="border cursor-pointer border-gray-700 text-[#98989A] text-sm font-normal px-4 py-2 rounded-md hover:bg-[#262626] transition">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsHero;

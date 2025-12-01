import React from 'react'
import { AiFillHeart } from "react-icons/ai";
import { FaRegComment, FaRegPaperPlane } from "react-icons/fa";
import Blog1 from "../../../assets/BlogImg/blog1.png";
import Blog2 from "../../../assets/BlogImg/blog2.png";
import Blog3 from "../../../assets/BlogImg/blog3.png";

const NewsBlog = () => {

    const categories = [
        "All",
        "Quantum Computing",
        "AI Ethics",
        "Space Exploration",
        "Biotechnology",
        "Renewable Energy",
    ];

    const blogs = [
        {
            author: "John Techson",
            category: "Quantum Computing",
            date: "October 15, 2023",
            title: "The Quantum Leap in Computing",
            desc: "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
            likes: "24.5k",
            comments: "50",
            shares: "20",
            img: Blog1,
        },
        {
            author: "Sarah Ethicist",
            category: "AI Ethics",
            date: "November 5, 2023",
            title: "The Ethical Dilemmas of AI",
            desc: "A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.",
            likes: "32k",
            comments: "72",
            shares: "18",
            img: Blog2,
        },
        {
            author: "Astronomer X",
            category: "Space Exploration",
            date: "December 10, 2023",
            title: "The Mars Colonization Challenge",
            desc: "Exploring the technical and logistical challenges of human colonization on Mars.",
            likes: "20k",
            comments: "31",
            shares: "12",
            img: Blog3,
        },
    ];


    return (
        <>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 font-inter header-color px-6 md:px-12 lg:px-20 py-14 border-b border-[#262626]">
                {/* Left Side */}
                <div>
                    <span className="inline-block bg-[#333333]  text-sm md:text-base font-medium py-1 px-2 rounded-sm mb-3">
                        Welcome to Our News Hub
                    </span>
                    <h2 className="font-kumbh text-[28px] md:text-[44px] font-medium text-white leading-snug">
                        Discover the World of Headlines
                    </h2>
                </div>

                {/* CTA Button */}
                <button className="flex items-center gap-2 w-full sm:w-auto justify-center border border-[#262626] text-[#98989A] text-sm font-normal px-4 py-3 rounded-lg hover:bg-[#1a1a1a] transition-all cursor-pointer">
                    View All News
                    <svg
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.875 0.625H13.25C13.4158 0.625 13.5747 0.6908 13.6919 0.8081C13.8092 0.9253 13.875 1.0842 13.875 1.25V10.625C13.875 10.9702 13.5952 11.25 13.25 11.25C12.9048 11.25 12.625 10.9702 12.625 10.625V2.7589L1.1919 14.1919C0.9479 14.436 0.5521 14.436 0.3081 14.1919C0.064 13.9479 0.064 13.5521 0.3081 13.3081L11.7411 1.875H3.875C3.5298 1.875 3.25 1.5952 3.25 1.25C3.25 0.9048 3.5298 0.625 3.875 0.625Z"
                            fill="#FFD11A"
                        />
                    </svg>
                </button>
            </div>

            {/* Category Tabs */}
            <section className="border-b border-[#262626] py-8">
                <div className="flex flex-wrap gap-3 justify-center md:justify-between mx-auto container">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className="flex-1 min-w-[120px] md:min-w-[160px] text-center px-5 py-5 rounded-lg border border-[#262626] text-sm font-medium transition hover:bg-[#1a1a1a]"
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* Blog List */}
            <section className=" space-y-10">
                {blogs.map((blog, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-[#262626] py-12 px-6 md:px-12 lg:px-20"
                    >
                        {/* Top row for mobile: Author + Button */}
                        <div className="flex w-full justify-between items-center md:w-auto md:flex-[0_0_25%]">
                            {/* Left - Author */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={blog.img}
                                    alt={blog.author}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="text-white text-lg font-semibold">{blog.author}</h4>
                                    <p className="text-[#98989A] text-sm md:text-base font-normal">
                                        {blog.category}
                                    </p>
                                </div>
                            </div>

                            {/* Right - Button (mobile will stay in same row) */}
                            <button className="flex items-center cursor-pointer text-[#98989A] gap-2 text-xs sm:text-sm font-normal border border-[#262626] px-3 sm:px-4 py-2 sm:py-3 rounded-lg hover:bg-[#1a1a1a] transition md:hidden">
                                View Blog
                                <svg
                                    width="14"
                                    height="15"
                                    viewBox="0 0 14 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3.875 0.625H13.25C13.4158 0.625 13.5747 0.6908 13.6919 0.8081C13.8092 0.9253 13.875 1.0842 13.875 1.25V10.625C13.875 10.9702 13.5952 11.25 13.25 11.25C12.9048 11.25 12.625 10.9702 12.625 10.625V2.7589L1.1919 14.1919C0.9479 14.436 0.5521 14.436 0.3081 14.1919C0.064 13.9479 0.064 13.5521 0.3081 13.3081L11.7411 1.875H3.875C3.5298 1.875 3.25 1.5952 3.25 1.25C3.25 0.9048 3.5298 0.625 3.875 0.625Z"
                                        fill="#FFD11A"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Middle - Blog Details */}
                        <div className="flex-1">
                            <p className="text-[#98989A] font-semibold text-base md:text-lg mb-4">
                                {blog.date}
                            </p>
                            <h3 className="text-lg md:text-[22px] font-semibold text-white mb-2">
                                {blog.title}
                            </h3>
                            <p className="text-[#98989A] text-sm md:text-base font-normal mb-6">
                                {blog.desc}
                            </p>

                            {/* Stats */}
                            <div className="flex flex-wrap items-center gap-4 text-[#98989A] text-sm font-normal">
                                <span className="flex bg-[#1A1A1A] border border-[#262626] px-3 py-1 rounded-2xl items-center gap-1">
                                    <AiFillHeart className="text-[#FF5A5A]" /> {blog.likes}
                                </span>
                                <span className="flex bg-[#1A1A1A] border border-[#262626] px-3 py-1 rounded-2xl items-center gap-1">
                                    <FaRegComment /> {blog.comments}
                                </span>
                                <span className="flex bg-[#1A1A1A] border border-[#262626] px-3 py-1 rounded-2xl items-center gap-1">
                                    <FaRegPaperPlane /> {blog.shares}
                                </span>
                            </div>
                        </div>

                        {/* Right - Button (desktop only) */}
                        <button className="hidden md:flex items-center cursor-pointer text-[#98989A] gap-2 text-sm font-normal border border-[#262626] px-4 py-3 rounded-lg hover:bg-[#1a1a1a] transition">
                            View Blog
                            <svg
                                width="14"
                                height="15"
                                viewBox="0 0 14 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3.875 0.625H13.25C13.4158 0.625 13.5747 0.6908 13.6919 0.8081C13.8092 0.9253 13.875 1.0842 13.875 1.25V10.625C13.875 10.9702 13.5952 11.25 13.25 11.25C12.9048 11.25 12.625 10.9702 12.625 10.625V2.7589L1.1919 14.1919C0.9479 14.436 0.5521 14.436 0.3081 14.1919C0.064 13.9479 0.064 13.5521 0.3081 13.3081L11.7411 1.875H3.875C3.5298 1.875 3.25 1.5952 3.25 1.25C3.25 0.9048 3.5298 0.625 3.875 0.625Z"
                                    fill="#FFD11A"
                                />
                            </svg>
                        </button>
                    </div>
                ))}
            </section>
        </>
    )
}

export default NewsBlog

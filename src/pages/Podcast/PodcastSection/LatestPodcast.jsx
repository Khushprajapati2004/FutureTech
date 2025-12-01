import React from "react";
import Podcast1 from "../../../assets/Podcast/Podcast1.png";
import Podcast2 from "../../../assets/Podcast/Podcast2.png";
import Podcast3 from "../../../assets/Podcast/Podcast3.png";
import Podcast4 from "../../../assets/Podcast/Podcast4.png";
import Podcast5 from "../../../assets/Podcast/Podcast5.png";
import Podcast6 from "../../../assets/Podcast/Podcast6.png";

const LatestPodcast = () => {
    const podcasts = [
        {
            title: "AI in Healthcare",
            description:
                "Dr. Lisa Adams discusses how AI is revolutionizing healthcare, from diagnostic tools to patient care.",
            image: Podcast1,
            duration: "2:30 min",
        },
        {
            title: "AI Ethics",
            description:
                "Explore the ethical dilemmas and considerations surrounding AI with guest speaker Dr. Michael Turner.",
            image: Podcast2,
            duration: "2:30 min",
        },
        {
            title: "Machine Learning Explained",
            description:
                "Dive into the intricacies of machine learning with AI expert Sarah Davis. In this episode…",
            image: Podcast3,
            duration: "2:30 min",
        },
        {
            title: "AI and the Future of Work",
            description:
                "Dr. Olivia White joins John Parker to discuss the evolving role of AI in the workplace.",
            image: Podcast4,
            duration: "2:30 min",
        },
        {
            title: "AI in Education",
            description:
                "Explore the role of AI in education as Emily Turner discusses how AI is transforming…",
            image: Podcast5,
            duration: "2:30 min",
        },
        {
            title: "AI in Entertainment",
            description:
                "David Smith as they explore the influence of AI in the entertainment industry.",
            image: Podcast6,
            duration: "2:30 min",
        },
    ];

    return (
        <>
            {/* Heading Section */}
            <div className="font-inter header-color px-4 md:px-12 lg:px-20 py-14 border-b border-[#262626]">
                <span className="inline-block bg-[#333333] text-sm md:text-base font-medium py-1 px-2 rounded-sm mb-2">
                    Stay Informed with Fresh Content
                </span>
                <h2 className="font-kumbh text-[28px] md:text-[44px] font-medium text-white">
                    Latest Podcast Episodes
                </h2>
            </div>

            {/* Podcast Grid */}
            <div className="min-h-screen text-white font-inter border-b border-[#262626]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {podcasts.map((podcast, idx) => (
                        <div
                            key={idx}
                            className={`
          group relative overflow-hidden border border-[#262626] 
          ${idx % 3 !== 2 && "lg:border-r"}   /* right border for desktop except last col */
          ${idx < podcasts.length - 3 && "lg:border-b"} /* bottom border for desktop */
          ${idx % 2 !== 1 && "md:border-r"}   /* right border for tablet except last col */
          ${idx < podcasts.length - 2 && "md:border-b"} /* bottom border for tablet */
          ${idx < podcasts.length - 1 && "border-b"} /* bottom border for mobile */
        `}
                        >
                            {/* Card Content with padding */}
                            <div className="px-4 md:px-12 lg:px-20 py-12">
                                {/* Thumbnail */}
                                <div className="overflow-hidden rounded-lg">
                                    <img
                                        src={podcast.image}
                                        alt={podcast.title}
                                        className="w-full h-48 md:h-[244px] object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Text content */}
                                <div className="pt-4">
                                    <h3 className="font-semibold text-lg sm:text-xl mb-2">
                                        {podcast.title}
                                    </h3>
                                    <p className="text-sm sm:text-base font-normal text-[#98989A]">
                                        {podcast.description}
                                    </p>
                                </div>

                                {/* Button */}
                                <button className="mt-4 w-full cursor-pointer md:w-auto justify-center  flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#262626] px-5 py-3.5 rounded-md border  border-[#262626] text-sm font-medium transition">
                                    Listen Podcast
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
                                            d="M3.875 0.625L13.25 0.625C13.4158 0.625 13.5747 0.690848 13.6919 0.808058C13.8092 0.925269 13.875 1.08424 13.875 1.25V10.625C13.875 10.9702 13.5952 11.25 13.25 11.25C12.9048 11.25 12.625 10.9702 12.625 10.625V2.75888L1.19194 14.1919C0.947864 14.436 0.552136 14.436 0.308058 14.1919C0.0639806 13.9479 0.0639806 13.5521 0.308058 13.3081L11.7411 1.875L3.875 1.875C3.52982 1.875 3.25 1.59518 3.25 1.25C3.25 0.904822 3.52982 0.625 3.875 0.625Z"
                                            fill="#FFD11A"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
};

export default LatestPodcast;

import React from 'react'
import Video1 from "../../../assets/News/Video1.png";
import Video2 from "../../../assets/News/Video2.png";
import Video3 from "../../../assets/News/Video3.png";
import Video4 from "../../../assets/News/Video4.png";

const FeatureVideo = () => {

    const videos = [
        {
            title: "Mars Exploration: Unveiling Alien Landscapes",
            description:
                "Embark on a journey through the Red Planet’s breathtaking landscapes and uncover the mysteries of Mars.",
            time: "2:30 min",
            image: Video1,
        },
        {
            title: "Blockchain Explained: A Revolution in Finance",
            description:
                "Delve into the world of blockchain technology and its transformative impact on the financial industry.",
            time: "2:30 min",
            image: Video2,
        },
        {
            title: "Breaking the Silence: Mental Health Awareness in the Workplace",
            description:
                "An exploration of the importance of mental health awareness and the initiatives reshaping workplaces for employee well-being.",
            time: "2:30 min",
            image: Video3,
        },
        {
            title: "Revolutionizing Investment Strategies",
            description:
                "An in-depth look at global efforts to conserve biodiversity and safeguard endangered species from extinction.",
            time: "2:30 min",
            image: Video4,
        },
    ];

    return (
        <>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 font-inter header-color px-6 md:px-12 lg:px-20 py-14 border-b border-[#262626]">
                {/* Left Side */}
                <div>
                    <span className="inline-block bg-[#333333]  text-sm md:text-base font-medium py-1 px-2 rounded-sm mb-3">
                        Featured Videos
                    </span>
                    <h2 className="font-kumbh text-[28px] md:text-[44px] font-medium text-white leading-snug">
                        Visual Insights for the Modern Viewer
                    </h2>
                </div>

                {/* CTA Button */}
                <button className="flex items-center gap-2 w-full sm:w-auto justify-center border border-[#262626] text-[#98989A] text-sm font-normal px-4 py-3 rounded-lg bg-[#141414] hover:bg-[#1a1a1a] transition-all cursor-pointer">
                    View All
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

            <div className="min-h-screen text-white  border-b border-[#262626] font-inter">
                <div className="grid grid-cols-1 md:grid-cols-2 mx-auto border border-[#262626] ">
                    {videos.map((video, idx) => {
                        const isLastInRow = (idx + 1) % 2 === 0; // 2 cols at md+
                        const isLastRow = idx >= videos.length - 2; // last row items

                        return (
                            <div
                                key={idx}
                                className={`relative overflow-hidden px-3 sm:px-8 lg:px-20 py-12  
            ${!isLastInRow ? "border-r border-[#262626]" : ""} 
            ${!isLastRow ? "border-b border-[#262626]" : ""}`}
                            >
                                <img
                                    src={video.image}
                                    alt={video.title}
                                    className="md:w-auto w-full h-[180px] sm:h-80 md:h-[200px] lg:h-[331px] object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Text content */}
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg md:text-xl mb-2">{video.title}</h3>
                                    <p className="md:text-base text-sm font-normal text-[#98989A]">
                                        {video.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>




        </>
    )
}

export default FeatureVideo

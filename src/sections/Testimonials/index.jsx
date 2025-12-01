// src/Testimonials.js
import React from "react";

const testimonials = [
    {
        name: "Sarah Thompson",
        location: "San Francisco, USA",
        text: "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.",
        image: "https://i.pravatar.cc/150?img=1",
    },
    {
        name: "Raj Patel",
        location: "Mumbai, India",
        text: "The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis.",
        image: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Emily Adams",
        location: "London, UK",
        text: "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.",
        image: "https://i.pravatar.cc/150?img=3",
    },
    {
        name: "Alan Jackson",
        location: "Houston, USA",
        text: "The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view.",
        image: "https://i.pravatar.cc/150?img=4",
    },
    {
        name: "Jessica Miller",
        location: "Boston, USA",
        text: "The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics.",
        image: "https://i.pravatar.cc/150?img=5",
    },
    {
        name: "Diego Lopez",
        location: "Barcelona, Spain",
        text: "The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability.",
        image: "https://i.pravatar.cc/150?img=6",
    },
];

const Testimonials = () => {
    
    const getColumnCount = () => {
        if (window.innerWidth < 768) return 1; // sm:grid-cols-1
        if (window.innerWidth < 1280) return 2; // md:grid-cols-2
        return 3; // xl:grid-cols-3
    };

    const [columns, setColumns] = React.useState(getColumnCount());
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

    React.useEffect(() => {
        const handleResize = () => {
            setColumns(getColumnCount());
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Show only first 3 testimonials on mobile
    const displayedTestimonials = isMobile
        ? testimonials.slice(0, 3)
        : testimonials;

    return (
        <>
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 font-inter header-color px-6 md:px-12 lg:px-20 py-14 border-b border-[#262626]">
                <div>
                    <span className="inline-block bg-[#333333] text-[#98989A] text-sm md:text-base font-medium py-1 px-2 rounded-sm mb-3">
                        What Our Readers Say
                    </span>
                    <h2 className="font-kumbh text-2xl md:text-[44px] max-w-5xl font-medium text-white leading-snug">
                        Real Words from Real Readers
                    </h2>
                </div>

                <button className="flex items-center justify-center cursor-pointer w-full sm:w-auto gap-2 border border-[#262626] text-[#98989A] text-sm font-normal px-4 py-3 rounded-lg hover:bg-[#1a1a1a] transition">
                    View All Testimonials
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

            {/* Grid Section */}
            <div className="px-4 mx-auto grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border border-[#262626]">
                {displayedTestimonials.map((t, index) => {
                    const isLastInRow = (index + 1) % columns === 0;
                    const isLastRow =
                        index >= displayedTestimonials.length - (displayedTestimonials.length % columns || columns);

                    return (
                        <div
                            key={index}
                            className={`py-12 px-8 flex flex-col items-center space-y-1 border-[#262626]
                            ${!isLastInRow ? "border-r" : ""}
                            ${!isLastRow ? "border-b" : ""}`}
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="font-medium text-lg">{t.name}</h3>
                                    <p className="text-base font-normal text-[#666666]">
                                        {t.location}
                                    </p>
                                </div>
                            </div>

                            <div className="flex relative top-6 bg-[#141414] border-1 border-[#262626] py-2 px-3 rounded-full">
                                {Array(5)
                                    .fill(0)
                                    .map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-5 h-5 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.43 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                            </div>

                            <p className="text-base font-normal text-center bg-[#1A1A1A] border-1 border-[#262626] w-auto mx-2 md:mx-4 lg:mx-8 h-auto rounded-xl py-10 px-4 md:px-6">
                                {t.text}
                            </p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Testimonials;

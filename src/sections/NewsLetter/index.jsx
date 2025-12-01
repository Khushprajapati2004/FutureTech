// src/HeroSection.js
import React from 'react';

const features = [
    {
        title: 'Resource Access',
        description: 'Visitors can access a wide range of resources, including ebooks, whitepapers, reports.',
    },
    {
        title: 'Community Forum',
        description: 'Join our active community forum to discuss industry trends and collaborate with peers.',
    },
    {
        title: 'Tech Events',
        description: 'Stay updated on upcoming tech events, webinars and conferences to enhance your knowledge.',
    },
];

const HeroSection = () => {
    return (
        <div className="header-color py-18 px-2 md:px-10 border-b border-[#262626]">
            <div className="md:px-8 px-2 mx-auto">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                    {/* Logo */}
                    <div className='flex items-center gap-6'>
                        <div className='md:w-[120px] md:h-[120px] w-16 h-16'>
                            <svg viewBox="0 0 120 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M79.9995 120.5V100.5C91.0661 100.5 99.9994 91.5671 99.9994 80.5005H119.999C119.999 102.634 102.066 120.5 79.9995 120.5Z" fill="#FFD11A" />
                                <path d="M79.9997 120.5V100.5C68.9331 100.5 59.9998 91.5671 59.9998 80.5005H40C40 102.634 57.9332 120.5 79.9997 120.5Z" fill="#FFD11A" />
                                <path d="M0 80.4985H19.9998C19.9998 91.5651 28.9331 100.498 39.9997 100.498V120.498C17.9332 120.498 0 102.632 0 80.4985Z" fill="#FFD11A" />
                                <path d="M0 80.4997H19.9998C19.9998 69.4331 28.9331 60.4998 39.9997 60.4998V40.5C17.9332 40.5 0 58.4332 0 80.4997Z" fill="#FFD11A" />
                                <path d="M39.9997 0.5V20.4998C28.9331 20.4998 19.9998 29.4331 19.9998 40.4997H0C0 18.4332 17.9332 0.5 39.9997 0.5Z" fill="#FFD11A" />
                                <path d="M39.9998 0.5V20.4998C51.0663 20.4998 59.9996 29.4331 59.9996 40.4997H79.9995C79.9995 18.4332 62.0663 0.5 39.9998 0.5Z" fill="#FFD11A" />
                                <path d="M119.999 40.4997H99.9991C99.9991 29.4331 91.0659 20.4998 79.9993 20.4998V0.5C102.066 0.5 119.999 18.4332 119.999 40.4997Z" fill="#FFD11A" />
                                <path d="M119.999 40.4995H99.9991C99.9991 51.5661 91.0659 60.4994 79.9993 60.4994V80.4992C102.066 80.4992 119.999 62.6327 119.999 40.4995Z" fill="#FFD11A" />
                            </svg>


                        </div>
                        <span className="block lg:hidden bg-[#333333] text-sm md:text-base font-medium px-3 py-1 rounded-md mb-3">
                            Learn, Connect, and Innovate
                        </span>
                    </div>

                    {/* Text Content */}
                    <div>
                        <span className=" bg-[#333333]  text-base font-medium px-3 py-1 rounded-md mb-3 lg:inline-block hidden">
                            Learn, Connect, and Innovate
                        </span>
                        <h2 className="text-3xl sm:text-[44px] font-medium mb-4 leading-snug">
                            Be Part of the Future Tech Revolution
                        </h2>
                        {/* Mobile text */}
                        <p className="text-[#7E7E81] text-base font-normal block md:hidden">
                            Immerse yourself in the world of future technology. Explore our comprehensive resources.
                        </p>

                        {/* Tablet/Desktop text */}
                        <p className="text-[#7E7E81] text-base font-normal hidden md:block text-justify">
                            Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.
                        </p>

                    </div>
                </div>

                {/* Feature Cards */}
                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#111111] p-2.5 rounded-lg">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="border border-[#262626] bg-[#1A1A1A] rounded-lg px-7 py-7 flex flex-col justify-between space-y-6 hover:shadow-lg transition"
                        >
                            <div className='flex items-center justify-between'>
                                <h3 className="md:text-lg text-base font-semibold mb-3">{feature.title}</h3>
                                <div className="flex items-center mt-4 cursor-pointer group">
                                    <div className="w-11 h-11 rounded-full bg-[#FFD11A] flex items-center justify-center">
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 15 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5 transition-transform duration-300 ease-out 
                                                        group-hover:translate-x-1.5 group-hover:-translate-y-1"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M4.2085 0.125L13.5835 0.125C13.7493 0.125 13.9082 0.190848 14.0254 0.308058C14.1426 0.425269 14.2085 0.58424 14.2085 0.75V10.125C14.2085 10.4702 13.9287 10.75 13.5835 10.75C13.2383 10.75 12.9585 10.4702 12.9585 10.125V2.25888L1.52544 13.6919C1.28136 13.936 0.885632 13.936 0.641554 13.6919C0.397477 13.4479 0.397477 13.0521 0.641554 12.8081L12.0746 1.375L4.2085 1.375C3.86332 1.375 3.5835 1.09518 3.5835 0.75C3.5835 0.404822 3.86332 0.125 4.2085 0.125Z"
                                                fill="#141414"
                                            />
                                        </svg>
                                    </div>
                                </div>


                            </div>
                            <p className="md:text-base text-sm text-justify font-normal text-[#98989A]">{feature.description}</p>


                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroSection;

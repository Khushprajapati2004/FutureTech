import React from "react";
import { FaArrowRight, FaUsers, FaDownload, FaUserCheck, FaRegNewspaper, FaUserTie, FaGlobe } from "react-icons/fa";
import Layerbg from "../../assets/bg-layer.svg";
import GridSection from "../../components/GridSection";
import Photos from "../../assets/photos.png";


const HeroSection = () => {
    return (
        <>
            <section className="font-inter mx-auto flex flex-col lg:flex-row gap-10">
                {/* Left Section */}
                <div className="flex-2/12 z-10  border-r bg-[#141414] border-[#262626]">
                    <div className="md:py-24 py-10  lg:pl-20 md:px-14 px-4">
                        <p className="font-kumbh text-[#666666] text-lg md:text-lg lg:text-[22px] font-medium mb-2">
                            Your Journey to Tomorrow Begins Here
                        </p>
                        <h1 className="font-kumbh text-3xl md:text-[45px] lg:text-[55px] font-medium leading-tight max-w-3xl">
                            Explore the Frontiers of <span className="text-gray-200">Artificial Intelligence</span>
                        </h1>

                        {/* For mobile screens (smaller than md) */}
                        <p className="text-[#7E7E81] font-normal mt-4 text-justify text-sm md:hidden">
                            Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future.
                        </p>

                        {/* For md and larger screens */}
                        <p className="text-[#7E7E81] font-normal max-w-4xl mt-4 text-sm md:text-base lg:text-base hidden md:block">
                            Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.
                        </p>

                    </div>

                    <div className="grid grid-cols-3 border border-[#262626] divide-x divide-[#262626]">
                        {/* Stat Item 1 */}
                        <div className="flex flex-col justify-center mx-auto py-6 px-4 sm:px-8">
                            <h3 className="text-2xl md:text-3xl font-semibold">
                                300<span className="text-yellow-400">+</span>
                            </h3>
                            <p className="text-[#98989A] text-sm md:text-base font-normal">Resources available</p>
                        </div>

                        {/* Stat Item 2 */}
                        <div className="flex flex-col justify-center py-6 px-6 sm:px-8">
                            <h3 className="text-2xl md:text-3xl font-semibold">
                                12k<span className="text-yellow-400">+</span>
                            </h3>
                            <p className="text-[#98989A] text-sm md:text-base font-normal">Total Downloads</p>
                        </div>

                        {/* Stat Item 3 */}
                        <div className="flex flex-col justify-center py-6 px-6 sm:px-8">
                            <h3 className="text-2xl md:text-3xl font-semibold">
                                10k<span className="text-yellow-400">+</span>
                            </h3>
                            <p className="text-[#98989A] text-sm md:text-base font-normal">Active Users</p>
                        </div>
                    </div>

                </div>

                {/* Right Section */}
                <div className="relative w-full h-full flex-1 flex flex-col items-start xl:mb-0 mb-50">

                    <img src={Layerbg} alt="" className="absolute opacity-30 sm:w-[622px] w-[700px] xl:right-48 md:right-[48%] sm:right-[33%] right-[12%]  xl:top-0 -top-10 -z-10 h-[442px] rotate-6 " />

                    <div className="relative xl:top-70  top-40 xl:px-0 px-10">
                        {/* Avatars or Photos */}
                        <div className="relative z-10">
                            <img src={Photos} alt="photos-icons" className="mb-4 w-44 h-16" />
                        </div>


                        {/* Text Content */}
                        <h4 className="text-lg md:text-xl font-medium relative z-10">Explore 1000+ resources</h4>
                        <p className="text-[#98989A] text-sm md:text-base font-normal mt-2 mb-4 relative z-10">
                            Over 1,000 articles on emerging tech trends and breakthroughs.
                        </p>


                        {/* Button */}
                        <button className="flex items-center cursor-pointer justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-md border border-[#262626] text-[#98989A] text-sm font-normal relative z-10 hover:bg-[#1a1a1a] transition-all">
                            Explore Resources
                            <svg
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.875 3.625L16.25 3.625C16.4158 3.625 16.5747 3.69085 16.6919 3.80806C16.8092 3.92527 16.875 4.08424 16.875 4.25V13.625C16.875 13.9702 16.5952 14.25 16.25 14.25C15.9048 14.25 15.625 13.9702 15.625 13.625V5.75888L4.19194 17.1919C3.94786 17.436 3.55214 17.436 3.30806 17.1919C3.06398 16.9479 3.06398 16.5521 3.30806 16.3081L14.7411 4.875L6.875 4.875C6.52982 4.875 6.25 4.59518 6.25 4.25C6.25 3.90482 6.52982 3.625 6.875 3.625Z"
                                    fill="#FFD11A"
                                />
                            </svg>
                        </button>

                    </div>
                </div>


            </section>

            <GridSection />
        </>
    );
};

export default HeroSection;
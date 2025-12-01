import React from "react";
import BlogImg from "../../../assets/BlogImg/mainblogimg.png";

const BlogPage = () => {
    return (
        <div className="min-h-screen border-b border-[#262626] font-inter text-white">
            {/* Hero Section */}
            <div className="relative">
                <img
                    src={BlogImg}
                    alt="AI Healthcare"
                    className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black/20 flex items-end justify-center">
                    <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-[44px] relative -top-16 font-semibold text-center px-4 pb-4">
                        The Rise of Artificial Intelligence in Healthcare
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 border-t border-[#262626]">
                {/* Left Content */}
                <div className="lg:col-span-2 border-r border-[#262626] order-2 lg:order-1">
                    {/* Introduction */}
                    <section className="border-b border-[#262626] px-4 sm:px-6 md:px-14 lg:px-20 py-6 md:py-8 mb-6">
                        <h2 className="text-lg sm:text-xl font-medium mb-2">Introduction</h2>
                        <p className="text-[#98989A] text-sm sm:text-base leading-relaxed">
                            Artificial Intelligence (AI) has emerged as a transformative force
                            in the healthcare industry, reshaping patient care, diagnostics,
                            and research. In this blog post, we explore the profound impact of
                            AI in healthcare, from revolutionizing diagnostic accuracy to
                            enhancing patient outcomes.
                        </p>
                    </section>

                    {/* AI Section */}
                    <section className="px-4 sm:px-6 md:px-14 lg:px-20 pb-6 mb-6">
                        <h2 className="text-xl sm:text-[22px] font-medium mb-2">
                            Artificial Intelligence (AI)
                        </h2>
                        <p className="text-[#98989A] text-sm sm:text-base leading-relaxed mb-3">
                            Artificial Intelligence (AI) has permeated virtually every aspect
                            of our lives, and healthcare is no exception...
                        </p>
                        <p className="text-[#98989A] text-sm sm:text-base font-normal leading-relaxed mb-3">
                                Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception.
                                The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the
                                capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system.
                                In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.
                            </p>

                        <p className="text-[#98989A] text-sm sm:text-base leading-relaxed">
                            The integration of AI in healthcare is ushering in a new era of
                            medical practice, where machines complement the capabilities of
                            healthcare professionals...
                        </p>
                    </section>

                    {/* Predictive Analytics */}
                    <section className="relative pb-4 px-4 sm:px-6 md:px-12 lg:px-20">
                        <h2 className="text-xl sm:text-[22px] font-medium mb-3">
                            Predictive Analytics and Disease Prevention
                        </h2>

                        <div className="relative max-h-[180px] overflow-hidden">

                            
                            <p className="text-[#98989A] text-sm sm:text-base font-normal leading-relaxed">
                                One of the most prominent applications of AI in healthcare is in
                                diagnostic imaging. AI algorithms have demonstrated remarkable
                                proficiency...
                            </p>

                            {/* Gradient fade effect at bottom */}
                            <div className="absolute bottom-0 left-0 w-full h-20 sm:h-28 bg-gradient-to-t from-[#141414] to-transparent"></div>
                        </div>

                        {/* Button overlapping fade */}
                        <div className="relative -top-10 sm:-top-14 flex justify-center mt-4">
                            <button className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-[#98989A] text-xs sm:text-sm font-normal rounded-lg border border-[#262626] bg-[#141414] hover:bg-[#262626] transition">
                                Read Full Blog
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 20 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M10 3.625C10.3452 3.625 10.625 3.90482 10.625 4.25L10.625 15.2411L15.1831 10.6831C15.4271 10.439 15.8229 10.439 16.0669 10.6831C16.311 10.9271 16.311 11.3229 16.0669 11.5669L10.4419 17.1919C10.1979 17.436 9.80214 17.436 9.55806 17.1919L3.93306 11.5669C3.68898 11.3229 3.68898 10.9271 3.93306 10.6831C4.17714 10.439 4.57286 10.439 4.81694 10.6831L9.375 15.2411L9.375 4.25C9.375 3.90482 9.65482 3.625 10 3.625Z"
                                        fill="#98989A"
                                    />
                                </svg>
                            </button>
                        </div>
                    </section>
                </div>

                {/* Right Sidebar */}
                <div className="pt-6  order-1 lg:order-2">
                    {/* Stats */}
                    <div className="flex px-4 sm:px-6 md:px-10 flex-wrap justify-center md:justify-start gap-4 md:gap-6 mb-6 text-sm font-normal text-[#98989A]">
                        <span className="flex items-center gap-2 border border-[#262626] rounded-full px-3 py-1.5">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6154 22.6532L12.6083 22.6494L12.5838 22.6361C12.5629 22.6248 12.533 22.6084 12.4947 22.587C12.4182 22.5443 12.308 22.4818 12.169 22.4C11.8912 22.2366 11.4976 21.9959 11.0268 21.6829C10.0866 21.0579 8.83048 20.1393 7.57098 18.9652C5.07846 16.6417 2.4375 13.1897 2.4375 8.9375C2.4375 5.76544 5.1064 3.25 8.32812 3.25C10.2227 3.25 11.9192 4.11568 13 5.47256C14.0808 4.11568 15.7773 3.25 17.6719 3.25C20.8936 3.25 23.5625 5.76544 23.5625 8.9375C23.5625 13.1897 20.9215 16.6417 18.429 18.9652C17.1695 20.1393 15.9134 21.0579 14.9732 21.6829C14.5024 21.9959 14.1088 22.2366 13.831 22.4C13.692 22.4818 13.5818 22.5443 13.5053 22.587C13.467 22.6084 13.4371 22.6248 13.4162 22.6361L13.3917 22.6494L13.3846 22.6532L13.3816 22.6548C13.1433 22.7813 12.8567 22.7813 12.6184 22.6548L12.6154 22.6532Z" fill="#FF5500" />
                            </svg>
                            24.5k
                        </span>
                        <span className="flex items-center gap-2 border border-[#262626] rounded-full px-3 py-1.5">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.4025 11.7298C23.6794 12.0782 23.8327 12.5308 23.8327 13C23.8327 13.4693 23.6794 13.9219 23.4025 14.2702C21.6492 16.4125 17.6582 20.5833 12.9994 20.5833C8.3405 20.5833 4.34957 16.4125 2.59623 14.2702C2.31931 13.9219 2.16602 13.4693 2.16602 13C2.16602 12.5308 2.31931 12.0782 2.59623 11.7298C4.34957 9.58751 8.3405 5.41667 12.9994 5.41667C17.6582 5.41667 21.6492 9.58751 23.4025 11.7298Z" stroke="#98989A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.9999 16.3702C14.8444 16.3702 16.3396 14.8612 16.3396 12.9999C16.3396 11.1385 14.8444 9.62953 12.9999 9.62953C11.1554 9.62953 9.66022 11.1385 9.66022 12.9999C9.66022 14.8612 11.1554 16.3702 12.9999 16.3702Z" stroke="#98989A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> 50k
                        </span>
                        <span className="flex items-center gap-2 border border-[#262626] rounded-full px-3 py-1.5">


                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8752 15.125L4.51983 12.2362C3.64518 11.8386 3.6825 10.5837 4.57922 10.2388L20.4752 4.12501C21.3513 3.78803 22.2122 4.64889 21.8752 5.52502L15.7614 21.421C15.4165 22.3177 14.1616 22.355 13.764 21.4804L10.8752 15.125ZM10.8752 15.125L15.6253 10.375" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            206
                        </span>
                    </div>

                    {/* Info */}
                    <div className="grid grid-cols-2 gap-4 border-t border-b border-[#262626] py-4 mb-6 text-sm px-4 sm:px-6 md:px-10">
                        <p>
                            <span className="block text-[#98989A]">Publication Date</span>
                            Oct 15, 2023
                        </p>
                        <p>
                            <span className="block text-[#98989A]">Category</span>
                            Healthcare
                        </p>
                        <p>
                            <span className="block text-[#98989A]">Reading Time</span>
                            10 Min
                        </p>
                        <p>
                            <span className="block text-[#98989A]">Author</span>
                            Dr. Emily Walker
                        </p>
                    </div>

                    {/* Table of Contents */}
                    <h3 className="text-[#98989A] text-base mb-3 px-4 sm:px-6 md:px-10">Table of Contents</h3>
                    <div className="px-4 sm:px-6 md:px-10">
                    <div className="rounded-lg p-4 bg-[#1A1A1A] text-sm sm:text-base ">
                        <ul className="space-y-2 text-gray-300 ">
                            <li>• Introduction</li>
                            <li>• AI in Diagnostic Imaging</li>
                            <li>• Predictive Analytics</li>
                            <li>• Personalized Treatment</li>
                            <li>• Drug Discovery</li>
                            <li>• AI in Telemedicine</li>
                            <li>• Ethical Considerations</li>
                            <li>• Future of AI</li>
                            <li>• Conclusion</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;

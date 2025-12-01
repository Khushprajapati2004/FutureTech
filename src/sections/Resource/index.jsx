import React from 'react';
import Resource1 from "../../assets/Resources/Resource1.png";
import Resource2 from "../../assets/Resources/Resource2.png";

const Resource = () => {
    return (
        <>
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 font-inter header-color px-6 md:px-12 lg:px-20 py-10 md:py-14 border-b border-[#262626]">
                {/* Left Side */}
                <div className="space-y-3">
                    <span className="inline-block bg-[#333333] text-sm md:text-base font-medium py-1 px-2 rounded-sm">
                        Your Gateway to In-Depth Information
                    </span>
                    <h2 className="font-kumbh text-2xl md:text-[44px] font-medium text-white leading-snug max-w-4xl">
                        Unlock Valuable Knowledge with FutureTech&apos;s Resources
                    </h2>
                </div>

                {/* CTA Button */}
                <button className="flex items-center justify-center cursor-pointer gap-2 border border-[#262626] text-[#98989A] text-sm font-normal px-5 py-3 rounded-lg hover:bg-[#1a1a1a] transition w-full sm:w-auto">
                    View All Resources
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

            {/* Ebooks Section */}
            <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-10 px-6 md:px-12 lg:px-20  font-inter border-b border-[#262626]">
                {/* Left Content */}
                <div className="flex flex-col justify-center lg:border-r border-[#262626] space-y-8">
                    <div className='lg:mt-0 mt-8 border-b-2 border-[#262626] lg:border-0 lg:pb-0 pb-14'>
                        <div className="mb-5">
                            <svg width="60" height="60" viewBox="0 0 46 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.5 29C21.5 20.3674 46.6449 5.00101 45.4594 10.7595C42.9819 22.7935 42.9819 35.2065 45.4594 47.2405C46.6449 52.999 21.5 37.6326 21.5 29Z" fill="#FFD11A" />
                                <path d="M24.5 20C24.5 28.6326 -0.644857 43.999 0.540638 38.2405C3.01806 26.2065 3.01806 13.7935 0.540638 1.75952C-0.644857 -3.99898 24.5 11.3674 24.5 20Z" fill="#404040" />
                            </svg>
                        </div>

                        <h3 className="text-white font-kumbh text-2xl md:text-[30px] font-semibold mb-4">
                            Ebooks
                        </h3>
                        <p className="text-[#98989A] text-sm md:text-base font-normal mb-6 max-w-sm">
                            Explore our collection of ebooks covering a wide spectrum of future technology topics.
                        </p>
                        <button className="bg-[#1a1a1a] cursor-pointer hover:bg-[#262626] border border-[#262626] text-[#98989A] text-sm font-normal px-6 py-3 rounded-md transition flex items-center w-full sm:w-[90%] justify-center gap-2">
                            Download Ebooks Now
                            <svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.375 3.125L16.75 3.125C16.9158 3.125 17.0747 3.19085 17.1919 3.30806C17.3092 3.42527 17.375 3.58424 17.375 3.75V13.125C17.375 13.4702 17.0952 13.75 16.75 13.75C16.4048 13.75 16.125 13.4702 16.125 13.125V5.25888L4.69194 16.6919C4.44786 16.936 4.05214 16.936 3.80806 16.6919C3.56398 16.4479 3.56398 16.0521 3.80806 15.8081L15.2411 4.375L7.375 4.375C7.02982 4.375 6.75 4.09518 6.75 3.75C6.75 3.40482 7.02982 3.125 7.375 3.125Z" fill="#FFD11A" />
                            </svg>
                        </button>
                    </div>

                    {/* Downloaded By */}
                    <div className="flex gap-8 mt-8 justify-center items-center p-3 rounded-md bg-[#1a1a1a] border-1 border-[#262626] w-[300px]">
                        <div>
                            <p className="text-[#98989A] text-sm font-normal mb-1">Downloaded By</p>
                            <span className="text-white font-semibold text-xl">10k+ Users</span>
                        </div>
                        <div className="flex items-center -space-x-3 bg-[#141414] p-1 rounded-lg">
                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="User"
                                className="w-10 h-10 rounded-full border-2 border-black"
                            />
                            <img
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                alt="User"
                                className="w-10 h-10 rounded-full border-2 border-black"
                            />
                            <img
                                src="https://randomuser.me/api/portraits/men/55.jpg"
                                alt="User"
                                className="w-10 h-10 rounded-full border-2 border-black"
                            />

                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="space-y-6 py-12">
                    {/* Topics */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <h3 className="text-xl font-semibold sm:flex-1">Variety of Topics</h3>
                        <p className="text-[#98989A] text-sm md:text-base font-normal sm:flex-[3]">
                            Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).
                        </p>
                    </div>

                    {/* Image */}
                    <div className="rounded-lg overflow-hidden">
                        <img src={Resource1} alt="Ebooks" className="w-full h-56 md:h-72 object-cover" />
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-[#1a1a1a] border border-[#262626] flex flex-col-reverse justify-center rounded-lg p-4">
                            <p className="text-white font-semibold text-lg">Over 100 ebooks</p>
                            <p className="text-[#98989A] text-base font-normal">Total Ebooks</p>
                        </div>
                        <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-4 flex justify-between items-center sm:col-span-2">
                            <div className="flex flex-col-reverse">
                                <p className="text-white font-semibold text-lg">PDF format for access</p>
                                <p className="text-[#98989A] text-base font-normal">Download Formats</p>
                            </div>
                            <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-3 flex gap-2 items-center cursor-pointer">
                                <p className="text-[#98989A] text-sm">Preview</p>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.0023 9.52301C18.2153 9.79098 18.3332 10.1391 18.3332 10.5001C18.3332 10.8611 18.2153 11.2092 18.0023 11.4772C16.6536 13.1251 13.5836 16.3334 9.99984 16.3334C6.4161 16.3334 3.34616 13.1251 1.99744 11.4772C1.78442 11.2092 1.6665 10.8611 1.6665 10.5001C1.6665 10.1391 1.78442 9.79098 1.99744 9.52301C3.34616 7.87509 6.4161 4.66675 9.99984 4.66675C13.5836 4.66675 16.6536 7.87509 18.0023 9.52301Z" stroke="#FFD11A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.0003 13.0925C11.4191 13.0925 12.5693 11.9318 12.5693 10.5C12.5693 9.06814 11.4191 7.90741 10.0003 7.90741C8.58145 7.90741 7.43127 9.06814 7.43127 10.5C7.43127 11.9318 8.58145 13.0925 10.0003 13.0925Z" stroke="#FFD11A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Author Expertise */}
                    <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-4">
                        <p className="text-base font-normal mb-2 text-[#98989A]">Average Author Expertise</p>
                        <p className="text-white text-sm md:text-lg font-medium">
                            Ebooks are authored by renowned experts with an average of 15 years of experience
                        </p>
                    </div>
                </div>
            </div>

            {/* Whitepapers Section */}
            <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-10 px-6 md:px-12 lg:px-20 font-inter border-b border-[#262626]">
                {/* Left Content */}
                <div className="flex flex-col justify-center lg:border-r border-[#262626] space-y-8">
                    <div className='lg:mt-0 mt-8 border-b-2 border-[#262626] lg:border-0 lg:pb-0 pb-14'>
                        <div className="mb-5">
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30 6V54L9 42V18L30 6Z" fill="#FFD11A" />
                                <path d="M51 6V54L30 42V18L51 6Z" fill="#404040" />
                            </svg>

                        </div>

                        <h3 className="text-white font-kumbh text-2xl md:text-[30px] font-semibold mb-4">
                            Whitepapers
                        </h3>
                        <p className="text-[#98989A] text-sm md:text-base font-normal mb-6 max-w-sm">
                            Dive into comprehensive reports and analyses with our collection of whitepapers.                         </p>
                        <button className="bg-[#1a1a1a] cursor-pointer hover:bg-[#262626] border border-[#262626] text-[#98989A] text-sm font-normal px-6 py-3 rounded-md transition flex items-center w-full sm:w-[90%] justify-center gap-2">
                            Download Whitepapers Now
                            <svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.375 3.125L16.75 3.125C16.9158 3.125 17.0747 3.19085 17.1919 3.30806C17.3092 3.42527 17.375 3.58424 17.375 3.75V13.125C17.375 13.4702 17.0952 13.75 16.75 13.75C16.4048 13.75 16.125 13.4702 16.125 13.125V5.25888L4.69194 16.6919C4.44786 16.936 4.05214 16.936 3.80806 16.6919C3.56398 16.4479 3.56398 16.0521 3.80806 15.8081L15.2411 4.375L7.375 4.375C7.02982 4.375 6.75 4.09518 6.75 3.75C6.75 3.40482 7.02982 3.125 7.375 3.125Z" fill="#FFD11A" />
                            </svg>
                        </button>
                    </div>

                    {/* Downloaded By */}
                    <div className="flex gap-8 mt-8 justify-center items-center p-3 rounded-md bg-[#1a1a1a] border-1 border-[#262626] w-[300px]">
                        <div>
                            <p className="text-[#98989A] text-sm font-normal mb-1">Downloaded By</p>
                            <span className="text-white font-semibold text-xl">10k+ Users</span>
                        </div>
                        <div className="flex items-center -space-x-3 bg-[#141414] p-1 rounded-lg">
                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="User"
                                className="w-10 h-10 rounded-full border-2 border-black"
                            />
                            <img
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                alt="User"
                                className="w-10 h-10 rounded-full border-2 border-black"
                            />
                            <img
                                src="https://randomuser.me/api/portraits/men/55.jpg"
                                alt="User"
                                className="w-10 h-10 rounded-full border-2 border-black"
                            />

                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="space-y-6 py-12">
                    {/* Topics */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <h3 className="text-xl font-semibold sm:flex-1">Topics Coverage</h3>
                        <p className="text-[#98989A] text-sm md:text-base font-normal sm:flex-[3]">
                            Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%).                        </p>
                    </div>

                    {/* Image */}
                    <div className="rounded-lg overflow-hidden">
                        <img src={Resource2} alt="Ebooks" className="w-full h-56 md:h-72 object-cover" />
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-[#1a1a1a] border border-[#262626] flex flex-col-reverse justify-center rounded-lg p-4">
                            <p className="text-white font-semibold text-lg">Over 50 whitepapers</p>
                            <p className="text-[#98989A] text-base font-normal">Total Whitepapers</p>
                        </div>
                        <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-4 flex justify-between items-center sm:col-span-2">
                            <div className="flex flex-col-reverse">
                                <p className="text-white font-semibold text-lg">PDF format for access</p>
                                <p className="text-[#98989A] text-base font-normal">Download Formats</p>
                            </div>
                            <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-3 flex gap-2 items-center cursor-pointer">
                                <p className="text-[#98989A] text-sm">Preview</p>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.0023 9.52301C18.2153 9.79098 18.3332 10.1391 18.3332 10.5001C18.3332 10.8611 18.2153 11.2092 18.0023 11.4772C16.6536 13.1251 13.5836 16.3334 9.99984 16.3334C6.4161 16.3334 3.34616 13.1251 1.99744 11.4772C1.78442 11.2092 1.6665 10.8611 1.6665 10.5001C1.6665 10.1391 1.78442 9.79098 1.99744 9.52301C3.34616 7.87509 6.4161 4.66675 9.99984 4.66675C13.5836 4.66675 16.6536 7.87509 18.0023 9.52301Z" stroke="#FFD11A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.0003 13.0925C11.4191 13.0925 12.5693 11.9318 12.5693 10.5C12.5693 9.06814 11.4191 7.90741 10.0003 7.90741C8.58145 7.90741 7.43127 9.06814 7.43127 10.5C7.43127 11.9318 8.58145 13.0925 10.0003 13.0925Z" stroke="#FFD11A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Author Expertise */}
                    <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-4">
                        <p className="text-base font-normal mb-2 text-[#98989A]">Average Author Expertise</p>
                        <p className="text-white text-sm md:text-lg font-medium">
                            Whitepapers are authored by subject matter experts with an average of 20 years of experience.                        </p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Resource;

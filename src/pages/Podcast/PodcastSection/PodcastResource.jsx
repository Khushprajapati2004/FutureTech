import React from 'react'
import Resource1 from "../../../assets/Resources/Resource1.png";


const PodcastResource = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-10 px-4 md:px-12 lg:px-20 font-inter border-b border-[#262626]">
                {/* Left Content */}
                <div className="flex flex-col justify-center lg:border-r border-[#262626] space-y-6">
                    <div className='lg:mt-0 mt-8 border-b-2 border-[#262626] lg:border-0 lg:pb-0 pb-14'>
                        <div className="mb-5 md:w-[60px] md:h-[60px] w-[50px] h-[50px]">
                            <svg viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36.526 20.9116L14.6384 42.5L8.47405 36.4199C5.17532 33.1663 5.17532 27.891 8.47405 24.6374L24.3887 8.94024C27.6875 5.68659 33.0358 5.68659 36.3345 8.94024L36.526 9.12907C39.8247 12.3827 39.8247 17.6579 36.526 20.9116Z" fill="#FFD11A" />
                                <path d="M23.4741 40.0884L45.3616 18.5L51.526 24.5801C54.8247 27.8337 54.8247 33.109 51.5259 36.3626L35.6113 52.0598C32.3125 55.3134 26.9642 55.3134 23.6655 52.0598L23.4741 51.8709C20.1753 48.6173 20.1753 43.3421 23.4741 40.0884Z" fill="#404040" />
                            </svg>

                        </div>

                        <h3 className="text-white font-kumbh text-xl md:text-2xl font-semibold flex items-center justify-between mr-0 sm:mr-4 md:mr-12">
                            AI Revolution

                            <div className="flex bg-[#141414] border-1 border-[#262626] py-2 px-3 rounded-full">
                                {Array(5)
                                    .fill(0)
                                    .map((_, i) => (
                                        <svg
                                            key={i}
                                            className="md:w-5 md:h-5 w-4 h-4 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.43 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                            </div>
                        </h3>

                    </div>

                    {/* Downloaded By */}
                    <div className="flex gap-3 md:gap-8 justify-center items-center p-4 rounded-md bg-[#1a1a1a] border-1 border-[#262626] mr-0 sm:mr-4 md:mr-12">
                        <div>
                            <p className="text-[#98989A] text-sm font-normal mb-1">Host</p>
                            <span className="text-white font-medium md:font-semibold text-sm md:text-xl">Dr. Sarah Mitchell</span>
                        </div>
                        <div className="flex items-center cursor-pointer gap-2 md:gap-3 bg-[#141414] text-[#98989A] px-5 py-3.5 rounded-lg border text-sm font-normal border-[#262626]">
                            Listen Podcast
                            <svg width="14" height="14" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.875 0.625L13.25 0.625C13.4158 0.625 13.5747 0.690848 13.6919 0.808058C13.8092 0.925269 13.875 1.08424 13.875 1.25V10.625C13.875 10.9702 13.5952 11.25 13.25 11.25C12.9048 11.25 12.625 10.9702 12.625 10.625V2.75888L1.19194 14.1919C0.947864 14.436 0.552136 14.436 0.308058 14.1919C0.0639806 13.9479 0.0639806 13.5521 0.308058 13.3081L11.7411 1.875L3.875 1.875C3.52982 1.875 3.25 1.59518 3.25 1.25C3.25 0.904822 3.52982 0.625 3.875 0.625Z" fill="#FFD11A" />
                            </svg>


                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="space-y-6 py-12">


                    {/* Image */}
                    <div className="rounded-lg overflow-hidden">
                        <img src={Resource1} alt="Ebooks" className="w-full h-56 md:h-72 object-cover" />
                    </div>

                    {/* Topics */}
                    <div>
                        <h3 className="text-[22px] font-semibold ">Delves into the transformative impact of AI</h3>
                        <p className="text-[#98989A] text-sm md:text-base font-normal ">
                            Join Dr. Sarah Mitchell as she delves into the transformative impact of AI on industries, featuring expert
                            interviews and real-world case studies. Explore the possibilities of AI in healthcare, finance, and more.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-[#1a1a1a] border border-[#262626] flex flex-col-reverse justify-center rounded-lg p-4">
                            <p className="text-white font-medium text-lg">50</p>
                            <p className="text-[#98989A] text-base font-normal">Total Episodes</p>
                        </div>

                        <div className="bg-[#1a1a1a] border border-[#262626] flex flex-col-reverse justify-center rounded-lg p-4">
                            <p className="text-white font-medium text-lg">30 min</p>
                            <p className="text-[#98989A] text-base font-normal">Average Episode Length</p>
                        </div>

                        <div className="bg-[#1a1a1a] border border-[#262626] flex flex-col-reverse justify-center rounded-lg p-4">
                            <p className="text-white font-medium text-lg">Weekly</p>
                            <p className="text-[#98989A] text-base font-normal">Release Frequency</p>
                        </div>

                    </div>


                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-10 px-4 md:px-12 lg:px-20 font-inter border-b border-[#262626]">
                {/* Left Content */}
                <div className="flex flex-col justify-center lg:border-r border-[#262626] space-y-6">
                    <div className='lg:mt-0 mt-8 border-b-2 border-[#262626] lg:border-0 lg:pb-0 pb-14'>
                        <div className="mb-5 md:w-[60px] md:h-[60px] w-[50px] h-[50px]">
                            <svg viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36.526 20.9116L14.6384 42.5L8.47405 36.4199C5.17532 33.1663 5.17532 27.891 8.47405 24.6374L24.3887 8.94024C27.6875 5.68659 33.0358 5.68659 36.3345 8.94024L36.526 9.12907C39.8247 12.3827 39.8247 17.6579 36.526 20.9116Z" fill="#FFD11A" />
                                <path d="M23.4741 40.0884L45.3616 18.5L51.526 24.5801C54.8247 27.8337 54.8247 33.109 51.5259 36.3626L35.6113 52.0598C32.3125 55.3134 26.9642 55.3134 23.6655 52.0598L23.4741 51.8709C20.1753 48.6173 20.1753 43.3421 23.4741 40.0884Z" fill="#404040" />
                            </svg>

                        </div>

                        <h3 className="text-white font-kumbh text-xl md:text-2xl font-semibold flex items-center justify-between mr-0 sm:mr-4 md:mr-12">
                            AI Conversations
                            <div className="flex bg-[#141414] border-1 border-[#262626] py-2 px-3 rounded-full">
                                {Array(5)
                                    .fill(0)
                                    .map((_, i) => (
                                        <svg
                                            key={i}
                                            className="md:w-5 md:h-5 w-4 h-4 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.43 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                            </div>
                        </h3>

                    </div>

                    {/* Downloaded By */}
                    <div className="flex gap-3 md:gap-8 justify-center items-center p-4 rounded-md bg-[#1a1a1a] border-1 border-[#262626] mr-0 sm:mr-4 md:mr-12">
                        <div>
                            <p className="text-[#98989A] text-sm font-normal mb-1">Host</p>
                            <span className="text-white font-medium md:font-semibold text-sm md:text-xl">Mark Anderson</span>
                        </div>
                        <div className="flex items-center cursor-pointer gap-2 md:gap-3 bg-[#141414] text-[#98989A] px-5 py-3.5 rounded-lg border text-sm font-normal border-[#262626]">
                            Listen Podcast
                            <svg width="14" height="14" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.875 0.625L13.25 0.625C13.4158 0.625 13.5747 0.690848 13.6919 0.808058C13.8092 0.925269 13.875 1.08424 13.875 1.25V10.625C13.875 10.9702 13.5952 11.25 13.25 11.25C12.9048 11.25 12.625 10.9702 12.625 10.625V2.75888L1.19194 14.1919C0.947864 14.436 0.552136 14.436 0.308058 14.1919C0.0639806 13.9479 0.0639806 13.5521 0.308058 13.3081L11.7411 1.875L3.875 1.875C3.52982 1.875 3.25 1.59518 3.25 1.25C3.25 0.904822 3.52982 0.625 3.875 0.625Z" fill="#FFD11A" />
                            </svg>


                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="space-y-6 py-12">


                    {/* Image */}
                    <div className="rounded-lg overflow-hidden">
                        <img src={Resource1} alt="Ebooks" className="w-full h-56 md:h-72 object-cover" />
                    </div>

                    {/* Topics */}
                    <div>
                        <h3 className="text-[22px] font-semibold ">Engage in thought-provoking conversations with leading experts.</h3>
                        <p className="text-[#98989A] text-sm md:text-base font-normal ">
                            Mark discusses the future of AI, the impact on society, and how it's shaping industries worldwide.
                             Engage in thought-provoking conversations with leading experts.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-[#1a1a1a] border border-[#262626] flex flex-col-reverse justify-center rounded-lg p-4">
                            <p className="text-white font-medium text-lg">40</p>
                            <p className="text-[#98989A] text-base font-normal">Total Episodes</p>
                        </div>

                        <div className="bg-[#1a1a1a] border border-[#262626] flex flex-col-reverse justify-center rounded-lg p-4">
                            <p className="text-white font-medium text-lg">40 min</p>
                            <p className="text-[#98989A] text-base font-normal">Average Episode Length</p>
                        </div>

                        <div className="bg-[#1a1a1a] border border-[#262626] flex flex-col-reverse justify-center rounded-lg p-4">
                            <p className="text-white font-medium text-lg">Monthly</p>
                            <p className="text-[#98989A] text-base font-normal">Release Frequency</p>
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}

export default PodcastResource

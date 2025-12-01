import React from "react";
import { FaTwitter, FaMedium, FaLinkedin } from "react-icons/fa";

const Headline = () => {
    return (
        <section className=" text-white px-6 md:px-12 lg:px-14 font-inter border-b border-[#262626]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#262626]">

                {/* General Inquiries */}
                <div className="flex flex-col gap-3 py-6 md:py-8 lg:py-14 px-2 md:px-6">
                    <h3 className="font-medium text-lg">General Inquiries</h3>
                    <a
                        href="mailto:contact@ai-podcasts.com"
                        className="flex items-center md:ml-0 ml-8 gap-4 w-fit border border-[#262626] text-sm font-normal text-[#98989A] bg-neutral-900 px-4 py-2 rounded-md hover:bg-neutral-800 transition"
                    >
                        contact@ai-podcasts.com
                        <svg width="14" height="14" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.875 0.625L13.25 0.625C13.4158 0.625 13.5747 0.690848 13.6919 0.808058C13.8092 0.925269 13.875 1.08424 13.875 1.25V10.625C13.875 10.9702 13.5952 11.25 13.25 11.25C12.9048 11.25 12.625 10.9702 12.625 10.625V2.75888L1.19194 14.1919C0.947864 14.436 0.552136 14.436 0.308058 14.1919C0.0639806 13.9479 0.0639806 13.5521 0.308058 13.3081L11.7411 1.875L3.875 1.875C3.52982 1.875 3.25 1.59518 3.25 1.25C3.25 0.904822 3.52982 0.625 3.875 0.625Z" fill="#FFD11A" />
                        </svg>

                    </a>
                    <a
                        href="tel:+11234567890"
                        className="flex items-center md:ml-0 ml-8 gap-4 w-fit border border-[#262626] text-[#98989A] text-sm font-normal bg-neutral-900 px-4 py-2 rounded-md hover:bg-neutral-800 transition"
                    >
                        +1 (123) 456-7890
                        <svg width="14" height="14" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.875 0.625L13.25 0.625C13.4158 0.625 13.5747 0.690848 13.6919 0.808058C13.8092 0.925269 13.875 1.08424 13.875 1.25V10.625C13.875 10.9702 13.5952 11.25 13.25 11.25C12.9048 11.25 12.625 10.9702 12.625 10.625V2.75888L1.19194 14.1919C0.947864 14.436 0.552136 14.436 0.308058 14.1919C0.0639806 13.9479 0.0639806 13.5521 0.308058 13.3081L11.7411 1.875L3.875 1.875C3.52982 1.875 3.25 1.59518 3.25 1.25C3.25 0.904822 3.52982 0.625 3.875 0.625Z" fill="#FFD11A" />
                        </svg>

                    </a>
                </div>

                {/* Technical Support */}
                <div className="flex flex-col gap-3 py-6 md:py-8 lg:py-14 px-2 md:px-6">
                    <h3 className="font-medium text-lg">Technical Support</h3>
                    <a
                        href="mailto:contact@ai-podcasts.com"
                        className="flex items-center md:ml-0 ml-8 gap-4 w-fit justify-between border border-[#262626] text-sm font-normal text-[#98989A] bg-neutral-900 px-4 py-2 rounded-md hover:bg-neutral-800 transition"
                    >
                        contact@ai-podcasts.com
                        <svg width="14" height="14" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.875 0.625L13.25 0.625C13.4158 0.625 13.5747 0.690848 13.6919 0.808058C13.8092 0.925269 13.875 1.08424 13.875 1.25V10.625C13.875 10.9702 13.5952 11.25 13.25 11.25C12.9048 11.25 12.625 10.9702 12.625 10.625V2.75888L1.19194 14.1919C0.947864 14.436 0.552136 14.436 0.308058 14.1919C0.0639806 13.9479 0.0639806 13.5521 0.308058 13.3081L11.7411 1.875L3.875 1.875C3.52982 1.875 3.25 1.59518 3.25 1.25C3.25 0.904822 3.52982 0.625 3.875 0.625Z" fill="#FFD11A" />
                        </svg>

                    </a>
                    <a
                        href="tel:+11234567890"
                        className="flex items-center md:ml-0 ml-8 gap-4 w-fit border border-[#262626] text-sm text-[#98989A] font-normal bg-neutral-900 px-4 py-2 rounded-md hover:bg-neutral-800 transition"
                    >
                        +1 (123) 456-7890
                        <svg width="14" height="14" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.875 0.625L13.25 0.625C13.4158 0.625 13.5747 0.690848 13.6919 0.808058C13.8092 0.925269 13.875 1.08424 13.875 1.25V10.625C13.875 10.9702 13.5952 11.25 13.25 11.25C12.9048 11.25 12.625 10.9702 12.625 10.625V2.75888L1.19194 14.1919C0.947864 14.436 0.552136 14.436 0.308058 14.1919C0.0639806 13.9479 0.0639806 13.5521 0.308058 13.3081L11.7411 1.875L3.875 1.875C3.52982 1.875 3.25 1.59518 3.25 1.25C3.25 0.904822 3.52982 0.625 3.875 0.625Z" fill="#FFD11A" />
                        </svg>

                    </a>
                </div>

                {/* Our Office */}
                <div className="flex flex-col gap-3 py-6 md:py-8 lg:py-14 px-2 md:px-6">
                    <h3 className="font-medium text-lg">Our Office</h3>
                    <p className="text-[#98989A] text-base font-normal md:ml-0 ml-8">
                        Address: 123 AI Tech Avenue, <br /> Techville, 54321
                    </p>
                    <a
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center md:ml-0 ml-8 gap-4 w-fit border border-[#262626] text-sm font-normal text-[#98989A] bg-neutral-900 px-4 py-2 rounded-md hover:bg-neutral-800 transition"
                    >
                        Get Directions
                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.875 0.625L13.25 0.625C13.4158 0.625 13.5747 0.690848 13.6919 0.808058C13.8092 0.925269 13.875 1.08424 13.875 1.25V10.625C13.875 10.9702 13.5952 11.25 13.25 11.25C12.9048 11.25 12.625 10.9702 12.625 10.625V2.75888L1.19194 14.1919C0.947864 14.436 0.552136 14.436 0.308058 14.1919C0.0639806 13.9479 0.0639806 13.5521 0.308058 13.3081L11.7411 1.875L3.875 1.875C3.52982 1.875 3.25 1.59518 3.25 1.25C3.25 0.904822 3.52982 0.625 3.875 0.625Z" fill="#FFD11A" />
                        </svg>

                    </a>
                </div>

                {/* Connect with Us */}
                <div className="flex flex-col gap-3 py-14 px-6">
                    <h3 className="font-medium text-lg">Connect with Us</h3>
                    <div className="flex gap-3">
                        <a
                            href="#"
                            className="bg-neutral-900 px-8 py-4 rounded-md hover:bg-neutral-800 transition border border-[#262626] "
                        >
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.0475 5.98396C18.0552 6.15996 18.0552 6.32796 18.0552 6.50396C18.063 11.84 14.1426 18 6.97319 18C4.85865 18 2.7827 17.368 1 16.184C1.30869 16.224 1.61738 16.24 1.92608 16.24C3.6779 16.24 5.38343 15.632 6.76483 14.504C5.09789 14.472 3.6316 13.344 3.12226 11.696C3.70877 11.816 4.31072 11.792 4.8818 11.624C3.06824 11.256 1.76401 9.59997 1.7563 7.67197C1.7563 7.65597 1.7563 7.63997 1.7563 7.62397C2.29651 7.93597 2.90617 8.11197 3.52356 8.12797C1.81803 6.94396 1.28554 4.58396 2.31966 2.73595C4.30301 5.26396 7.22015 6.79196 10.3534 6.95996C10.037 5.55996 10.4691 4.08796 11.4801 3.09595C13.0467 1.56795 15.5162 1.64795 16.998 3.27195C17.87 3.09595 18.7112 2.75995 19.4752 2.28795C19.182 3.22395 18.5723 4.01596 17.762 4.51996C18.5337 4.42396 19.29 4.20796 20 3.88795C19.4752 4.70396 18.8115 5.40796 18.0475 5.98396Z" fill="white" />
                            </svg>

                        </a>
                        <a
                            href="#"
                            className="bg-neutral-900 px-8 py-4 rounded-md hover:bg-neutral-800 transition border border-[#262626]"
                        >
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_343_6495)">
                                    <path d="M11.7812 10.1897C11.7812 13.332 9.25578 15.8793 6.1407 15.8793C3.02561 15.8793 0.5 13.3314 0.5 10.1897C0.5 7.04806 3.02542 4.5 6.1407 4.5C9.25597 4.5 11.7812 7.04749 11.7812 10.1897Z" fill="white" />
                                    <path d="M17.9688 10.1898C17.9688 13.1475 16.7061 15.5462 15.1485 15.5462C13.5908 15.5462 12.3281 13.1475 12.3281 10.1898C12.3281 7.23201 13.5906 4.83331 15.1483 4.83331C16.7059 4.83331 17.9686 7.23124 17.9686 10.1898" fill="white" />
                                    <path d="M20.4993 10.1898C20.4993 12.8392 20.0553 14.9883 19.5074 14.9883C18.9595 14.9883 18.5156 12.8398 18.5156 10.1898C18.5156 7.53977 18.9597 5.39124 19.5074 5.39124C20.0551 5.39124 20.4993 7.53958 20.4993 10.1898Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_343_6495">
                                        <rect width="20" height="20" fill="white" transform="translate(0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </a>
                        <a
                            href="#"
                            className="bg-neutral-900 px-8 py-4 rounded-md hover:bg-neutral-800 transition border border-[#262626]"
                        >
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.8858 1.33331H3.11157C2.77221 1.33331 2.44676 1.46812 2.2068 1.70808C1.96684 1.94804 1.83203 2.2735 1.83203 2.61285V17.3871C1.83203 17.7265 1.96684 18.0519 2.2068 18.2919C2.44676 18.5318 2.77221 18.6666 3.11157 18.6666H17.8858C18.2252 18.6666 18.5506 18.5318 18.7906 18.2919C19.0306 18.0519 19.1654 17.7265 19.1654 17.3871V2.61285C19.1654 2.2735 19.0306 1.94804 18.7906 1.70808C18.5506 1.46812 18.2252 1.33331 17.8858 1.33331ZM6.99833 16.0991H4.39231V7.82128H6.99833V16.0991ZM5.69351 6.67415C5.39791 6.67248 5.10941 6.58329 4.86445 6.41782C4.61949 6.25235 4.42903 6.01803 4.31711 5.74442C4.20519 5.47081 4.17683 5.17018 4.23561 4.88047C4.29439 4.59076 4.43767 4.32496 4.64737 4.1166C4.85706 3.90824 5.12379 3.76667 5.41387 3.70976C5.70395 3.65284 6.00439 3.68313 6.27727 3.7968C6.55016 3.91047 6.78325 4.10243 6.94714 4.34846C7.11104 4.59448 7.19838 4.88353 7.19814 5.17915C7.20093 5.37706 7.16385 5.57351 7.0891 5.75678C7.01435 5.94006 6.90346 6.10641 6.76305 6.24592C6.62265 6.38543 6.45559 6.49524 6.27184 6.56881C6.08809 6.64238 5.8914 6.67821 5.69351 6.67415ZM16.6039 16.1064H13.9991V11.5841C13.9991 10.2504 13.4321 9.83868 12.7003 9.83868C11.9275 9.83868 11.1692 10.4213 11.1692 11.6178V16.1064H8.56314V7.82729H11.0693V8.97442H11.103C11.3545 8.46526 12.2356 7.59498 13.5802 7.59498C15.0343 7.59498 16.6051 8.45804 16.6051 10.9858L16.6039 16.1064Z" fill="white" />
                            </svg>

                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Headline;

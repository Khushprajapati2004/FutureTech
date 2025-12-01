import React, { useState } from "react";
import Analysis1 from "../../../assets/Analysis1.png";
import Analysis2 from "../../../assets/Analysis2.png";

const categories = ["Whitepapers", "Ebooks", "Reports"];

const Analysis = () => {
  const [active, setActive] = useState("Whitepapers");

  return (
    <>
      {/* Top Section */}
      <div className="bg-[#1A1A1A] text-white font-inter border-b border-[#262626]">
        <div className="mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Left content */}
          <div className="text-left space-y-2">
            <button className="bg-[#1f1f1f] text-xs sm:text-sm md:text-base font-medium px-3 py-1 rounded-md border border-[#262626] text-[#d1d1d1]">
              Dive into the Details
            </button>
            <h2 className="text-2xl sm:text-3xl md:text-[40px] lg:text-[44px] font-kumbh font-medium leading-snug">
              In-Depth Reports and Analysis
            </h2>
          </div>

          {/* Right toggle buttons */}
          <div className="flex flex-wrap items-center gap-3 bg-[#141414] rounded-lg p-2.5 border border-[#262626] w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-md text-sm cursor-pointer font-normal transition ${
                  active === cat
                    ? "bg-[#262626] text-white font-medium"
                    : "bg-transparent text-[#9a9a9a] hover:text-white hover:bg-[#1f1f1f]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Section 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-8 sm:gap-10 px-4 sm:px-8 md:px-12 lg:px-20  font-inter border-b border-[#262626]">
        {/* Left Content */}
        <div className="flex flex-col justify-center lg:border-r border-[#262626] space-y-4 sm:space-y-6">
          <div className="lg:mt-0 mt-6 border-b-2 border-[#262626] lg:border-0 lg:pb-0 pb-8">
            <div className="mb-4">
              <svg
                width="50"
                height="50"
                className="sm:w-[60px] sm:h-[60px]"
                viewBox="0 0 60 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M42 42.5H18V18.5L42 42.5Z" fill="#404040" />
                <path
                  d="M54 6.5H6L18 18.5L42 18.5L42 42.5L54 54.5V6.5Z"
                  fill="#FFD11A"
                />
              </svg>
            </div>

            <h3 className="text-white font-kumbh text-xl sm:text-2xl md:text-[30px] font-semibold">
              Quantum Computing Whitepaper
            </h3>
          </div>

          <p className="text-sm sm:text-base font-normal text-[#98989A]">
            Provides technical specifications and requirements for implementing
            quantum computing systems.
          </p>
        </div>

        {/* Right Content */}
        <div className="space-y-6 py-10">
          {/* Image */}
          <div className="rounded-lg overflow-hidden">
            <img
              src={Analysis1}
              alt="Quantum Computing"
              className="w-full h-48 sm:h-56 md:h-72 object-cover"
            />
          </div>

          {/* Topics */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-semibold">
                Quantum Computing Whitepaper
              </h3>
              <p className="text-[#98989A] text-sm sm:text-base font-normal lg:w-[620px]">
                An in-depth whitepaper exploring the principles, applications,
                and potential impact of quantum computing.
              </p>
            </div>

            <button className="w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer text-[#98989A] bg-[#1a1a1a] hover:bg-[#262626] px-4 sm:px-5 py-3 rounded-md border border-[#262626] text-sm font-normal transition">
              Download PDF Now
              <svg
                width="20"
                height="20"
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

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              ["July 2023", "Publication Date"],
              ["Quantum Computing", "Category"],
              ["Dr. Quantum", "Author"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="bg-[#1a1a1a] border border-[#262626] flex flex-col-reverse justify-center rounded-lg p-4"
              >
                <p className="text-white font-medium text-base">{value}</p>
                <p className="text-[#98989A] text-base font-normal">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2 */}
      {/* Repeat with same responsive approach as Section 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-8 sm:gap-10 px-4 sm:px-8 md:px-12 lg:px-20 font-inter border-b border-[#262626]">
        {/* Left */}
        <div className="flex flex-col justify-center lg:border-r border-[#262626] space-y-4 sm:space-y-6">
          <div className="lg:mt-0 mt-6 border-b-2 border-[#262626] lg:border-0 lg:pb-0 pb-8">
            <div className="mb-4">
              <svg
                width="50"
                height="50"
                className="sm:w-[60px] sm:h-[60px]"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50.1034 9.8967C55.7244 15.5177 55.1922 25.1632 48.9725 31.3829L37.664 42.6915L17.3086 22.3361L28.6171 11.0276C34.8368 4.80786 44.4824 4.27572 50.1034 9.8967Z"
                  fill="#FFD11A"
                />
                <path
                  d="M26.3554 54L6 33.6446C12.2455 27.3991 21.8653 26.8928 27.4862 32.5138C33.1072 38.1347 32.6009 47.7545 26.3554 54Z"
                  fill="#404040"
                />
                <path
                  d="M47.8398 52.8691L27.4844 32.5138C33.7299 26.2682 43.3496 25.7619 48.9706 31.3829C54.5916 37.0039 54.0853 46.6236 47.8398 52.8691Z"
                  fill="#FFD11A"
                />
                <path
                  d="M27.4882 32.5138L7.13281 12.1584C13.3784 5.91288 22.9981 5.40658 28.6191 11.0276C34.24 16.6485 33.7337 26.2682 27.4882 32.5138Z"
                  fill="#FFD11A"
                />
              </svg>
            </div>

            <h3 className="text-white font-kumbh text-xl sm:text-2xl md:text-[30px] font-semibold">
              Space Exploration Whitepaper
            </h3>
          </div>

          <p className="text-sm sm:text-base font-normal text-[#98989A]">
            Explores Mars colonization, asteroid resource potential, and space
            tourism.
          </p>
        </div>

        {/* Right */}
        <div className="space-y-6 py-10">
          <div className="rounded-lg overflow-hidden">
            <img
              src={Analysis2}
              alt="Space Exploration"
              className="w-full h-48 sm:h-56 md:h-72 object-cover"
            />
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-semibold">
                Space Exploration Whitepaper
              </h3>
              <p className="text-[#98989A] text-sm sm:text-base font-normal lg:w-[620px]">
                An in-depth whitepaper covering the latest advancements in space
                exploration, including Mars missions and asteroid mining.
              </p>
            </div>

            <button className=" w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer text-[#98989A] bg-[#1a1a1a] hover:bg-[#262626] px-4 sm:px-5 py-3 rounded-md border border-[#262626] text-sm font-normal transition">
              Download PDF Now
              <svg
                width="20"
                height="20"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              ["September 2023", "Publication Date"],
              ["Space Exploration", "Category"],
              ["FutureTech Space Division", "Author"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="bg-[#1a1a1a] border border-[#262626] flex flex-col-reverse justify-center rounded-lg p-4"
              >
                <p className="text-white font-medium text-base">{value}</p>
                <p className="text-[#98989A] text-base font-normal">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Analysis;

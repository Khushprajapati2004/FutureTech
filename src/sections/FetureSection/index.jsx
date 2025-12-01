import React from "react";
import F1Img from "../../assets/Featureimg/Feature1.svg";
import F2Img from "../../assets/Featureimg/Feature2.svg";

const FeatureSection = () => {
  return (
    <>
      {/* Heading Section */}
      <div className="font-inter header-color px-6 md:px-12 lg:px-20 py-14 border-b border-[#262626]">
        <span className="inline-block bg-[#333333] text-sm  md:text-base font-medium py-1 px-2 rounded-sm mb-2">
          Unlock the Power of
        </span>
        <h2 className="font-kumbh text-[28px] md:text-[44px] font-medium text-white">
          FutureTech Features
        </h2>
      </div>

      {/* Future Technology Blog Section */}
      <section className="px-6 md:px-12 lg:px-20 border-b border-[#262626]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Section */}
          <div className="flex flex-1 flex-col justify-center lg:w-1/2 lg:mt-0 mt-12  border-b-2 border-[#262626] lg:border-0 lg:pb-0 pb-14">
            {/* Logo */}
            <div className="mb-6">
              <img src={F1Img} alt="F1Img" className="w-16 h-15" />
            </div>

            {/* Heading */}
            <h2 className="font-kumbh text-2xl md:text-3xl font-semibold mb-3">
              Future Technology Blog
            </h2>

            {/* Subtext */}
            <p className="text-[#98989A] text-sm md:text-base font-normal max-w-md">
              Stay informed with our blog section dedicated to future technology.
            </p>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 lg:pl-12 lg:border-l lg:border-[#262626] grid grid-cols-1 sm:grid-cols-2 flex-3/12 gap-5 py-10">
            {/* Card 1 */}
            <div className="border border-[#262626] rounded-lg p-5 bg-[#1a1a1a] transition">
              <h3 className="text-xl font-medium mb-2">Quantity</h3>
              <p className="text-[#98989A] text-base font-normal">
                Over 1,000 articles on emerging tech trends and breakthroughs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-[#262626] rounded-lg p-5 bg-[#1a1a1a] transition">
              <h3 className="text-xl font-medium mb-2">Variety</h3>
              <p className="text-[#98989A] text-base font-normal">
                Articles cover fields like AI, robotics, biotechnology, and more.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-[#262626] rounded-lg p-5 bg-[#1a1a1a] transition">
              <h3 className="text-xl font-medium mb-2">Frequency</h3>
              <p className="text-[#98989A] text-base font-normal">
                Fresh content added daily to keep you up to date.
              </p>
            </div>

            {/* Card 4 */}
            <div className="border border-[#262626] rounded-lg p-5 bg-[#1a1a1a] transition">
              <h3 className="text-xl font-medium mb-2">Authoritative</h3>
              <p className="text-[#98989A] text-base font-normal">
                Written by our team of tech experts and industry professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="px-6 md:px-12 lg:px-20 border-b border-[#262626]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Section */}
          <div className="flex flex-1 flex-col justify-center lg:w-1/2 lg:mt-0 mt-12 bo border-b-2 border-[#262626] lg:border-0 lg:pb-0 pb-14">
            {/* Logo */}
            <div className="mb-6">
              <img src={F2Img} alt="F2Img" className="w-16 h-15" />
            </div>

            {/* Heading */}
            <h2 className="font-kumbh text-2xl md:text-3xl font-semibold mb-3">
              Research Insights Blogs
            </h2>

            {/* Subtext */}
            <p className="text-[#98989A] text-sm md:text-base font-normal max-w-md">
              Dive deep into future technology concepts with our research section.
            </p>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 lg:pl-12 lg:border-l lg:border-[#262626] grid grid-cols-1 sm:grid-cols-2 gap-5 flex-3/12 py-10">
            {/* Card 1 */}
            <div className="border border-[#262626] rounded-lg p-5 bg-[#1a1a1a] transition">
              <h3 className="text-xl font-medium mb-2">Depth</h3>
              <p className="text-[#98989A] text-base font-normal">
                500+ research articles for in-depth understanding.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-[#262626] rounded-lg p-5 bg-[#1a1a1a] transition">
              <h3 className="text-xl font-medium mb-2">Graphics</h3>
              <p className="text-[#98989A] text-base font-normal">
                Visual aids and infographics to enhance comprehension.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-[#262626] rounded-lg p-5 bg-[#1a1a1a] transition">
              <h3 className="text-xl font-medium mb-2">Trends</h3>
              <p className="text-[#98989A] text-base font-normal">
                Explore emerging trends in future technology research.
              </p>
            </div>

            {/* Card 4 */}
            <div className="border border-[#262626] rounded-lg p-5 bg-[#1a1a1a] transition">
              <h3 className="text-xl font-medium mb-2">Contributors</h3>
              <p className="text-[#98989A] text-base font-normal">
                Contributions from tech researchers and academics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureSection;

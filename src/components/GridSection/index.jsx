import React from "react";
import Icon1 from "../../assets/Icon1.svg";
import Icon2 from "../../assets/Icon2.svg";
import Icon3 from "../../assets/Icon3.svg";
import Arrow from "../../assets/Arrow.svg";


const FeaturesSection = () => {
  return (
    <section className="mx-auto font-inter grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
  border border-[#262626] 
  divide-y md:divide-y-0 md:divide-x 
  divide-[#262626] overflow-hidden">

      {/* Feature 1 */}
      <div className="flex  justify-between p-6 sm:p-10 lg:p-20 lg:py-8">
        <div className="flex flex-col items-start gap-4">
          <img src={Icon1} alt="Icon1" className="w-10 h-10" />
          <div>
            <h3 className="text-white font-medium text-lg mb-1">Latest News Updates</h3>
            <p className="text-[#7E7E81] text-base font-normal mb-5">Stay Current</p>
            <p className="text-[#98989A] text-base font-normal">Over 1,000 articles published monthly</p>
          </div>
        </div>
        <div className="flex items-center mt-4 cursor-pointer group">
          <div className="w-11 h-11 rounded-full bg-[#FFD11A] flex items-center justify-center 
                  transition-all duration-300 ease-out group-hover:scale-110 group-hover:shadow-lg">
            <img
              src={Arrow}
              alt="Arrow"
              className="w-5 h-5 transition-transform duration-300 ease-out 
                 group-hover:translate-x-1.5 group-hover:-translate-y-1"
            />
          </div>
        </div>

      </div>

      {/* Feature 2 */}
      <div className="flex justify-between p-6 sm:p-10 lg:p-20 lg:py-8">
        <div className="flex flex-col items-start gap-4">
          <img src={Icon2} alt="Icon2" className="w-10 h-10" />
          <div>
            <h3 className="text-white font-medium text-lg mb-1">Expert Contributors</h3>
            <p className="text-[#7E7E81] text-base font-normal mb-5">Trusted Insights</p>
            <p className="text-[#98989A] text-base font-normal">50+ renowned AI experts on our team</p>
          </div>
        </div>
        <div className="flex items-center mt-4 cursor-pointer group">
          <div className="w-11 h-11 rounded-full bg-[#FFD11A] flex items-center justify-center 
                  transition-all duration-300 ease-out group-hover:scale-110 group-hover:shadow-lg">
            <img
              src={Arrow}
              alt="Arrow"
              className="w-5 h-5 transition-transform duration-300 ease-out 
                 group-hover:translate-x-1.5 group-hover:-translate-y-1"
            />
          </div>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex justify-between p-6 sm:p-10 lg:p-20 lg:py-8">
        <div className="flex flex-col items-start gap-4">
          <img src={Icon3} alt="Icon3" className="w-10 h-10" />
          <div>
            <h3 className="text-white font-medium text-lg mb-1">Global Readership</h3>
            <p className="text-[#7E7E81] text-base font-normal mb-5">Worldwide Impact</p>
            <p className="text-[#98989A] text-base font-normal">2 million monthly readers</p>
          </div>
        </div>
        <div className="flex items-center mt-4 cursor-pointer group">
          <div className="w-11 h-11 rounded-full bg-[#FFD11A] flex items-center justify-center 
                  transition-all duration-300 ease-out group-hover:scale-110 group-hover:shadow-lg">
            <img
              src={Arrow}
              alt="Arrow"
              className="w-5 h-5 transition-transform duration-300 ease-out 
                 group-hover:translate-x-1.5 group-hover:-translate-y-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

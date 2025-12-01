import React from "react";

const stats = [
  { value: "300+", label: "Resources available" },
  { value: "12k+", label: "Total Downloads" },
  { value: "10k+", label: "Active Users" },
  { value: "100+", label: "Countries Accesses Our Content" },
];

const StatsSection = () => {
  return (
    <div className="bg-[#141414] text-white font-inter">
      <div className="grid grid-cols-2 lg:grid-cols-4 border border-[#262626]">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center text-center py-10 px-6 border-b border-r border-[#262626] 
              last:border-r-0 sm:last:border-r lg:border-b-0"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">
              <span className="text-white">{stat.value.replace("+", "")}</span>
              <span className="text-[#FFD11A]">+</span>
            </h3>
            <p className="text-sm sm:text-base text-[#98989A]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;

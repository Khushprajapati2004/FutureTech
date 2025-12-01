import React from "react";
import Rcard1 from "../../../assets/Resources/Rcard1.png";
import Rcard2 from "../../../assets/Resources/Rcard2.png";
import Rcard3 from "../../../assets/Resources/Rcard3.png";

const ResourceCard = () => {
  const podcasts = [
    {
      title: "AI in Healthcare",
      description:
        "Dr. Lisa Adams discusses how AI is revolutionizing healthcare, from diagnostic tools to patient care.",
      image: Rcard1,
      duration: "2:30 min",
    },
    {
      title: "AI Ethics",
      description:
        "Explore the ethical dilemmas and considerations surrounding AI with guest speaker Dr. Michael Turner.",
      image: Rcard2,
      duration: "2:30 min",
    },
    {
      title: "Machine Learning Explained",
      description:
        "Dive into the intricacies of machine learning with AI expert Sarah Davis. In this episode…",
      image: Rcard3,
      duration: "2:30 min",
    },
  ];

  return (
    <section className="text-white font-inter border-b border-[#262626]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border md:px-12 px-0  border-[#262626]">
        {podcasts.map((podcast, idx) => (
          <div
            key={idx}
            className={`group relative overflow-hidden px-6 sm:px-8 py-10 border-[#262626]
              ${idx % 3 !== 2 ? "lg:border-r" : ""} 
              ${idx < podcasts.length - 3 ? "lg:border-b" : ""}
              ${idx % 2 !== 1 && idx < podcasts.length - 2 ? "md:border-r" : ""} 
              ${idx < podcasts.length - 2 ? "md:border-b" : ""}`}
          >
            {/* Thumbnail */}
            <div className="overflow-hidden">
              <img
                src={podcast.image}
                alt={podcast.title}
                className="w-full h-48 md:h-[244px] object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg"
              />
            </div>

            {/* Text */}
            <div className="space-y-3 mt-6">
              <h3 className="font-semibold text-lg">{podcast.title}</h3>
              <p className="text-sm sm:text-base text-[#98989A]">
                {podcast.description}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
              <button className="w-full cursor-pointer sm:w-auto flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-[#1a1a1a] hover:bg-[#262626] px-6 py-3 rounded-md border border-[#262626] text-sm transition">
                View Details
              </button>

              <button className="w-full cursor-pointer sm:w-auto flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-[#1a1a1a] hover:bg-[#262626] px-6 py-3 rounded-md border border-[#262626] text-sm transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResourceCard;

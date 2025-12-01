import React from 'react'

const Headline = () => {
    return (
        <section className=" text-white font-inter w-full px-4 sm:px-8 md:px-16 lg:px-20 lg:py-20 md:py-14 py-8  border-b border-[#262626]">
            <div className="mx-auto">
                {/* Headline */}
                <h2 className="text-3xl sm:text-4xl font-kumbh md:text-[55px] font-medium leading-snug lg:mb-6">
                    Unlock the World of Artificial Intelligence  <br />

                </h2>

                {/* Subtext */}
                <p className="text-[#98989A] text-sm sm:text-base font-normal leading-relaxed flex lg:flex-row flex-col lg:items-center lg:gap-10 gap-6 ">
                    <span className="text-white text-3xl sm:text-4xl font-kumbh md:text-[55px] w-6xl font-medium  ">through Podcasts   </span>
                    Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence.
                    Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation.
                </p>
            </div>
        </section>
    )
}

export default Headline

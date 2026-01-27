import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { experience = [] } = portfolioData || {};

  if (!experience.length) return null; // Avoid rendering if no experience

  const selectedExperience = experience[selectedItemIndex];

  return (
    <section
      className="experience_section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <SectionTitle title="Experience" id="experience-title" />

      <div className="flex flex-col md:flex-row sm:pb-10 pb-10 gap-6 md:gap-10">
        {/* Left Side – Period List */}
        <nav
          className="flex md:flex-col gap-4 md:gap-8 w-full md:w-1/4 sm:border-l sm:border-[#135e4c82] flex-wrap"
          aria-label="Experience periods"
        >
          {experience.map((exp, index) => (
            <button
              key={index}
              onClick={() => setSelectedItemIndex(index)}
              className={`text-lg sm:text-xl px-4 py-2 mb-0 sm:py-3 transition
                  ${
                    selectedItemIndex === index
                      ? "text-tertiary border-l-4 border-tertiary bg-[#1a7f5a5f] sm:-ml-[2px] -ml-[0px] text-left"
                      : "text-white sm:border-0 border-l-4 border-white sm:bg-[transparent] bg-[#000] text-left"
                  }`}
              aria-current={selectedItemIndex === index ? "true" : "false"}
            >
              {exp.period}
            </button>
          ))}
        </nav>

        {/* Right Side – Details */}
        <div className="flex flex-col gap-1 md:gap-2 w-full mt-4 md:mt-0 md:w-3/4">
          <h2 className="text-xl sm:text-2xl text-secondary font-semibold mb-0">
            {selectedExperience.title}
          </h2>
          <h3 className="text-lg sm:text-xl text-tertiary font-medium mb-0">
            {selectedExperience.company}
          </h3>
          <p className="text-white text-sm sm:text-base leading-relaxed mt-2 mb-0">
            {selectedExperience.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experiences;

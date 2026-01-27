import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Project() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { project = [] } = portfolioData || {};

  if (!project.length) return null; // Prevent rendering if no projects

  const selectedProject = project[selectedItemIndex];

  return (
    <section
      className="project_section"
      id="projects"
      aria-labelledby="projects-title"
    >
      <SectionTitle title="My Projects" id="projects-title" />

      <div className="flex flex-col md:flex-row sm:pb-10 gap-6 md:gap-10">
        {/* Left Side – Project List */}
        <nav
          className="flex md:flex-col gap-4 md:gap-8 w-full md:w-1/4 sm:border-l sm:border-[#135e4c82] flex-wrap"
          aria-label="Project list"
        >
          {project.map((proj, index) => (
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
              {proj.title}
            </button>
          ))}
        </nav>

        {/* Right Side – Project Details */}
        <div className="flex flex-col md:flex-row sm:pb-10 sm:pt-0 pt-0 pb-10 gap-6 sm:gap-10 sm:items-center justify-center w-full md:w-3/4">
          {/* Project Image */}
          {selectedProject.image &&
            (selectedProject.link ? (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit project: ${selectedProject.title}`}
              >
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="max-w-[300px] rounded"
                />
              </a>
            ) : (
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="max-w-[300px] rounded"
              />
            ))}

          {/* Project Text Content */}
          <div className="flex flex-col gap-1 md:gap-2 w-full mt-4 md:mt-0">
            <h2 className="text-xl sm:text-2xl text-secondary font-semibold mb-0">
              {selectedProject.title}
            </h2>

            {selectedProject.description && (
              <p className="max-w-[600px] text-white text-sm sm:text-base leading-relaxed mt-2 mb-0">
                {selectedProject.description}
              </p>
            )}

            {selectedProject.technologies?.length > 0 && (
              <p className="max-w-[600px] text-white text-sm sm:text-base leading-relaxed mt-2 mb-0">
                <span className="font-medium">Technologies:</span>{" "}
                {selectedProject.technologies.join(", ")}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;

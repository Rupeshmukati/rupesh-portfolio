import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function About() {
  const { portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData || {};
  const { skills = [], lottieURL, description1, description2 } = about || {};

  return (
    <section className="about_section" id="about" aria-labelledby="about-title">
      {/* Section Title */}
      <SectionTitle title="About Me" id="about-title" />

      <div className="flex flex-col md:flex-row w-full items-center gap-12">
        {/* Lottie Section */}
        {lottieURL && (
          <div className="w-full md:w-1/2">
            <lottie-player
              src={lottieURL}
              background="transparent"
              speed="1"
              autoplay
              loop
              className="w-full h-full"
              aria-label="Animated illustration about me"
            ></lottie-player>
          </div>
        )}

        {/* Content Section */}
        <div className="flex flex-col gap-5 w-full md:w-1/2 md:px-0">
          {description1 && (
            <p className="text-white max-w-[900px] text-sm sm:text-base leading-relaxed mb-0">
              {description1}
            </p>
          )}
          {description2 && (
            <p className="text-white max-w-[900px] text-sm sm:text-base leading-relaxed mb-0">
              {description2}
            </p>
          )}
        </div>
      </div>

      {/* Skills Section */}
      {skills.length > 0 && (
        <div className="py-10 sm:py-10 sm:px-0">
          <h2 className="text-tertiary text-base sm:text-xl font-semibold">
            Here are a few technologies I have been working with recently:
          </h2>

          <ul className="flex flex-wrap gap-4 sm:gap-6 mt-4 sm:mt-6">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="border border-tertiary px-4 sm:px-7 py-2 sm:py-3 rounded-md"
              >
                <span className="text-tertiary text-sm sm:text-base">
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default About;

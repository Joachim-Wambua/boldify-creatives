// import Button from "../components/Button";
import { useState } from "react";

// import { topProjects } from "../constants/data";

const TopProjects = () => {
  const [activeGroup, setActiveGroup] = useState("Branding & Signages");

  const portfolioData = {
    "Branding & Signages": [
      { title: "Signage Design", description: "Eye-catching outdoor signs." },
      { title: "Logo Creation", description: "Memorable brand identities." },
    ],
    "Graphic Design & Videography": [
      { title: "Motion Graphics", description: "Engaging animated visuals." },
      { title: "Poster Design", description: "Creative marketing materials." },
    ],
    Printing: [
      { title: "Business Cards", description: "Professional branding tools." },
      { title: "Flyers", description: "Promotional materials for events." },
    ],
    "Web Design & Development": [
      { title: "Responsive Websites", description: "Modern web design." },
      {
        title: "E-commerce Platforms",
        description: "Online stores made easy.",
      },
    ],
  };
  return (
    <>
      <section className="portfolio-section my-10">
        <div className="bg-gray-900 text-white py-12 px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Our Work</h2>
          <div className="flex justify-center space-x-4 mb-8">
            {Object.keys(portfolioData).map((group) => (
              <button
                key={group}
                onClick={() => setActiveGroup(group)}
                className={`before:ease relative h-12 w-fit px-3 overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-72 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-700 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180 ${
                  activeGroup === group
                    ? "bg-white text-black shadow-lg"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                <span className="relative z-10">{group}</span>
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData[activeGroup].map((project, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TopProjects;

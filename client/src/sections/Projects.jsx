const Projects = () => {
  return (
    <>
    <section id="portfolio" className="bg-[#e9e9e9] py-6" >
      <div className="text-center">
        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
          Top Projects{" "}
        </h2>
        <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-4">
          Explore Our Work
        </p>
      </div>
      <div className="projects-wrapper">
        <div className="project-container">
          <input type="radio" name="slide" id="p1" />
          <label htmlFor="p1" className="project-card">
            <div className="project-row">
              <div className="project-icon">1</div>
              <div className="project-description">
                <h4 className="text-white font-extrabold text-left">
                  Project 1
                </h4>
                <p className="text-white text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec urna eu massa lacinia tincidunt.
                </p>
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id="p2" />
          <label htmlFor="p2" className="project-card">
            <div className="project-row">
              <div className="project-icon">2</div>
              <div className="project-description">
                <h4 className="text-white font-extrabold text-left">
                  Project 2
                </h4>
                <p className="text-white text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec urna eu massa lacinia tincidunt.
                </p>
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id="p3" />
          <label htmlFor="p3" className="project-card">
            <div className="project-row">
              <div className="project-icon">3</div>
              <div className="project-description">
                <h4 className="text-white font-extrabold text-left">
                  Project 3
                </h4>
                <p className="text-white text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec urna eu massa lacinia tincidunt.
                </p>
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id="p4" />
          <label htmlFor="p4" className="project-card">
            <div className="project-row">
              <div className="project-icon">4</div>
              <div className="project-description">
                <h4 className="text-white font-extrabold text-left">
                  Project 4
                </h4>
                <p className="text-white text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec urna eu massa lacinia tincidunt.
                </p>
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id="p5" />
          <label htmlFor="p5" className="project-card">
            <div className="project-row">
              <div className="project-icon">5</div>
              <div className="project-description">
                <h4 className="text-white font-extrabold text-left">
                  Project 5
                </h4>
                <p className="text-white text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec urna eu massa lacinia tincidunt.
                </p>
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id="p6" />
          <label htmlFor="p6" className="project-card">
            <div className="project-row">
              <div className="project-icon">6</div>
              <div className="project-description">
                <h4 className="text-white font-extrabold text-left">
                  Project 6
                </h4>
                <p className="text-white text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec urna eu massa lacinia tincidunt.
                </p>
              </div>
            </div>
          </label>
        </div>
      </div>
      </section>
    </>
  );
};

export default Projects;

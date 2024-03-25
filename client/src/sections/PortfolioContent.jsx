import Button from "../components/Button";

import { topProjects } from "../constants/data";

const PortfolioContent = () => {
  return (
    <>
      <section className="portfolio-section my-10">
        <h2 className="portfolio-title text-xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
          Our Work{" "}
        </h2>
        <div className="box-cards-blog -grid">
          {topProjects.map((project) => (
            <div key={project.id} className="card">
              <div className="card-image">
                <a href="#">
                  <img src={`${project.img}`} className="h-80" alt="" />
                </a>
              </div>
              <div className="card-meta">
                <div className="card-top">
                  <a href="#" className="cat">
                    Project 1
                  </a>
                  <span className="date">3 days ago</span>
                </div>
                <h2 className="card-title">
                  <a href="#"> {project.title}</a>
                </h2>
                {/* <div className="card-desc">{project.description}</div> */}
                <div className="card-bottom">
                  <div className="user">
                    <div className="avatar">
                      <img
                        src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1707235976/9550722_221_f9dquv.jpg"
                        alt=""
                      />
                    </div>
                    <span className="username">Client Name & Logo</span>
                  </div>
                  <Button content="View More" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PortfolioContent;

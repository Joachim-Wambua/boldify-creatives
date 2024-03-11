import { useState } from "react";
import { topProjects } from "../constants/data";
import Button from "../components/Button";

const TopProjects = () => {
  return (
    <>
      <section className="my-20 py-10 bg-gray-900">
        <h2 className="text-4xl font-extrabold mb-20 text-white">
          Top Projects
        </h2>
        <div className="card-container">
          {topProjects.map((project) => (
            <div key={project.id} className="project-card card-1">
              <div
                className="card-img"
                style={{
                  backgroundImage: `linear-gradient(
                    to bottom,
                    rgba(0, 0, 0, 0),
                    rgba(0, 0, 0, 0)
                  ), url(${project.img})`,
                }}
              ></div>
              <a href="" className="card-link">
                <div
                  className="card-img-hovered"
                  style={{
                    backgroundImage: `linear-gradient(
                      to bottom,
                      rgba(0, 0, 0, 0),
                      rgba(0, 0, 0, 0)
                    ),url(${project.img})`,
                  }}
                ></div>
              </a>
              <div className="card-info">
                <div className="card-about">
                  <a className="card-tag tag-news">{project.tag}</a>
                  {/* <div className="card-time">6/11/2018</div> */}
                </div>
                <h1 className="card-title">{project.title}</h1>
                <div className="card-creator">{/* <Button /> */}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TopProjects;

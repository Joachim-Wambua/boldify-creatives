import { useState } from "react";
import { topProjects } from "../constants/data";

const TopProjects = () => {
  return (
    <>
      <section className="my-20">
        <h2 className="text-4xl font-extrabold mb-20">Top Projects</h2>
        {topProjects.map((project) => (
          <div className="container" key={project.id}>
            <div className="card">
              <h2>{project.title}</h2>
              <i className="fas fa-arrow-right"></i>
              <p>01</p>
              <div
                className="pic"
                style={{ backgroundImage: `url(${project.img})` }}
              ></div>
              <div className="social">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-github"></i>
              </div>
              <button></button>
            </div>
          </div>
        ))}
        <a
          href="https://dribbble.com/YancyMin"
          rel="noreferrer"
          className="dr-url"
          target="_blank"
        >
          <img
            className="dr"
            src="https://cdn.dribbble.com/assets/logo-footer-hd-a05db77841b4b27c0bf23ec1378e97c988190dfe7d26e32e1faea7269f9e001b.png"
            alt=""
          />
        </a>
      </section>
    </>
  );
};

export default TopProjects;

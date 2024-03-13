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
        <div className="modal">
          <div className="nav default-color">
            <div className="next nav-icon">
              <svg
                fill="#ececec"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                <path d="M0-.25h24v24H0z" fill="none" />
              </svg>
            </div>
            <div className="prev nav-icon">
              <svg
                fill="#ececec"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
                <path d="M0-.5h24v24H0z" fill="none" />
              </svg>
            </div>
          </div>
          <div className="modal__body">
            <div className="circ">
              <div className="circ3 default-color"></div>
              <div className="circ2"></div>
              <div className="circ1 default-color"></div>
            </div>
            <div className="content">
              <div className="tt">
                <h1 className="content__title"></h1>
                <p className="content__desc"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopProjects;

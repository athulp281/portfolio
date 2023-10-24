import React, { useContext, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import MyContext from "../useContext/Context";
import SmokeTitle from "./SmokeTitle";
import "../assets/Css/ProjectCard.css";
import adminPanelimg from "../assets/ProjectCardImages/intrvl-admn-pnl.png";
import mypersonalportfolio from "../assets/ProjectCardImages/my-personal-portfolio.png";
import dynamicform from "../assets/ProjectCardImages/dynamic-form.png";
import ImageSlider from "./ImageSlider";

export default function ProjectBox() {
  const { data, setData } = useContext(MyContext);
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal(".element-to-animate", {
      duration: 1000, // Animation duration in milliseconds
      origin: "top", // Animation starting point (top, bottom, left, right, etc.)
      distance: "20px", // Distance the element moves during the animation
      delay: 200, // Delay before the animation starts (in milliseconds)
    });
  }, []);
  return (
    <>
      <div className="element-to-animate">
        <div style={{ backgroundColor: data }}>
          <main className="wrapper">
            {/* <!-- -------------- PROJECT BOX ---------------- --> */}
            <div className="top-header">
              <h2 style={{ color: data === "black" ? "white" : "#444444" }}>
                P R O J E C T S
              </h2>
            </div>

            <section className="section" id="projects">
              <div className="project-container">
                <div className="pro-box">
                  <img className="card-img" src={adminPanelimg} alt="project" />
                  <div className="card-body">
                    <h1 className="card-title">Admin Panel</h1>
                    <p className="card-sub-title">React</p>
                    <p className="card-info">
                      This project is focused on building a user-friendly and
                      feature-rich admin panel using the React JavaScript
                      library. To efficiently manage application state, it
                      leverages the Redux state management system. The user
                      interface of the admin panel is designed with the
                      Material-UI framework, ensuring a clean, modern, and
                      responsive design.
                    </p>
                    <button className="card-btn">
                      <a href="https://github.com/athulp281" target="_blank">
                        GitHub
                      </a>
                    </button>
                  </div>
                </div>

                <div className="pro-box">
                  <img
                    className="card-img"
                    src={mypersonalportfolio}
                    alt="project"
                  />
                  <div className="card-body">
                    <h1 className="card-title">Personal Portfolio</h1>
                    <p className="card-sub-title">React + Vite</p>
                    <p className="card-info">
                      This project leverages the power of React, Vite for quick
                      development, and state management through useContext for a
                      seamless user experience. With the combination of HTML5
                      and CSS, you can showcase your skills, projects, and
                      achievements in a modern and responsive design that leaves
                      a lasting impression on visitors.
                    </p>
                    <button className="card-btn">
                      <a href="https://github.com/athulp281" target="_blank">
                        GitHub
                      </a>
                    </button>
                  </div>
                </div>

                <div className="pro-box">
                  <img className="card-img" src={dynamicform} alt="project" />
                  <div className="card-body">
                    <h1 className="card-title">Dynamic Form</h1>
                    <p className="card-sub-title">React & Formik</p>
                    <p className="card-info">
                      This project is designed for seamless user registration
                      and validation, making use of Formik for easy form
                      handling. With a user-friendly and responsive design, this
                      signup form offers an intuitive experience for users as
                      they input their information. By combining React's
                      interactivity, HTML's structure, CSS's styling, and
                      Formik's form management.
                    </p>
                    <button className="card-btn">
                      <a href="https://github.com/athulp281" target="_blank">
                        GitHub
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

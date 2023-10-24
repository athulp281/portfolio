import React, { useContext, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import MyContext from "../useContext/Context";
import SmokeTitle from "./SmokeTitle";

export default function AboutBox() {
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
    <div className="element-to-animate">
      <div style={{ backgroundColor: data }}>
        <main className="wrapper">
          {/* <!-- -------------- ABOUT BOX ---------------- --> */}
          <section className="section" id="about">
            <div className="top-header">
              {/* ---------------------------------- */}
              <h2 style={{ color: data === "black" ? "white" : "#444444" }}>
                A B O U T <span /> M E
              </h2>

              {/* <h1>About Me</h1> */}
            </div>
            <div className="row">
              <div className="col">
                <div className="about-info">
                  <h3>My introduction</h3>
                  <p>
                    I am well-versed in HTML, CSS and JavaScript , and other
                    cutting edge frameworks and libraries,which allows me to
                    implement interactive features. Additionally, I have
                    experirence working with content management systems (CMS)
                    like WordPress.
                  </p>
                  <div className="about-btn">
                    <button className="btn">
                      Download CV <i className="uil uil-import"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="skills-box">
                  <div className="skills-header">
                    <h3>Frontend</h3>
                  </div>
                  <div className="skills-list">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Material UI</span>
                    <span>JavaScript</span>
                    <span>Redux</span>
                    <span>React</span>
                    <span>Angular</span>
                  </div>
                </div>
                <div className="skills-box">
                  <div className="skills-header">
                    <h3>Backend</h3>
                  </div>
                  <div className="skills-list">
                    <span>PHP</span>
                    <span>Python</span>
                    <span>Nodejs</span>
                  </div>
                </div>
                <div className="skills-box">
                  <div className="skills-header">
                    <h3>Database</h3>
                  </div>
                  <div className="skills-list">
                    <span>MySQL</span>
                    <span>MongoDB</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

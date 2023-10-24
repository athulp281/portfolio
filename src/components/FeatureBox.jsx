import React, { useEffect } from "react";
import Myimg from "../assets/MyPhoto/imgNew.png";
import ScrollReveal from "scrollreveal";
import Typed from "react-typed";
import "../components/style.css";
import "../assets/Css/ExtreamGlitch.css";

const TypedText = () => {
  return (
    <Typed
      strings={[" Developer", "Developer", "Developer"]}
      typeSpeed={40}
      backSpeed={50}
      loop
    />
  );
};

export default function FeatureBox() {
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
    <div className="extreme-glitch-container">
      <div className="background-image background-image-1"></div>
      <div className="background-image background-image-2"></div>
      <div className="background-image background-image-3"></div>
      <div className="element-to-animate">
        {/* <!-- -------------- MAIN ---------------- --> */}
        <main className="wrapper">
          {/* <!-- -------------- FEATURED BOX ---------------- --> */}
          <section className="featured-box" id="home">
            <div className="featured-text">
              <div className="featured-text-card">
                <span>Athul P</span>
              </div>
              <div className="featured-name">
                <p>
                  I'm
                  <span
                    style={{
                      marginLeft: 2,
                      color: "#1e9fab",
                    }}
                  >
                    <TypedText />
                  </span>
                </p>
              </div>
              <div className="featured-text-info">
                <p>
                  Experienced frontend developer with a passion for creating
                  visually stunning and user-friendly websites.
                </p>
              </div>
              <div className="featured-text-btn">
                <button className="btn blue-btn">Hire Me</button>
                <button className="btn" style={{ color: "black" }}>
                  Download CV <i className="uil uil-file-alt"></i>
                </button>
              </div>
              <div className="social_icons">
                <div className="icon">
                  <a
                    href="https://instagram.com/athul__sundar?igshid=MzRlODBiNWFlZA=="
                    target="_blank"
                  >
                    <i className="uil uil-instagram"></i>
                  </a>
                </div>
                <div className="icon">
                  <a
                    href="https://linkedin.com/in/athul-p-583868194"
                    target="_blank"
                  >
                    <i className="uil uil-linkedin-alt"></i>
                  </a>
                </div>
                <div className="icon">
                  <a href="https://twitter.com/Athul__P" target="_blank">
                    <i className="uil uil-twitter"></i>
                  </a>
                </div>
                <div className="icon">
                  <a href="https://github.com/athulp281" target="_blank">
                    <i className="uil uil-github-alt"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="featured-image">
              <div className="image">
                <img src={Myimg} alt="avatar" />
                <div
                  style={{
                    paddingLeft: "130px",
                  }}
                >
                  <h4
                    style={{
                      color: "white",
                      fontStyle: "Fantasy",
                      fontFamily: "serif",
                      opacity: 0.6,
                    }}
                  >
                    Hello there......!
                  </h4>
                </div>
              </div>
            </div>
            <div className="scroll-icon-box">
              <a href="#about" className="scroll-btn">
                <i className="uil uil-mouse-alt"></i>
                <p>Scroll Down</p>
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

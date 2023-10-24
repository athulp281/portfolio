import React, { useContext, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import MyContext from "../useContext/Context";
import "../assets/Css/MyGallery.css";
import instaimg from "../assets/img/insta-img.png";

export default function MyGallery() {
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

  const inlineStyle1 = {
    "--i": 1,
  };
  const inlineStyle2 = {
    "--i": 2,
  };
  const inlineStyle3 = {
    "--i": 3,
  };
  const inlineStyle4 = {
    "--i": 4,
  };
  const inlineStyle5 = {
    "--i": 5,
  };
  const inlineStyle6 = {
    "--i": 6,
  };
  const inlineStyle7 = {
    "--i": 7,
  };
  const inlineStyle8 = {
    "--i": 8,
  };
  return (
    <div className="element-to-animate">
      <div style={{ backgroundColor: data }}>
        <main className="wrapper">
          {/* <!-- -------------- ABOUT BOX ---------------- --> */}
          <section className="section" id="about">
            <div className="top-header">
              {/* ---------------------------------- */}
              <h2 style={{ color: data === "black" ? "white" : "#444444" }}>
                G A L L E R Y
              </h2>
              <div className="about-insta">
                <div className="insta-img">
                  <img src={instaimg} alt="insta" />
                </div>
                <div className="insta-title">
                  <h3>@perfect_click_011</h3>
                </div>
              </div>
            </div>

            <div className="main-container">
              <div className="image-container">
                <span style={inlineStyle1}>
                  <img src="/src/assets/img/1.webp" alt="not found" />
                </span>
                <span style={inlineStyle2}>
                  <img src="/src/assets/img/2.webp" alt="not found" />
                </span>
                <span style={inlineStyle3}>
                  <img src="/src/assets/img/3.webp" alt="not found" />
                </span>
                <span style={inlineStyle4}>
                  <img src="/src/assets/img/4.webp" alt="not found" />
                </span>
                <span style={inlineStyle5}>
                  <img src="/src/assets/img/5.webp" alt="not found" />
                </span>
                <span style={inlineStyle6}>
                  <img src="/src/assets/img/6.webp" alt="not found" />
                </span>
                <span style={inlineStyle7}>
                  <img src="/src/assets/img/7.webp" alt="not found" />
                </span>
                <span style={inlineStyle8}>
                  <img src="/src/assets/img/1.webp" alt="not found" />
                </span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

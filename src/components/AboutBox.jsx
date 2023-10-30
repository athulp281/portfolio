import React, { useContext, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import MyContext from "../useContext/Context";
import useResponsive from "../Hooks/useResponsive";

export default function AboutBox() {
    const { data, setData } = useContext(MyContext);
    const smUp = useResponsive("up", "sm");
    useEffect(() => {
        ScrollReveal().reveal(".element-to-animate", {
            duration: 1000,
            origin: "top",
            distance: "20px",
            delay: 200,
        });
    }, []);
    return (
        <div className="element-to-animate">
            <div style={{ backgroundColor: data }}>
                <main className={smUp ? "wrapper" : "wrapper-mobile"}>
                    {/* <!-- -------------- ABOUT BOX ---------------- --> */}
                    <section
                        className={smUp ? "section" : "section-mobile"}
                        id="about"
                    >
                        <div className="top-header">
                            {/* ---------------------------------- */}
                            <h2
                                style={{
                                    color:
                                        data === "black" ? "white" : "#444444",
                                }}
                            >
                                A B O U T <span /> M E
                            </h2>

                            {/* <h1>About Me</h1> */}
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="about-info">
                                    <h3>My introduction</h3>
                                    <p>
                                        I am well-versed in HTML, CSS and
                                        JavaScript , and other cutting edge
                                        frameworks and libraries,which allows me
                                        to implement interactive features.
                                        Additionally, I have experirence working
                                        with content management systems (CMS)
                                        like WordPress.
                                    </p>
                                    <div className="about-btn">
                                        <button className="btn">
                                            Download CV{" "}
                                            <i className="uil uil-import"></i>
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

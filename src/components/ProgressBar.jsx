import React from "react";
import "../assets/Css/progress-bar.css";
import { useContext } from "react";
import MyContext from "../useContext/Context";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

export default function ProgressBar() {
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
            <div
                className={
                    data == "black"
                        ? "main-status-bar-dark-mode"
                        : "main-status-bar"
                }
            >
                <div
                    className="skill-bars"
                    style={{ background: data == "black" ? "black" : "" }}
                >
                    <div>
                        <div className="bar">
                            <div
                                className={
                                    data == "black" ? "info" : "info-dark"
                                }
                            >
                                <span className="label">HTML</span>
                            </div>
                            <div className="progress-line html">
                                <span></span>
                            </div>
                        </div>

                        <div className="bar">
                            <div
                                className={
                                    data == "black" ? "info" : "info-dark"
                                }
                            >
                                <span className="label">CSS</span>
                            </div>
                            <div className="progress-line css">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar">
                            <div
                                className={
                                    data == "black" ? "info" : "info-dark"
                                }
                            >
                                <span className="label">JavaScript</span>
                            </div>
                            <div className="progress-line jquery">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar">
                            <div
                                className={
                                    data == "black" ? "info" : "info-dark"
                                }
                            >
                                <span className="label">React</span>
                            </div>
                            <div className="progress-line python">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar">
                            <div
                                className={
                                    data == "black" ? "info" : "info-dark"
                                }
                            >
                                <span className="label">MySQL</span>
                            </div>
                            <div className="progress-line mysql">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar">
                            <div
                                className={
                                    data == "black" ? "info" : "info-dark"
                                }
                            >
                                <span className="label">NodeJs</span>
                            </div>
                            <div className="progress-line nodejs">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React, { useContext, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import MyContext from "../useContext/Context";
import "../assets/Css/MyGallery.css";
import instaimg from "../assets/img/insta-img.png";
import useResponsive from "../Hooks/useResponsive";
import img1 from "../assets/img/1.jpg";
import img2 from "../assets/img/2.jpg";
import img3 from "../assets/img/3.jpg";
import img4 from "../assets/img/4.jpg";
import img5 from "../assets/img/5.jpg";
import img6 from "../assets/img/6.jpg";
import img7 from "../assets/img/7.jpg";
import img8 from "../assets/img/8.jpg";
import ImgSlider from "./ImgSlider";

export default function MyGallery() {
    const smUp = useResponsive("up", "sm");

    const mdUp = useResponsive("up", "md");
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
                        {smUp ? (
                            <div className="main-container">
                                <div className="image-container">
                                    <span style={inlineStyle1}>
                                        <img src={img1} alt="not found" />
                                    </span>
                                    <span style={inlineStyle2}>
                                        <img src={img2} alt="not found" />
                                    </span>
                                    <span style={inlineStyle3}>
                                        <img src={img3} alt="not found" />
                                    </span>
                                    <span style={inlineStyle4}>
                                        <img src={img4} alt="not found" />
                                    </span>
                                    <span style={inlineStyle5}>
                                        <img src={img5} alt="not found" />
                                    </span>
                                    <span style={inlineStyle6}>
                                        <img src={img6} alt="not found" />
                                    </span>
                                    <span style={inlineStyle7}>
                                        <img src={img7} alt="not found" />
                                    </span>
                                    <span style={inlineStyle8}>
                                        <img src={img8} alt="not found" />
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <ImgSlider />
                        )}
                    </section>
                </main>
            </div>
        </div>
    );
}

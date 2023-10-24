import React, { useContext, useEffect } from "react";
import MyContext from "../useContext/Context";
import ScrollReveal from "scrollreveal";

export default function Footer() {
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
                    <footer style={{ backgroundColor: data }}>
                        <div className="top-footer">
                            <p>Athul P .</p>
                        </div>
                        <div className="middle-footer">
                            <ul className="footer-menu">
                                <li className="footer_menu_list">
                                    <a href="#home">Home</a>
                                </li>
                                <li className="footer_menu_list">
                                    <a href="#about">About</a>
                                </li>
                                <li className="footer_menu_list">
                                    <a href="#projects">Projects</a>
                                </li>
                                <li className="footer_menu_list">
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-social-icons">
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
                                <a
                                    href="https://twitter.com/Athul__P"
                                    target="_blank"
                                >
                                    <i className="uil uil-twitter"></i>
                                </a>
                            </div>
                            <div className="icon">
                                <a
                                    href="https://github.com/athulp281"
                                    target="_blank"
                                >
                                    <i className="uil uil-github-alt"></i>
                                </a>
                            </div>
                        </div>
                    </footer>
                </main>
            </div>
        </div>
    );
}

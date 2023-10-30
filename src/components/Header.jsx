import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import MyContext from "../useContext/Context";
import { Icon } from "@iconify/react";
import { Box } from "@mui/material";
import useResponsive from "../Hooks/useResponsive";

export default function Header() {
    const smUp = useResponsive("up", "sm");

    const { data, setData } = useContext(MyContext);
    const [activeStatus, setActiveStatus] = useState("");
    useEffect(() => {
        setActiveStatus("Home");
        setData("black");
    }, []);

    const handleClick = () => {
        if (data === "black") {
            setData("rgb(250, 250, 250)");
        } else {
            setData("black");
        }
    };

    const myMenuFunction = (e) => {
        let menuBtn = document.getElementById("myNavMenu");

        if (menuBtn.className === "nav-menu") {
            menuBtn.className += " responsive";
        } else {
            menuBtn.className = "nav-menu";
        }
    };

    window.onscroll = function () {
        headerShadow();
    };

    function headerShadow() {
        const navHeader = document.getElementById("header");

        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
        ) {
            navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
            navHeader.style.height = "70px";
            navHeader.style.lineHeight = "70px";
        } else {
            navHeader.style.boxShadow = "none";
            navHeader.style.height = "90px";
            navHeader.style.lineHeight = "90px";
        }
    }

    return (
        <div>
            <Box>
                {/* <!-- --------------- HEADER --------------- --> */}
                <nav id="header" style={{ background: data }}>
                    <div className="nav-logo">
                        <p className="nav-name">Athul</p>
                        <span>.</span>
                    </div>
                    <div className="nav-menu" id="myNavMenu">
                        <ul className="nav_menu_list">
                            <li className="nav_list">
                                <a
                                    href="#home"
                                    className={
                                        activeStatus === "Home"
                                            ? "nav-link active-link "
                                            : data === "black"
                                            ? "nav-link-dark-mood"
                                            : "nav-link"
                                    }
                                    onClick={() => {
                                        setActiveStatus("Home");
                                        myMenuFunction();
                                    }}
                                >
                                    Home
                                </a>
                                <div className="circle"></div>
                            </li>
                            <li className="nav_list">
                                <a
                                    href="#about"
                                    className={
                                        activeStatus === "About"
                                            ? "nav-link active-link "
                                            : data === "black"
                                            ? "nav-link-dark-mood"
                                            : "nav-link"
                                    }
                                    onClick={() => {
                                        setActiveStatus("About");
                                        myMenuFunction();
                                    }}
                                >
                                    About
                                </a>
                                <div className="circle"></div>
                            </li>
                            <li className="nav_list">
                                <a
                                    href="#projects"
                                    className={
                                        activeStatus === "Projects"
                                            ? "nav-link active-link "
                                            : data === "black"
                                            ? "nav-link-dark-mood"
                                            : "nav-link"
                                    }
                                    onClick={() => {
                                        setActiveStatus("Projects");
                                        myMenuFunction();
                                    }}
                                >
                                    Projects
                                </a>
                                <div className="circle"></div>
                            </li>
                            <li className="nav_list">
                                <a
                                    href="#contact"
                                    className={
                                        activeStatus === "Contact"
                                            ? "nav-link active-link "
                                            : data === "black"
                                            ? "nav-link-dark-mood"
                                            : "nav-link"
                                    }
                                    onClick={() => {
                                        setActiveStatus("Contact");
                                        myMenuFunction();
                                    }}
                                >
                                    Contact
                                </a>
                                <div className="circle"></div>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-button">
                        <button
                            className="btn"
                            style={{
                                color: data === "black" ? "black" : "black",
                            }}
                        >
                            Download CV <i className="uil uil-file-alt"></i>
                        </button>
                    </div>
                    <div className="nav-menu-btn">
                        <div
                            style={{
                                padding: "10px",
                            }}
                        >
                            {data === "black" ? (
                                <button
                                    onClick={handleClick}
                                    className="nav-btn"
                                    style={{ background: "black" }}
                                >
                                    <Icon
                                        icon="material-symbols:brightness-3"
                                        color="white"
                                    />
                                </button>
                            ) : (
                                <button
                                    onClick={handleClick}
                                    className="nav-btn"
                                >
                                    <Icon
                                        icon="streamline:interface-lighting-brightness-1-bright-adjust-brightness-adjustment-sun-raise-controls"
                                        color="black"
                                    />
                                </button>
                            )}
                        </div>
                        <i
                            style={{
                                color: data === "black" ? "white" : "black",
                            }}
                            className="uil uil-bars"
                            onClick={myMenuFunction}
                        ></i>
                    </div>
                    <div className="nav-button">
                        {data === "black" ? (
                            <button onClick={handleClick} className="btn">
                                <Icon
                                    icon="material-symbols:brightness-3"
                                    width="22"
                                    height="22"
                                    // color="black"
                                />
                            </button>
                        ) : (
                            <button onClick={handleClick} className="btn">
                                <Icon
                                    icon="streamline:interface-lighting-brightness-1-bright-adjust-brightness-adjustment-sun-raise-controls"
                                    width="22"
                                    height="22"
                                    color="black"
                                />
                            </button>
                        )}
                    </div>
                </nav>
            </Box>
            {/* <!-- -------------- MAIN ---------------- --> */}
        </div>
    );
}

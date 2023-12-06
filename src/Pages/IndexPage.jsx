import React, { useState } from "react";
import Header from "../components/Header";
import FeatureBox from "./FeatureBox";
import AboutBox from "./AboutBox";
import ProjectBox from "../components/ProjectBox";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import MyGallery from "../components/MyGallery";
import ProgressBar from "../components/ProgressBar";
import useResponsive from "../Hooks/useResponsive";
import PopUp from "../components/PopUp/PopUp";

export default function IndexPage() {
    const smUp = useResponsive("up", "sm");

    const mdUp = useResponsive("up", "md");
    const [status, setStatus] = useState(false);
    return (
        <div>
            <Header />
            <FeatureBox setStatus={setStatus} />
            <AboutBox />
            <ProgressBar />
            <ProjectBox />
            <MyGallery />
            <Contact />
            <Footer />
            <PopUp
                status={status}
                setStatus={setStatus}
                title={"Contact Me"}
                content={
                    <>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <div
                                style={{
                                    paddingBottom: "5px",
                                }}
                            >
                                <input
                                    marginLeft="20px"
                                    type="text"
                                    placeholder="Enter your Name"
                                    style={{
                                        width: smUp ? "400px" : "300px",
                                        height: "40px",
                                        borderRadius: "10px",
                                        borderStyle: "dashed",
                                        paddingLeft: "10px",
                                        backgroundColor: "white",
                                        color: "black",
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    paddingBottom: "5px",
                                }}
                            >
                                <input
                                    type="email"
                                    placeholder="Enter your Email"
                                    style={{
                                        width: smUp ? "400px" : "300px",
                                        height: "40px",
                                        borderRadius: "10px",
                                        borderStyle: "dashed",
                                        paddingLeft: "10px",
                                        backgroundColor: "white",
                                        color: "black",
                                    }}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Enter your Messege"
                                    style={{
                                        width: smUp ? "400px" : "300px",
                                        height: "90px",
                                        borderRadius: "10px",
                                        borderStyle: "dashed",
                                        paddingLeft: "10px",
                                        backgroundColor: "white",
                                        color: "black",
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    paddingTop: "6px",
                                }}
                            >
                                <button
                                    style={{
                                        backgroundColor: "rgb(110, 87, 224)",
                                    }}
                                    className="btn blue-btn"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </>
                }
            />
        </div>
    );
}

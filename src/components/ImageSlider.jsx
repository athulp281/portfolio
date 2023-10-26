import React, { useState } from "react";
import "../assets/Css/image-slider.css";

export default function ImageSlider() {
    const [activeOption, setActiveOption] = useState(null);

    const handleOptionClick = (index) => {
        setActiveOption(index);
        return (
            <>
                <div className="main-body">
                    <div className="options">
                        <div
                            onClick={() => handleOptionClick(1)}
                            className={`option ${
                                activeOption === 1 ? "active" : ""
                            }`}
                            style={{
                                "--optionBackground": ` url(https://raw.githubusercontent.com/Programith/Images/main/background_01.jpg)`,
                            }}
                        >
                            <div className="label">
                                <div className="icon">
                                    <i className="fas fa-walking"></i>
                                </div>
                                <div className="info">
                                    <div className="main">Ultricies</div>
                                    <div className="sub">
                                        Elit ut aliquam purus sit
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => handleOptionClick(2)}
                            className={`option ${
                                activeOption === 2 ? "active" : ""
                            }`}
                            style={{
                                "--optionBackground": ` url(https://raw.githubusercontent.com/Programith/Images/main/background_02.jpg)`,
                            }}
                        >
                            <div className="label">
                                <div className="icon">
                                    <i className="fas fa-snowflake"></i>
                                </div>
                                <div className="info">
                                    <div className="main">Luctus</div>
                                    <div className="sub">
                                        Arcu cursus vitae congue mauris
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => handleOptionClick(3)}
                            className={`option ${
                                activeOption === 3 ? "active" : ""
                            }`}
                            style={{
                                "--optionBackground": ` url(https://raw.githubusercontent.com/Programith/Images/main/background_03.jpg)`,
                            }}
                        >
                            <div className="label">
                                <div className="icon">
                                    <i className="fas fa-tree"></i>
                                </div>
                                <div className="info">
                                    <div className="main">Purus</div>
                                    <div className="sub">
                                        Neque vitae tempus quam pellentesque
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => handleOptionClick(4)}
                            className={`option ${
                                activeOption === 4 ? "active" : ""
                            }`}
                            style={{
                                "--optionBackground": `url(https://raw.githubusercontent.com/Programith/Images/main/background_04.jpg)`,
                            }}
                        >
                            <div className="label">
                                <div className="icon">
                                    <i className="fas fa-tint"></i>
                                </div>
                                <div className="info">
                                    <div className="main">Accumsan</div>
                                    <div className="sub">
                                        Aagittis id consectetur purus ut
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => handleOptionClick(5)}
                            className={`option ${
                                activeOption === 5 ? "active" : ""
                            }`}
                            style={{
                                "--optionBackground": `url(https://raw.githubusercontent.com/Programith/Images/main/background_05.jpg)`,
                            }}
                        >
                            <div className="label">
                                <div className="icon">
                                    <i className="fas fa-sun"></i>
                                </div>
                                <div className="info">
                                    <div className="main">Dignissim</div>
                                    <div className="sub">
                                        Augue ut lectus arcu bibendum
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };
}

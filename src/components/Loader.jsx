import React, { useEffect, useState } from "react";
import "../assets/Css/loader.css";
import { CSSTransition } from "react-transition-group";

export default function Loader() {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (percentage < 100) {
                setPercentage((prevPercentage) => prevPercentage + 1);
            }
        }, 10);

        return () => {
            clearInterval(interval);
        };
    }, [percentage]);
    return (
        <CSSTransition
            in={true} // Set to true initially
            timeout={1000} // Match the animation duration
            classNameNames="loader" // Use the animation className names
            unmountOnExit
        >
            <div className="loader">
                {/* <div classNameName="percentage-loader">
                    <div classNameName="percentage-text">{percentage}%</div>
                    <div classNameName="progress-bar">
                        <div
                            classNameName="progress"
                            style={{ width: `${percentage}%` }}
                        ></div>
                    </div>
                </div> */}

                <div className="loader-color"></div>
                <div className="loader-border"></div>
                <div className="loader-circle"></div>
            </div>
        </CSSTransition>
    );
}

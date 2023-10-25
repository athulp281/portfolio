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
            classNames="loader" // Use the animation class names
            unmountOnExit
        >
            <div className="loader">
                <div className="percentage-loader">
                    <div className="percentage-text">{percentage}%</div>
                    <div className="progress-bar">
                        <div
                            className="progress"
                            style={{ width: `${percentage}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
}

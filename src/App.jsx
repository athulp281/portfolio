import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Header from "./components/Header";
import FeatureBox from "./Pages/FeatureBox";
import AboutBox from "./Pages/AboutBox";
import ProjectBox from "./components/ProjectBox";
import MyContextProvider from "./useContext/MyContextProvider";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
// import { MyContextProvider } from "./useContext/MyContextProvider";

function App() {
    const [showLoader, setShowLoader] = useState(true);
    useEffect(() => {
        // Hide the loader after 1 second
        const loaderTimeout = setTimeout(() => {
            setShowLoader(false);
        }, 1500);

        return () => {
            clearTimeout(loaderTimeout); // Clear the timeout to prevent memory leaks
        };
    }, []);
    return (
        <>
            {showLoader && <Loader />}
            {!showLoader && (
                <MyContextProvider>
                    <Router>
                        <div>
                            <Routes>
                                <Route
                                    exact
                                    path="/"
                                    element={<Home />}
                                ></Route>
                                <Route
                                    exact
                                    path="/contact"
                                    element={<Contact />}
                                ></Route>
                                <Route
                                    exact
                                    path="/head"
                                    element={<Header />}
                                ></Route>
                                <Route
                                    exact
                                    path="/featurebox"
                                    element={<FeatureBox />}
                                ></Route>
                                <Route
                                    exact
                                    path="/aboutbox"
                                    element={<AboutBox />}
                                ></Route>
                                <Route
                                    exact
                                    path="/projectbox"
                                    element={<ProjectBox />}
                                ></Route>
                            </Routes>
                        </div>
                    </Router>
                </MyContextProvider>
            )}
        </>
    );
}

export default App;

import React from "react";
import Header from "./Header";
import FeatureBox from "./FeatureBox";
import AboutBox from "./AboutBox";
import ProjectBox from "./ProjectBox";
import Contact from "./Contact";
import Footer from "./Footer";
import MyGallery from "./MyGallery";
import ImageSlider from "./ImageSlider";

export default function IndexPage() {
    return (
        <div>
            <Header />
            <FeatureBox />
            <AboutBox />
            <ProjectBox />
            <MyGallery />
            <ImageSlider />
            <Contact />
            <Footer />
        </div>
    );
}

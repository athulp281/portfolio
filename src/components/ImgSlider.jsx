import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import img1 from "../assets/img/1.jpg";
import img2 from "../assets/img/2.jpg";
import img3 from "../assets/img/3.jpg";
import img4 from "../assets/img/4.jpg";
import img5 from "../assets/img/5.jpg";
import img6 from "../assets/img/6.jpg";
import img7 from "../assets/img/7.jpg";
import img8 from "../assets/img/8.jpg";

export default function ImgSlider() {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    const myArry = [
        {
            id: 1,
            img: img1,
        },
        {
            id: 2,
            img: img2,
        },
        {
            id: 3,
            img: img3,
        },
        {
            id: 4,
            img: img4,
        },
        {
            id: 5,
            img: img5,
        },
        {
            id: 6,
            img: img6,
        },
        {
            id: 7,
            img: img7,
        },
        {
            id: 8,
            img: img8,
        },
    ];
    return (
        <AutoplaySlider play={true} cancelOnInteraction={false} interval={1000}>
            {myArry.map((item) => {
                return (
                    <div
                        key={item.id}
                        style={{ borderRadius: "10px" }}
                        data-src={item.img}
                    />
                );
            })}
        </AutoplaySlider>
    );
}

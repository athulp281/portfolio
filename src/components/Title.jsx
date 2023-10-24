import React, { useContext } from "react";
import "../assets/Css/Smoke.css";
import MyContext from "../useContext/Context";

export default function Title({ title, textStyle }) {
    const uppercaseString = title.toUpperCase();

    const originalString = uppercaseString;
    const charArray = originalString.split("");

    const mappedArray = charArray.map((char, index) => {
        return {
            character: char,
            position: index,
        };
    });

    const { data, setData } = useContext(MyContext);
    return (
        <div>
            <div>
                <section className="smokesection" style={{ background: data }}>
                    <h1 className="smoketext">
                        {mappedArray.map((item) => {
                            return (
                                <span key={item.position}>
                                    {item.character}
                                </span>
                            );
                        })}
                    </h1>
                </section>
            </div>
        </div>
    );
}

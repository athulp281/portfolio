import React, { useState } from "react";
import MyContext from "./Context";

const MyContextProvider = ({ children }) => {
    const [data, setData] = useState("");

    return (
        <MyContext.Provider value={{ data, setData }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyContextProvider;

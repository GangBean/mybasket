import React from "react";
import Sections from "./Sections";

const MainPage = ({ isLoggedIn }) => {
    return (
        <div className="mainPage">
            <Sections isLoggedIn={isLoggedIn}></Sections>
        </div>
    );
};

export default MainPage;

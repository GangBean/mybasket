import React from "react";
import BasketSection from "./BasketSection";
import RecommendationSection from "./RecommendationSection";

const Sections = ({ isLoggedIn }) => {
    return (
        <div className="sections">
            <BasketSection isLoggedIn={isLoggedIn} />
            <RecommendationSection isLoggedIn={isLoggedIn}/>
        </div>
    );
};

export default Sections;

import React, { useState } from "react";
import BasketSection from "./BasketSection";
import RecommendationSection from "./RecommendationSection";

const Sections = ({ isLoggedIn }) => {
    const [myBaskets, setMyBaskets] = useState([]);

    return (
        <div className="sections">
            <BasketSection isLoggedIn={isLoggedIn} myBaskets={myBaskets} />
            <RecommendationSection isLoggedIn={isLoggedIn} />
        </div>
    );
};

export default Sections;

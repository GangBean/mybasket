import React from "react";
import MemberHistory from "./MemberHistory";
import YesterdayRanking from "./YesterdayRanking";
import AllTimeRanking from "./AllTimeRanking";
import RandomRecommendation from "./RandomRecommendation";

const Sections = ({ isLoggedIn }) => {
    return (
        <div className="sections">
            {isLoggedIn ? <MemberHistory></MemberHistory> : null}
            <YesterdayRanking></YesterdayRanking>
            <AllTimeRanking></AllTimeRanking>
            <RandomRecommendation></RandomRecommendation>
        </div>
    );
};

export default Sections;

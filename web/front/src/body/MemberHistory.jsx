import React from "react";
import MemberHistoryTitle from "./MemberHistoryTitle";
import MyRecipesBox from "./MyRecipesBox";
import "./MemberHistory.css";

const MemberHistory = ({ isLoggedIn, getNext }) => {
    return (
        <div className="memberHistory">
            <MemberHistoryTitle></MemberHistoryTitle>
            <MyRecipesBox isLoggedIn={isLoggedIn} getNext={getNext}></MyRecipesBox>
        </div>
    );
};

export default MemberHistory;

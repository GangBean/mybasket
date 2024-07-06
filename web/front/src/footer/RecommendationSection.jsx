import React from "react";
import LoginButton from "../header/userInfo/Login";
import RecommendationBox from "./RecommendationBox";

const RecommendationSection = ({ isLoggedIn }) => {
    return (
        <div className="recommendationSection">
            {isLoggedIn ? <MemberMode /> : <GuestMode isLoggedIn={isLoggedIn}/>}
        </div>
    );
};

const MemberMode = () => {
    return (
        <div className="memberMode">
            <RecommendationBox />
        </div>
    );
};
const GuestMode = ( {isLoggedIn} ) => {
    return (
        <div className="guestMode">
            <LoginButton isLoggedIn={isLoggedIn}/>
        </div>
    );
};

export default RecommendationSection;

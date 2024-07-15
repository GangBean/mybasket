import React from "react";
import RecipesBox from "./RecipesBox";

const RandomRecommendation = ({ getNext }) => {
    return (
        <div className="randomRecommendation">
            <RandomRecommendationTitle></RandomRecommendationTitle>
            <RecipesBox getNext={getNext}></RecipesBox>
        </div>
    );
};

const RandomRecommendationTitle = () => {
    return (
        <div className="randomRecommendationTitle">
            <h2>색다른 레시피</h2>
        </div>
    );
};

export default RandomRecommendation;

import React, { useState } from "react";
import YesterdayRankingTitle from "./YesterdayRankingTitle";
import YesterdayRankingBox from "./YesterdayRankingBox";
import "./YesterdayRanking.css";

const YesterdayRanking = ({ getNext }) => {
    const [recipes, setRecipes] = useState(getNext());
    return (
        <div className="yesterdayRanking">
            <YesterdayRankingTitle></YesterdayRankingTitle>
            <YesterdayRankingBox recipes={recipes} setRecipes={setRecipes} getNext={getNext}></YesterdayRankingBox>
        </div>
    );
};

export default YesterdayRanking;

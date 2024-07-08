import React, { useState } from "react";
import RankingRecipes from "./RankingRecipes";
import MoreButton from "./MoreButton";

const YesterdayRanking = ({ getNext }) => {
    const [recipes, setRecipes] = useState(getNext());
    return (
        <div className="yesterdayRanking">
            <YesterdayRankingTitle></YesterdayRankingTitle>
            <RankingRecipes recipes={recipes}></RankingRecipes>
            <MoreButton items={recipes} setItems={setRecipes} getNext={getNext}></MoreButton>
        </div>
    );
};

const YesterdayRankingTitle = () => {
    return (
        <div className="yesterdayRankingTitle">
            <h2>어제의 레시피</h2>
        </div>
    );
};

export default YesterdayRanking;

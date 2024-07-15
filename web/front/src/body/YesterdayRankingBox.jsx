import React from "react";
import RankingRecipes from "./RankingRecipes";
import MoreButton from "./MoreButton";

const YesterdayRankingBox = ({ recipes, setRecipes, getNext }) => {
    return (
        <div className="yesterdayRankingBox">
            <RankingRecipes recipes={recipes}></RankingRecipes>
            <MoreButton items={recipes} setItems={setRecipes} getNext={getNext}></MoreButton>
        </div>
    );
};


export default YesterdayRankingBox;

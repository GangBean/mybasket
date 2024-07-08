import React from "react";
import { useState } from "react";
import RankingRecipes from "./RankingRecipes";
import MoreButton from "./MoreButton";

const AllTimeRanking = ({ getNext }) => {
    const [recipes, setRecipes] = useState(getNext());
    return (
        <div className="allTimeRanking">
            <AllTimeRankingTitle></AllTimeRankingTitle>
            <RankingRecipes recipes={recipes}></RankingRecipes>
            <MoreButton recipes={recipes} setRecipes={setRecipes} getNext={getNext}></MoreButton>
        </div>
    );
};

const AllTimeRankingTitle = () => {
    return (
        <div className="allTimeRankingTitle">
            <h2>베스트 레시피</h2>
        </div>
    );
}

export default AllTimeRanking;

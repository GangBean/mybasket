import React, { useState } from "react";
import RankingRecipes from "./RankingRecipes";
import MoreButton from "./MoreButton";

const YesterdayRanking = ({ getNext }) => {
    const [recipes, setRecipes] = useState([]);
    return (
        <div className="yesterdayRanking">
            <RankingRecipes recipes={recipes}></RankingRecipes>
            <MoreButton recipes={recipes} setRecipes={setRecipes} getNext={getNext}></MoreButton>
        </div>
    );
};

export default YesterdayRanking;

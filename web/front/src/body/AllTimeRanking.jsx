import React from "react";
import { useState } from "react";
import AllTimeRankingBox from "./AllTimeRankingBox";
import "./AllTimeRanking.css";
import AllTimeRankingTitle from "./AllTimeRaningTitle";

const AllTimeRanking = ({ getNext }) => {
    const [recipes, setRecipes] = useState(getNext());
    return (
        <div className="allTimeRanking">
            <AllTimeRankingTitle></AllTimeRankingTitle>
            <AllTimeRankingBox recipes={recipes} setRecipes={setRecipes} getNext={getNext}></AllTimeRankingBox>
        </div>
    );
};

export default AllTimeRanking;

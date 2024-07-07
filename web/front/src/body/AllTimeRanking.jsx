import React from "react";
import { useState } from "react";
import RankingRecipes from "./RankingRecipes";
import MoreButton from "./MoreButton";

const AllTimeRanking = ({ getNext }) => {
    const [recipes, setRecipes] = useState([]);
    return (
        <div className="allTimeRanking">
            <RankingRecipes recipes={recipes}></RankingRecipes>
            <MoreButton recipes={recipes} setRecipes={setRecipes} getNext={getNext}></MoreButton>
        </div>
    );
};

export default AllTimeRanking;

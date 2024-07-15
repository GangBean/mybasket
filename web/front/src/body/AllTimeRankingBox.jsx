import React from "react";
import RankingRecipes from "./RankingRecipes";
import MoreButton from "./MoreButton";

const AllTimeRankingBox = ({ recipes, setRecipes, getNext }) => {
    return (
        <div className="allTimeRankingBox">
            <RankingRecipes recipes={recipes}></RankingRecipes>
            <MoreButton items={recipes} setItems={setRecipes} getNext={getNext}></MoreButton>
        </div>
    );

};

export default AllTimeRankingBox;

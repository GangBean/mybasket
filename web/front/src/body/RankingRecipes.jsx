import React from "react";
import RankingRecipe from "./RankingRecipe";

const RankingRecipes = ({ recipes }) => {
    return (
        <ol className="rankingRecipes">
            {recipes.map((recipe, ranking) => <RankingRecipe key={recipe.id} recipe={recipe} ranking={ranking}></RankingRecipe>)}
        </ol>
    );
};

export default RankingRecipes;

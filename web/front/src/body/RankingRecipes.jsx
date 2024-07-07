import React from "react";
import RankingRecipe from "./RankingRecipe";

const RankingRecipes = ({ recipes }) => {
    return (
        <ol className="rankingRecipes">
            {recipes.map(recipe => <RankingRecipe key={recipe.recipeId} recipe={recipe}></RankingRecipe>)}
        </ol>
    );
};

export default RankingRecipes;

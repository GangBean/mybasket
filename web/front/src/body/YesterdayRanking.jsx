import React, { useState } from "react";
import RankingRecipe from "./RankingRecipe";
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

const RankingRecipes = ({ recipes }) => {
    return (
        <ol className="rankingRecipes">
            {recipes.map(recipe => <RankingRecipe key={recipe.recipeId} recipe={recipe}></RankingRecipe>)}
        </ol>
    );
};

export default YesterdayRanking;

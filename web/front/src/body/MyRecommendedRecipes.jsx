import React from "react";
import MyRecommendedRecipe from "./MyRecommendedRecipe";

const MyRecommendedRecipes = ({ recipes }) => {
    return (
        <div className="myRecommendedRecipes">
            {recipes.map(recipe => <MyRecommendedRecipe recipe={recipe}></MyRecommendedRecipe>)}
        </div>
    );
};

export default MyRecommendedRecipes;
